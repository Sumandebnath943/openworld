// ============================================================================
// AETHERIA OPEN WORLD ENGINE - Realistic Human Gait, 4x4 Suspension & Car
// Drivetrain Physics, and Aerodynamic Twin-Jet Aircraft Flight Controller
// ============================================================================

import * as THREE from 'three';
import { WATER_LEVEL, WORLD_HALF_EXTENT } from './WorldGenerator.js';
import { createHumanRig, animateHumanRig } from './LifeSimulation.js';
import { clamp, lerp } from './Noise.js';

export const MODES = {
  EXPLORER: 'explorer',
  ROVER: 'rover',
  DRONE: 'drone',
  ROCKET: 'rocket'
};

export class TraversalController {
  constructor(camera, scene, worldGen, domElement) {
    this.camera = camera;
    this.camera.rotation.order = 'YXZ';
    this.scene = scene;
    this.worldGen = worldGen;
    this.domElement = domElement;

    this.mode = MODES.EXPLORER;
    this.thirdPerson = true;

    // Start on Solis Coastal Boulevard overlooking Golden Bay Bridge, Pedestrians & City Traffic
    this.position = new THREE.Vector3(-73.33, 12.5, 220.0);
    this.velocity = new THREE.Vector3();
    this.yaw = 1.57; // Facing West down Coastal Boulevard toward Golden Bay Suspension Bridge
    this.pitch = -0.05;

    // Explorer state
    this.onGround = true;
    this.isSwimming = false;
    this.speedMs = 0;
    this.walkCycle = 0;

    // Realistic Car Physics & Drivetrain state
    this.carSpeed = 0;
    this.carSteer = 0;
    this.carLateralVel = 0;
    this.wheelRotation = 0;
    this.engineRpm = 850;
    this.currentGear = 'N';
    this.suspensionPitch = 0;
    this.suspensionRoll = 0;

    // Realistic Aircraft Aerodynamics state
    this.airThrottle = 0.55; // 0..1.0
    this.airSpeed = 0;
    this.airPitch = 0.02;
    this.airRoll = 0;
    this.gForce = 1.0;
    this.gearDeployed = true;

    // SpaceX Starship Rocket & Spaceflight state
    this.rocketThrottle = 0.0;
    this.rocketSpeed = 0.0;
    this.rocketPitch = -Math.PI * 0.5; // Starts pointing straight up on launch pad
    this.rocketRoll = 0.0;
    this.rocketYaw = 0.0;
    this.rocketStage = 1; // 1 = Full Stack (Booster + Ship), 2 = Orbital Starship
    this.warpBoost = false;
    this.launchInitiated = false;

    // Smooth Camera & Suspension state (eliminates traversal jitter)
    this.smoothLookTarget = new THREE.Vector3();
    this.chassisTerrainPitch = 0;
    this.chassisTerrainRoll = 0;
    this.smoothCamFloorY = 0;
    this.camOrbitYaw = 0;
    this.camOrbitPitch = 0;
    this.orbitResetTimer = 0;

    // Input state
    this.keys = {};
    this.isPointerLocked = false;
    this.isDraggingMouse = false;
    this.flashlightOn = false;

    this._buildExplorerMesh();
    this._buildRealisticCarMesh();
    this._buildRealisticAircraftMesh();
    this._buildRealisticRocketMesh();
    this._buildFlashlight();
    this._bindInputs();

    this.position.y = this.worldGen.getCollisionHeight(this.position.x, this.position.z);
    this._syncModeMeshes();
  }

  // 1. Articulated Multi-Jointed Human Explorer Rig
  _buildExplorerMesh() {
    this.humanRig = createHumanRig({ role: 'explorer', seed: 0.42 });
    this.explorerGroup = this.humanRig.root;
    this.scene.add(this.explorerGroup);
  }

  // 2. Sculpted Grand Tourer Performance Coupe / SUV with Alloy Rims & Brake Calipers
  _buildRealisticCarMesh() {
    this.roverGroup = new THREE.Group();
    this.roverChassis = new THREE.Group();
    this.roverGroup.add(this.roverChassis);

    const paintMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.16, metalness: 0.85 });
    const carbonMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.55, metalness: 0.4 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.15, metalness: 0.95 });
    const caliperMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.3, metalness: 0.5 });
    const rotorMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.25, metalness: 0.9 });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x070b12,
      roughness: 0.05,
      metalness: 0.95,
      transparent: true,
      opacity: 0.82
    });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x141416, roughness: 0.88 });
    const headLightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const drlMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    this.brakeLightMat = new THREE.MeshBasicMaterial({ color: 0x991b1b });

    // Lower Sculpted Body & Flared Wheel Arches
    const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(2.08, 0.54, 4.68), paintMat);
    lowerBody.position.y = 0.72;
    lowerBody.castShadow = true;
    this.roverChassis.add(lowerBody);

    // Carbon Fiber Front Splitter, Side Rocker Skirts & Rear Diffuser
    const carbonSill = new THREE.Mesh(new THREE.BoxGeometry(2.14, 0.12, 4.76), carbonMat);
    carbonSill.position.y = 0.46;
    this.roverChassis.add(carbonSill);

    const frontSplitter = new THREE.Mesh(new THREE.BoxGeometry(2.10, 0.06, 0.42), carbonMat);
    frontSplitter.position.set(0, 0.42, -2.42);
    this.roverChassis.add(frontSplitter);

    const rearDiffuser = new THREE.Mesh(new THREE.BoxGeometry(2.04, 0.16, 0.36), carbonMat);
    rearDiffuser.position.set(0, 0.48, 2.40);
    this.roverChassis.add(rearDiffuser);

    // Sloped Aerodynamic Hood with Sculpted Power Bulge & Vent
    const hood = new THREE.Mesh(new THREE.BoxGeometry(1.94, 0.16, 1.48), paintMat);
    hood.position.set(0, 1.02, -1.52);
    hood.rotation.x = 0.09;
    hood.castShadow = true;
    this.roverChassis.add(hood);

    const hoodVent = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.04, 0.38), carbonMat);
    hoodVent.position.set(0, 1.06, -1.35);
    hoodVent.rotation.x = 0.09;
    this.roverChassis.add(hoodVent);

    // Sculpted Fastback Cabin Greenhouse & Tinted Windshield
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.74, 0.56, 2.38), glassMat);
    cabin.position.set(0, 1.34, 0.20);
    this.roverChassis.add(cabin);

    // Roof Panel with Carbon Antenna Shark Fin
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.68, 0.06, 2.12), paintMat);
    roof.position.set(0, 1.63, 0.24);
    roof.castShadow = true;
    const sharkFin = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.12, 4), carbonMat);
    sharkFin.rotation.x = -0.4;
    sharkFin.position.set(0, 1.70, 1.15);
    this.roverChassis.add(roof, sharkFin);

    // Interior Sport Bucket Seats & Steering Wheel visible through glass
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.8 });
    for (const sx of [-0.44, 0.44]) {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.62, 0.46), seatMat);
      seat.position.set(sx, 1.08, -0.06);
      this.roverChassis.add(seat);
    }

    // Aerodynamic Side Wing Mirrors with Integrated LED Strips
    for (const sx of [-1.10, 1.10]) {
      const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.16), paintMat);
      mirror.position.set(sx, 1.14, -0.66);
      const mGlow = new THREE.Mesh(new THREE.BoxGeometry(0.245, 0.03, 0.04), drlMat);
      mGlow.position.set(sx, 1.14, -0.74);
      this.roverChassis.add(mirror, mGlow);
    }

    // Front Fascia: Hexagonal Grille, Projector Headlights & Cyan DRL Eyebrows
    const grille = new THREE.Mesh(new THREE.BoxGeometry(1.32, 0.30, 0.08), carbonMat);
    grille.position.set(0, 0.74, -2.36);
    this.roverChassis.add(grille);

    this.carHeadlights = [];
    for (const sx of [-0.74, 0.74]) {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.14, 0.08), headLightMat);
      hl.position.set(sx, 0.84, -2.36);
      const drl = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.03, 0.09), drlMat);
      drl.position.set(sx, 0.92, -2.36);
      this.roverChassis.add(hl, drl);

      // Real High-Intensity Projector LED Spotlight
      const spot = new THREE.SpotLight(0xfff8ee, 38.0, 190.0, Math.PI * 0.28, 0.55, 1.0);
      spot.position.set(sx, 0.84, -2.4);
      const spotTarget = new THREE.Object3D();
      spotTarget.position.set(sx * 0.7, -0.2, -65.0);
      this.roverChassis.add(spot, spotTarget);
      spot.target = spotTarget;
      this.carHeadlights.push(spot);
    }

    // Wide Forward Ground Floodlight (illuminates road asphalt and road shoulders)
    const roadFlood = new THREE.PointLight(0xfff4e6, 8.5, 45.0, 1.2);
    roadFlood.position.set(0, 0.88, -2.8);
    this.roverChassis.add(roadFlood);
    this.carHeadlights.push(roadFlood);

    // Continuous 3D Rear LED Light Bar & Quad Chrome Exhaust Tips
    const rearLightBar = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.12, 0.08), this.brakeLightMat);
    rearLightBar.position.set(0, 0.88, 2.36);
    this.roverChassis.add(rearLightBar);

    for (const sx of [-0.72, -0.58, 0.58, 0.72]) {
      const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.18, 12), chromeMat);
      exhaust.rotation.x = Math.PI * 0.5;
      exhaust.position.set(sx, 0.44, 2.42);
      this.roverChassis.add(exhaust);
    }

    // 4 Independent Suspension Wheels with Sport 5-Spoke Alloy Rims, Rotors & Brembo Calipers
    this.roverWheels = [];
    const tireGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.32, 22);
    tireGeo.rotateZ(Math.PI * 0.5);
    const rimGeo = new THREE.CylinderGeometry(0.30, 0.30, 0.34, 16);
    rimGeo.rotateZ(Math.PI * 0.5);
    const rotorGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.06, 16);
    rotorGeo.rotateZ(Math.PI * 0.5);

    const wheelCoords = [
      [-1.04, 0.44, -1.46, true],
      [1.04, 0.44, -1.46, true],
      [-1.04, 0.44, 1.46, false],
      [1.04, 0.44, 1.46, false]
    ];

    for (const [wx, wy, wz, isFront] of wheelCoords) {
      const steerPivot = new THREE.Group();
      steerPivot.position.set(wx, wy, wz);

      const spinGroup = new THREE.Group();
      const tireMesh = new THREE.Mesh(tireGeo, tireMat);
      tireMesh.castShadow = true;
      const rimMesh = new THREE.Mesh(rimGeo, chromeMat);
      const rotorMesh = new THREE.Mesh(rotorGeo, rotorMat);
      spinGroup.add(tireMesh, rimMesh, rotorMesh);

      // Red Brake Caliper mounted stationary on steering knuckle
      const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 0.08), caliperMat);
      caliper.position.set(wx > 0 ? -0.06 : 0.06, 0.12, 0.12);
      steerPivot.add(caliper);

      steerPivot.add(spinGroup);
      this.roverGroup.add(steerPivot);
      this.roverWheels.push({ steerPivot, wheelMesh: spinGroup, baseX: wx, baseY: wy, baseZ: wz, isFront });
    }

    this.scene.add(this.roverGroup);
  }

  // 3. Sculpted Supersonic Twin-Turbofan Jet with Canted Twin-Tails & Navigation Strobes
  _buildRealisticAircraftMesh() {
    this.droneGroup = new THREE.Group();
    this.droneBody = new THREE.Group();
    this.droneGroup.add(this.droneBody);

    const whiteHull = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.18, metalness: 0.65 });
    const blueStripe = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.25, metalness: 0.6 });
    const darkMetal = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.35, metalness: 0.85 });
    const canopyMat = new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.05, metalness: 0.98 });
    const burnerMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const navRed = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const navGreen = new THREE.MeshBasicMaterial({ color: 0x22c55e });

    // Aerodynamic Fuselage with Chined Nose & Titanium Radome Needle
    const midFuse = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.68, 5.0, 18), whiteHull);
    midFuse.rotation.x = Math.PI * 0.5;
    midFuse.castShadow = true;
    this.droneBody.add(midFuse);

    const noseCone = new THREE.Mesh(new THREE.ConeGeometry(0.68, 2.6, 18), whiteHull);
    noseCone.rotation.x = -Math.PI * 0.5;
    noseCone.position.z = -3.8;
    this.droneBody.add(noseCone);

    const pitotProbe = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.85, 6), darkMetal);
    pitotProbe.rotation.x = Math.PI * 0.5;
    pitotProbe.position.z = -5.3;
    this.droneBody.add(pitotProbe);

    const tailCone = new THREE.Mesh(new THREE.ConeGeometry(0.68, 2.4, 18), whiteHull);
    tailCone.rotation.x = Math.PI * 0.5;
    tailCone.position.z = 3.7;
    this.droneBody.add(tailCone);

    // Streamlined Frameless Cockpit Glass Canopy
    const canopy = new THREE.Mesh(new THREE.SphereGeometry(0.58, 16, 12), canopyMat);
    canopy.scale.set(0.85, 0.56, 2.2);
    canopy.position.set(0, 0.36, -1.75);
    this.droneBody.add(canopy);

    // Swept Compound Delta Wings with Winglets
    const mainWing = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.12, 1.65), whiteHull);
    mainWing.position.set(0, -0.06, 0.25);
    mainWing.castShadow = true;
    this.droneBody.add(mainWing);

    const wingStripe = new THREE.Mesh(new THREE.BoxGeometry(9.6, 0.13, 0.35), blueStripe);
    wingStripe.position.set(0, -0.06, -0.35);
    this.droneBody.add(wingStripe);

    // Wingtip Winglets & Navigation Lights (Red Port, Green Starboard)
    for (const side of [-1, 1]) {
      const winglet = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.85, 0.72), blueStripe);
      winglet.position.set(side * 4.88, 0.32, 0.35);
      winglet.rotation.z = side * -0.22;
      this.droneBody.add(winglet);

      const navLight = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), side === -1 ? navRed : navGreen);
      navLight.position.set(side * 4.90, 0.65, 0.35);
      this.droneBody.add(navLight);

      // Underwing Turbofan Nacelles & Intake Cowlings
      const nacelle = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.34, 1.85, 14), whiteHull);
      nacelle.rotation.x = Math.PI * 0.5;
      nacelle.position.set(side * 1.85, -0.38, 0.3);
      this.droneBody.add(nacelle);

      const intake = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.25, 12), darkMetal);
      intake.rotation.x = Math.PI * 0.5;
      intake.position.set(side * 1.85, -0.38, -0.62);
      this.droneBody.add(intake);
    }

    // Modern Canted Twin-Tails (Supersonic Stealth Aesthetic)
    for (const side of [-1, 1]) {
      const vTail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.75, 1.45), blueStripe);
      vTail.position.set(side * 0.72, 1.15, 3.45);
      vTail.rotation.x = -0.32;
      vTail.rotation.z = side * -0.24; // Canted outwards ~14°
      this.droneBody.add(vTail);
    }

    // All-Moving Horizontal Tail Stabilizers
    const hTail = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.08, 0.95), whiteHull);
    hTail.position.set(0, 0.25, 3.95);
    this.droneBody.add(hTail);

    // Twin Afterburning Turbofan Exhaust Nozzles with Shock Diamonds
    this.thrusterGlows = [];
    for (const side of [-1.85, 1.85]) {
      const plume = new THREE.Mesh(new THREE.ConeGeometry(0.26, 1.4, 12), burnerMat);
      plume.rotation.x = Math.PI * 0.5;
      plume.position.set(side, -0.38, 1.65);
      this.droneBody.add(plume);
      this.thrusterGlows.push(plume);
    }

    // Retractable Tricycle Landing Gear
    this.landingGearGroup = new THREE.Group();
    const strutGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.75, 6);
    const gWheelGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.12, 10);
    gWheelGeo.rotateZ(Math.PI * 0.5);

    for (const [gx, gz] of [[0, -2.5], [-1.35, 0.45], [1.35, 0.45]]) {
      const s = new THREE.Mesh(strutGeo, darkMetal);
      s.position.set(gx, -0.68, gz);
      const w = new THREE.Mesh(gWheelGeo, darkMetal);
      w.position.set(gx, -1.02, gz);
      this.landingGearGroup.add(s, w);
    }
    this.droneBody.add(this.landingGearGroup);

    // High-Intensity Forward Runway & Mountain Searchlights
    this.aircraftHeadlights = [];
    for (const sx of [-1.2, 1.2]) {
      const spot = new THREE.SpotLight(0xfff8ee, 48.0, 320.0, Math.PI * 0.28, 0.6, 1.0);
      spot.position.set(sx, -0.4, -2.8);
      const target = new THREE.Object3D();
      target.position.set(sx * 0.5, -4.5, -140.0);
      this.droneBody.add(spot, target);
      spot.target = target;
      this.aircraftHeadlights.push(spot);
    }

    this.scene.add(this.droneGroup);
  }

  // 4. SpaceX Starship Full-Stack & Orbital Vehicle with Stainless Steel & Heat Shield
  _buildRealisticRocketMesh() {
    this.rocketGroup = new THREE.Group();
    this.rocketChassis = new THREE.Group();
    this.rocketGroup.add(this.rocketChassis);

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xecf0f5,
      metalness: 0.96,
      roughness: 0.12
    });
    const heatShieldMat = new THREE.MeshStandardMaterial({
      color: 0x111317,
      metalness: 0.15,
      roughness: 0.9
    });
    const darkSteelMat = new THREE.MeshStandardMaterial({
      color: 0x22262e,
      metalness: 0.75,
      roughness: 0.45
    });
    const raptorBellMat = new THREE.MeshStandardMaterial({
      color: 0x3a3f47,
      metalness: 0.85,
      roughness: 0.35
    });

    const radius = 4.5; // 9-meter diameter

    // STAGE 2: STARSHIP UPPER STAGE (Height 50m)
    this.starshipStageMesh = new THREE.Group();

    // Main 32m cylinder
    const shipCyl = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, 32.0, 32), chromeMat);
    shipCyl.position.y = 16.0;
    shipCyl.castShadow = true;

    // Black Ceramic Tile Heat Shield on leeward half (+Z)
    const shieldGeo = new THREE.CylinderGeometry(radius + 0.04, radius + 0.04, 32.0, 20, 1, false, 0, Math.PI);
    shieldGeo.rotateY(-Math.PI * 0.5);
    const shieldMesh = new THREE.Mesh(shieldGeo, heatShieldMat);
    shieldMesh.position.y = 16.0;

    // Aerodynamic Gothic Arch Nosecone (18m tall)
    const noseGeo = new THREE.ConeGeometry(radius, 18.0, 32);
    const noseMesh = new THREE.Mesh(noseGeo, chromeMat);
    noseMesh.position.y = 41.0;
    noseMesh.castShadow = true;

    const noseShieldGeo = new THREE.ConeGeometry(radius + 0.03, 18.0, 20, 1, false, 0, Math.PI);
    noseShieldGeo.rotateY(-Math.PI * 0.5);
    const noseShield = new THREE.Mesh(noseShieldGeo, heatShieldMat);
    noseShield.position.y = 41.0;

    // Forward Actuating Canard Flaps
    this.rocketForwardFlaps = [];
    for (const side of [-1, 1]) {
      const flapPivot = new THREE.Group();
      flapPivot.position.set(side * (radius + 0.2), 34.0, 0.4);
      const flap = new THREE.Mesh(new THREE.BoxGeometry(0.3, 4.8, 3.2), chromeMat);
      flap.position.x = side * 1.5;
      flapPivot.add(flap);
      this.rocketForwardFlaps.push(flapPivot);
      this.starshipStageMesh.add(flapPivot);
    }

    // Aft Actuating Body Delta Flaps
    this.rocketAftFlaps = [];
    for (const side of [-1, 1]) {
      const flapPivot = new THREE.Group();
      flapPivot.position.set(side * (radius + 0.2), 6.5, -0.4);
      const flap = new THREE.Mesh(new THREE.BoxGeometry(0.35, 12.0, 4.5), chromeMat);
      flap.position.x = side * 2.2;
      flapPivot.add(flap);
      this.rocketAftFlaps.push(flapPivot);
      this.starshipStageMesh.add(flapPivot);
    }

    // 6 Starship Raptor Engines (3 center sea-level, 3 vacuum engines)
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const bell = new THREE.Mesh(new THREE.ConeGeometry(0.75, 2.2, 10, 1, true), raptorBellMat);
      bell.position.set(Math.cos(angle) * 1.2, -1.0, Math.sin(angle) * 1.2);
      this.starshipStageMesh.add(bell);
    }
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2 + Math.PI / 3;
      const rvac = new THREE.Mesh(new THREE.ConeGeometry(1.4, 2.8, 12, 1, true), chromeMat);
      rvac.position.set(Math.cos(angle) * 2.8, -1.2, Math.sin(angle) * 2.8);
      this.starshipStageMesh.add(rvac);
    }

    this.starshipStageMesh.add(shipCyl, shieldMesh, noseMesh, noseShield);
    this.rocketChassis.add(this.starshipStageMesh);

    // STAGE 1: SUPER HEAVY BOOSTER (71m tall, detachable)
    this.boosterStageMesh = new THREE.Group();
    this.boosterStageMesh.position.y = -72.0;

    const boosterGeo = new THREE.CylinderGeometry(radius, radius, 70.0, 32);
    const boosterMesh = new THREE.Mesh(boosterGeo, chromeMat);
    boosterMesh.position.y = 35.0;
    boosterMesh.castShadow = true;
    this.boosterStageMesh.add(boosterMesh);

    // 4 Titanium Grid Fins
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.35, 3.8, 6.2), darkSteelMat);
      fin.position.set(Math.cos(angle) * (radius + 0.5), 65.0, Math.sin(angle) * (radius + 0.5));
      fin.rotation.y = angle;
      this.boosterStageMesh.add(fin);
    }

    // 33 Raptor Engine Bells at base of booster
    for (let c = 0; c < 13; c++) {
      const angle = (c / 12) * Math.PI * 2;
      const r = c === 0 ? 0 : 1.8;
      const bell = new THREE.Mesh(new THREE.ConeGeometry(0.75, 2.2, 10, 1, true), raptorBellMat);
      bell.position.set(Math.cos(angle) * r, -1.0, Math.sin(angle) * r);
      this.boosterStageMesh.add(bell);
    }
    for (let o = 0; o < 20; o++) {
      const angle = (o / 20) * Math.PI * 2;
      const bell = new THREE.Mesh(new THREE.ConeGeometry(0.72, 2.2, 10, 1, true), raptorBellMat);
      bell.position.set(Math.cos(angle) * 3.6, -1.0, Math.sin(angle) * 3.6);
      this.boosterStageMesh.add(bell);
    }

    this.rocketChassis.add(this.boosterStageMesh);

    // RAPTOR ENGINE EXHAUST FLAME PLUME (Multi-Tier Shock Diamonds)
    this.rocketPlumeGroup = new THREE.Group();
    this.rocketPlumeGroup.position.y = -1.2;

    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.95
    });
    this.plumeCore = new THREE.Mesh(new THREE.ConeGeometry(2.4, 18.0, 14, 1, true), coreMat);
    this.plumeCore.rotation.x = Math.PI;
    this.plumeCore.position.y = -9.0;

    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xff6b00,
      transparent: true,
      opacity: 0.75
    });
    this.plumeOuter = new THREE.Mesh(new THREE.ConeGeometry(5.2, 38.0, 14, 1, true), outerMat);
    this.plumeOuter.rotation.x = Math.PI;
    this.plumeOuter.position.y = -19.0;

    this.rocketEngineLight = new THREE.PointLight(0xff7700, 0.0, 120.0);
    this.rocketEngineLight.position.y = -3.0;

    this.rocketPlumeGroup.add(this.plumeCore, this.plumeOuter, this.rocketEngineLight);
    this.rocketChassis.add(this.rocketPlumeGroup);

    // RE-ENTRY PLASMA SHEATH
    const plasmaMat = new THREE.MeshBasicMaterial({
      color: 0xff4500,
      transparent: true,
      opacity: 0.0,
      side: THREE.BackSide
    });
    this.reentryPlasma = new THREE.Mesh(new THREE.CylinderGeometry(radius + 0.8, radius + 1.2, 55.0, 20), plasmaMat);
    this.reentryPlasma.position.y = 26.0;
    this.rocketChassis.add(this.reentryPlasma);

    // Dual Landing Searchlights
    this.rocketHeadlights = [];
    for (const sx of [-2.4, 2.4]) {
      const spot = new THREE.SpotLight(0xfff8ee, 0.0, 450.0, Math.PI * 0.32, 0.5, 1.0);
      spot.position.set(sx, 48.0, 1.5);
      const target = new THREE.Object3D();
      target.position.set(sx, 180.0, 1.5);
      this.rocketChassis.add(spot, target);
      spot.target = target;
      this.rocketHeadlights.push(spot);
    }

    this.scene.add(this.rocketGroup);
  }

  _buildFlashlight() {
    this.spotLight = new THREE.SpotLight(0xfffbeb, 18.0, 95.0, Math.PI * 0.32, 0.55, 1.1);
    this.spotLight.castShadow = false;
    this.scene.add(this.spotLight);
    this.scene.add(this.spotLight.target);
  }

  _bindInputs() {
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      const code = e.code;
      this.keys[code] = true;

      if (code === 'Digit1') this.setMode(MODES.EXPLORER);
      if (code === 'Digit2' || code === 'KeyV') {
        this.setMode(this.mode === MODES.ROVER ? MODES.EXPLORER : MODES.ROVER);
      }
      if (code === 'Digit3' || code === 'KeyF') {
        this.setMode(this.mode === MODES.DRONE ? MODES.EXPLORER : MODES.DRONE);
      }
      if (code === 'Digit4' || code === 'KeyR') {
        this.setMode(this.mode === MODES.ROCKET ? MODES.EXPLORER : MODES.ROCKET);
      }
      if (code === 'KeyC') {
        this.thirdPerson = !this.thirdPerson;
        this._syncModeMeshes();
      }
      if (code === 'KeyL') {
        this.flashlightOn = !this.flashlightOn;
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    this.domElement.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        this.isDraggingMouse = true;
      }
    });

    window.addEventListener('mouseup', () => {
      this.isDraggingMouse = false;
    });

    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = document.pointerLockElement === this.domElement;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isPointerLocked && !this.isDraggingMouse) return;
      const sens = 0.0022;
      if (this.mode === MODES.EXPLORER) {
        this.yaw -= e.movementX * sens;
        this.pitch = clamp(this.pitch - e.movementY * sens, -1.35, 1.35);
      } else if (this.mode === MODES.ROVER) {
        // In car mode, mouse orbits chase camera smoothly around vehicle without steering wheels
        this.camOrbitYaw -= e.movementX * sens;
        this.camOrbitPitch = clamp(this.camOrbitPitch - e.movementY * sens, -0.65, 0.75);
        this.orbitResetTimer = 3.0;
      } else if (this.mode === MODES.DRONE) {
        // In aircraft mode, mouse orbits chase camera smoothly without yanking pitch elevator
        this.camOrbitYaw -= e.movementX * sens;
        this.camOrbitPitch = clamp(this.camOrbitPitch - e.movementY * sens, -0.75, 0.75);
        this.orbitResetTimer = 3.0;
      }
    });

    this.domElement.addEventListener(
      'wheel',
      (e) => {
        if (this.mode === MODES.DRONE) {
          this.airThrottle = clamp(this.airThrottle + (e.deltaY < 0 ? 0.08 : -0.08), 0.0, 1.0);
        }
      },
      { passive: true }
    );
  }

  setMode(newMode) {
    if (this.mode === newMode) return;
    this.mode = newMode;
    this.camera.up.set(0, 1, 0);
    this.smoothLookTarget.set(0, 0, 0);
    this.smoothCamFloorY = 0;
    this.camOrbitYaw = 0;
    this.camOrbitPitch = 0;
    this.orbitResetTimer = 0;

    if (newMode === MODES.DRONE) {
      const groundY = this.worldGen.getCollisionHeight(this.position.x, this.position.z);
      // If not on airport runway, start airborne at cruising speed; on runway, allow realistic takeoff roll!
      const onRunway = this.worldGen.getRunwayInfo(this.position.x, this.position.z).onRunway;
      if (!onRunway && this.position.y < groundY + 12.0) {
        this.position.y = groundY + 38.0;
        this.airSpeed = Math.max(this.speedMs, 52.0);
        this.airThrottle = 0.65;
        this.airPitch = 0.02;
      } else {
        this.airSpeed = this.speedMs;
      }
    } else if (newMode === MODES.ROVER) {
      this.carSpeed = this.speedMs * 0.8;
      this.chassisTerrainPitch = 0;
      this.chassisTerrainRoll = 0;
    } else if (newMode === MODES.ROCKET) {
      const distToStarbase = Math.hypot(this.position.x - 1050, this.position.z - 880);
      if (distToStarbase < 350.0 && this.position.y < 80.0) {
        // Place on the Orbital Launch Mount upright ready for countdown & launch!
        this.position.set(1050, 38.0, 880);
        this.rocketPitch = -Math.PI * 0.5;
        this.rocketYaw = 0.0;
        this.rocketRoll = 0.0;
        this.rocketSpeed = 0.0;
        this.rocketThrottle = 0.0;
        this.rocketStage = 1;
        this.launchInitiated = false;
        if (this.boosterStageMesh) this.boosterStageMesh.visible = true;
      } else {
        // Orbital Space Starship
        this.rocketStage = 2;
        this.rocketThrottle = 0.5;
        this.rocketSpeed = Math.max(this.speedMs, 160.0);
        this.rocketPitch = -0.05;
        if (this.boosterStageMesh) this.boosterStageMesh.visible = false;
      }
    }
    this._syncModeMeshes();
  }

  _syncModeMeshes() {
    this.explorerGroup.visible = this.mode === MODES.EXPLORER && this.thirdPerson;
    this.roverGroup.visible = this.mode === MODES.ROVER;
    this.droneGroup.visible = this.mode === MODES.DRONE && this.thirdPerson;
    if (this.rocketGroup) {
      this.rocketGroup.visible = this.mode === MODES.ROCKET;
    }
  }

  teleportTo(x, z, heading = null) {
    this.position.x = clamp(x, -WORLD_HALF_EXTENT + 200, WORLD_HALF_EXTENT - 200);
    this.position.z = clamp(z, -WORLD_HALF_EXTENT + 200, WORLD_HALF_EXTENT - 200);
    const groundY = Math.max(WATER_LEVEL, this.worldGen.getCollisionHeight(this.position.x, this.position.z));
    const onRunway = this.worldGen.getRunwayInfo(this.position.x, this.position.z).onRunway;

    if (this.mode === MODES.ROCKET) {
      if (Math.hypot(x - 1050, z - 880) < 300) {
        // Starbase Launch Mount
        this.position.set(1050, 38.0, 880);
        this.rocketThrottle = 0.0;
        this.rocketSpeed = 0.0;
        this.rocketPitch = -Math.PI * 0.5;
        this.rocketStage = 1;
        this.launchInitiated = false;
        if (this.boosterStageMesh) this.boosterStageMesh.visible = true;
      } else if (Math.hypot(x - 800, z - 1200) < 600) {
        // Low Earth Orbit (LEO) & Space Station
        this.position.set(800, 8500, 1200);
        this.rocketThrottle = 0.45;
        this.rocketSpeed = 420.0;
        this.rocketPitch = -0.05;
        this.rocketStage = 2;
        if (this.boosterStageMesh) this.boosterStageMesh.visible = false;
      } else if (Math.hypot(x - 14000, z + 12000) < 2000) {
        // The Moon & Artemis Lunar Base
        this.position.set(14000, 16400, -12000);
        this.rocketThrottle = 0.35;
        this.rocketSpeed = 240.0;
        this.rocketPitch = -0.05;
        this.rocketStage = 2;
        if (this.boosterStageMesh) this.boosterStageMesh.visible = false;
      } else if (Math.hypot(x + 22000, z - 24000) < 2500) {
        // Planet Mars & Mars Base Alpha
        this.position.set(-22000, 22600, 24000);
        this.rocketThrottle = 0.35;
        this.rocketSpeed = 240.0;
        this.rocketPitch = -0.05;
        this.rocketStage = 2;
        if (this.boosterStageMesh) this.boosterStageMesh.visible = false;
      } else {
        this.position.set(x, groundY + 50.0, z);
        this.rocketThrottle = 0.5;
        this.rocketSpeed = 120.0;
      }
      this.velocity.set(0, 0, 0);
      this.camera.up.set(0, 1, 0);
      return;
    }

    this.position.y = (this.mode === MODES.DRONE && !onRunway) ? groundY + 55.0 : groundY + 0.1;
    this.velocity.set(0, 0, 0);
    this.carSpeed = 0;
    this.airSpeed = (this.mode === MODES.DRONE && !onRunway) ? 55.0 : 0.0;
    this.smoothLookTarget.set(0, 0, 0);
    this.chassisTerrainPitch = 0;
    this.chassisTerrainRoll = 0;
    this.smoothCamFloorY = 0;
    this.camera.up.set(0, 1, 0);
    if (heading !== null) {
      this.yaw = heading;
      this.pitch = -0.04;
      this.airPitch = 0.0;
      this.airRoll = 0.0;
    }
  }

  update(dt) {
    const clampedDt = Math.min(dt, 0.05);

    if (this.mode === MODES.EXPLORER) {
      this._updateExplorer(clampedDt);
    } else if (this.mode === MODES.ROVER) {
      this._updateRealisticCar(clampedDt);
    } else if (this.mode === MODES.DRONE) {
      this._updateRealisticAircraft(clampedDt);
    } else {
      this._updateRealisticRocket(clampedDt);
    }

    this.position.x = clamp(this.position.x, -WORLD_HALF_EXTENT, WORLD_HALF_EXTENT);
    this.position.z = clamp(this.position.z, -WORLD_HALF_EXTENT, WORLD_HALF_EXTENT);

    const sunY = this.atmosphere ? this.atmosphere.sunDirection.y : 1.0;
    const isDark = sunY < 0.15 || this.flashlightOn;

    // 1. Car Headlights (Dual High-Intensity Projector LEDs + Road Flood)
    if (this.carHeadlights) {
      const carLightsOn = (this.mode === MODES.ROVER) && (isDark || this.flashlightOn);
      for (const light of this.carHeadlights) {
        light.visible = carLightsOn;
      }
    }

    // 2. Aircraft Searchlights & Runway Landing Lights
    if (this.aircraftHeadlights) {
      const airLightsOn = (this.mode === MODES.DRONE) && (isDark || this.flashlightOn);
      for (const light of this.aircraftHeadlights) {
        light.visible = airLightsOn;
      }
    }

    // 3. Explorer Flashlight & Tactical Headlamp
    const explorerLightOn = (this.mode === MODES.EXPLORER) && (isDark || this.flashlightOn);
    this.spotLight.intensity = explorerLightOn ? 18.0 : 0.0;
    if (explorerLightOn) {
      const forward = new THREE.Vector3(-Math.sin(this.yaw), Math.sin(this.pitch), -Math.cos(this.yaw)).normalize();
      this.spotLight.position.copy(this.position).add(new THREE.Vector3(0, 1.55, 0));
      this.spotLight.target.position.copy(this.spotLight.position).addScaledVector(forward, 65.0);
    }
  }

  // ==========================================================================
  // MODE 1: BIOMECHANICAL HUMAN WALKING, JOGGING, SPRINTING, HIKING & SWIMMING
  // ==========================================================================
  _updateExplorer(dt) {
    const forwardX = -Math.sin(this.yaw);
    const forwardZ = -Math.cos(this.yaw);
    const rightX = Math.cos(this.yaw);
    const rightZ = -Math.sin(this.yaw);

    let moveForward = (this.keys['KeyW'] || this.keys['ArrowUp'] ? 1 : 0) - (this.keys['KeyS'] || this.keys['ArrowDown'] ? 1 : 0);
    let moveRight = (this.keys['KeyD'] || this.keys['ArrowRight'] ? 1 : 0) - (this.keys['KeyA'] || this.keys['ArrowLeft'] ? 1 : 0);

    const moveLen = Math.hypot(moveForward, moveRight);
    if (moveLen > 0.001) {
      moveForward /= moveLen;
      moveRight /= moveLen;
    }

    const sprinting = Boolean(this.keys['ShiftLeft'] || this.keys['ShiftRight']);
    // Realistic human walking/jogging (~2.4 m/s) vs sprinting (~7.2 m/s)
    const norm = this.worldGen.getNormalAndSlope(this.position.x, this.position.z);
    const slopePenalty = clamp(1.0 - (norm.slopeDeg / 65.0) * 0.35, 0.55, 1.0);
    const targetSpeed = moveLen > 0 ? (sprinting ? 8.2 : 2.65) * slopePenalty : 0.0;

    const desiredVx = (forwardX * moveForward + rightX * moveRight) * targetSpeed;
    const desiredVz = (forwardZ * moveForward + rightZ * moveRight) * targetSpeed;

    // Smooth human inertia acceleration/deceleration
    this.velocity.x = lerp(this.velocity.x, desiredVx, Math.min(1.0, dt * 8.5));
    this.velocity.z = lerp(this.velocity.z, desiredVz, Math.min(1.0, dt * 8.5));

    const groundY = this.worldGen.getCollisionHeight(this.position.x, this.position.z);
    const waterSurface = WATER_LEVEL - 1.15;
    this.isSwimming = groundY < waterSurface && this.position.y <= waterSurface + 0.2;

    if (this.isSwimming) {
      this.position.y = lerp(this.position.y, waterSurface, dt * 6.0);
      this.velocity.y = 0;
      this.onGround = true;
    } else {
      if (this.onGround && this.keys['Space']) {
        this.velocity.y = 7.8;
        this.onGround = false;
      }
      this.velocity.y -= 20.0 * dt;
    }

    const prevY = this.position.y;
    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.position.y += this.velocity.y * dt;

    // Resolve horizontal collision with solid city buildings & landmarks
    this.worldGen.resolveHorizontalCollision(this.position, 0.55);

    const newGroundY = this.worldGen.getCollisionHeight(this.position.x, this.position.z);
    const minHeight = Math.max(newGroundY, waterSurface);
    if (this.position.y <= minHeight) {
      this.position.y = minHeight;
      this.velocity.y = 0;
      this.onGround = true;
    }

    this.speedMs = Math.hypot(this.velocity.x, this.velocity.z);
    const slopePitch = clamp((this.position.y - prevY) / Math.max(0.02, this.speedMs * dt), -0.35, 0.35);

    // Update Articulated Human Rig
    this.explorerGroup.position.copy(this.position);
    if (this.speedMs > 0.15) {
      const targetRotY = Math.atan2(-this.velocity.x, -this.velocity.z);
      // Shortest-angle smooth turn
      let diff = ((targetRotY - this.explorerGroup.rotation.y + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      this.explorerGroup.rotation.y += diff * Math.min(1.0, dt * 12.0);
    } else {
      this.explorerGroup.rotation.y = lerp(this.explorerGroup.rotation.y, this.yaw, dt * 5.0);
    }

    animateHumanRig(this.humanRig, this.speedMs, dt, {
      slopePitch,
      isSwimming: this.isSwimming,
      isHiker: this.position.y > 75.0
    });
    this.walkCycle = this.humanRig.phase;

    // Camera Follow with Subtle Natural Head Bob in 1st Person
    if (this.thirdPerson) {
      const camDist = 4.6;
      const camHeight = 1.85;
      const cx = this.position.x + Math.sin(this.yaw) * Math.cos(this.pitch) * camDist;
      const cz = this.position.z + Math.cos(this.yaw) * Math.cos(this.pitch) * camDist;
      const cy = this.position.y + camHeight - Math.sin(this.pitch) * camDist;
      const camTerrainY = this.worldGen.getCollisionHeight(cx, cz) + 0.5;

      const camVec = new THREE.Vector3(cx, Math.max(cy, camTerrainY), cz);
      this.worldGen.resolveHorizontalCollision(camVec, 0.5);
      this.camera.position.copy(camVec);
      this.camera.lookAt(this.position.x, this.position.y + 1.48, this.position.z);
    } else {
      const bobY = this.speedMs > 0.2 ? Math.abs(Math.cos(this.humanRig.phase)) * 0.045 : 0;
      this.camera.position.set(this.position.x, this.position.y + 1.68 + bobY, this.position.z);
      const target = new THREE.Vector3(
        this.camera.position.x - Math.sin(this.yaw) * Math.cos(this.pitch),
        this.camera.position.y + Math.sin(this.pitch),
        this.camera.position.z - Math.cos(this.yaw) * Math.cos(this.pitch)
      );
      this.camera.lookAt(target);
    }
    this.camera.fov = lerp(this.camera.fov, sprinting && this.speedMs > 5 ? 69 : 64, dt * 6);
    this.camera.updateProjectionMatrix();
  }

  // ==========================================================================
  // MODE 2: REALISTIC 4-WHEEL SUSPENSION, 6-SPEED GEARBOX & ACKERMANN CAR PHYSICS
  // ==========================================================================
  _updateRealisticCar(dt) {
    const throttleInput = (this.keys['KeyW'] || this.keys['ArrowUp'] ? 1 : 0);
    const brakeInput = (this.keys['KeyS'] || this.keys['ArrowDown'] ? 1 : 0);
    const steerInput = (this.keys['KeyA'] || this.keys['ArrowLeft'] ? 1 : 0) - (this.keys['KeyD'] || this.keys['ArrowRight'] ? 1 : 0);
    const boost = Boolean(this.keys['ShiftLeft'] || this.keys['ShiftRight']);
    const handbrake = Boolean(this.keys['Space']);

    const forwardX = -Math.sin(this.yaw);
    const forwardZ = -Math.cos(this.yaw);
    const rightX = Math.cos(this.yaw);
    const rightZ = -Math.sin(this.yaw);

    // Terrain grade resistance (gravity component along forward slope)
    const hFront = this.worldGen.getCollisionHeight(this.position.x + forwardX * 2.0, this.position.z + forwardZ * 2.0);
    const hRear = this.worldGen.getCollisionHeight(this.position.x - forwardX * 2.0, this.position.z - forwardZ * 2.0);
    const gradeSin = clamp((hFront - hRear) / 4.0, -0.5, 0.5);
    const gravityAccel = -9.81 * gradeSin;

    // 6-Speed Automatic Transmission & Predictable, Smooth Luxury GT Drivetrain
    const maxForwardSpeed = boost ? 36.0 : 25.0; // 90 km/h normal cruise, 130 km/h sport boost
    const engineForce = (boost ? 12.0 : 7.8) * (1.0 - Math.abs(this.carSpeed) / (maxForwardSpeed * 1.15));
    const brakeDecel = 18.0; // Firm, progressive ABS braking
    const rollingDrag = 0.65 + this.carSpeed * Math.abs(this.carSpeed) * 0.003;

    let longAccel = gravityAccel - Math.sign(this.carSpeed) * rollingDrag;
    if (throttleInput > 0) {
      if (this.carSpeed < -0.3) {
        longAccel += brakeDecel; // Braking out of reverse
      } else {
        longAccel += engineForce;
      }
    } else if (brakeInput > 0) {
      if (this.carSpeed > 0.4) {
        longAccel -= brakeDecel; // Smooth forward braking
      } else {
        longAccel -= 6.5; // Controlled reverse gear
      }
    }

    if (handbrake) {
      longAccel -= Math.sign(this.carSpeed) * 24.0;
    }

    const prevSpeed = this.carSpeed;
    this.carSpeed += longAccel * dt;
    if (throttleInput === 0 && brakeInput === 0) {
      if (Math.abs(this.carSpeed) < 0.25 && Math.abs(gradeSin) < 0.05) {
        this.carSpeed = 0;
      }
    }
    this.carSpeed = clamp(this.carSpeed, -7.0, maxForwardSpeed);

    // Illuminate brake lights when braking or handbraking
    const isBraking = (brakeInput > 0 && this.carSpeed > 0) || handbrake;
    this.brakeLightMat.color.setHex(isBraking ? 0xff2222 : 0x7f1d1d);

    // Compute Automatic Gear (1..6, R, N) & Realistic Engine RPM (850..6200)
    const absKmh = Math.abs(this.carSpeed) * 3.6;
    if (this.carSpeed < -0.5) {
      this.currentGear = 'R';
      this.engineRpm = clamp(1100 + absKmh * 85, 900, 4200);
    } else if (absKmh < 1.5 && throttleInput === 0) {
      this.currentGear = 'N';
      this.engineRpm = lerp(this.engineRpm, 850, dt * 6);
    } else {
      const gearSpeeds = [0, 22, 45, 68, 92, 115, 140];
      let g = 1;
      while (g < 6 && absKmh > gearSpeeds[g]) g++;
      this.currentGear = String(g);
      const low = gearSpeeds[g - 1] * 0.7;
      const high = gearSpeeds[g];
      const gearRatio = clamp((absKmh - low) / Math.max(10, high - low), 0.15, 1.0);
      this.engineRpm = Math.round(1400 + gearRatio * 4400);
    }

    // Speed-sensitive Ackermann Steering with Directional High-Speed Stability
    const speedRatio = Math.abs(this.carSpeed) / 25.0;
    const maxSteerAngle = 0.50 / (1.0 + speedRatio * speedRatio * 2.2);
    const steerSpeed = steerInput !== 0 ? 5.5 : 12.0;
    this.carSteer = lerp(this.carSteer, steerInput * maxSteerAngle, dt * steerSpeed);

    const wheelbase = 2.92;
    let yawRate = 0;
    if (Math.abs(this.carSpeed) > 0.15) {
      yawRate = (this.carSpeed / wheelbase) * Math.tan(this.carSteer);
      yawRate *= clamp(1.0 - speedRatio * 0.28, 0.45, 1.0);
      this.yaw += yawRate * dt;
    }

    // High lateral tire grip and stability
    const lateralGrip = handbrake ? 3.0 : 12.0;
    const centrifugalImpulse = -yawRate * this.carSpeed * (handbrake ? 0.35 : 0.08);
    this.carLateralVel = lerp(this.carLateralVel, centrifugalImpulse, dt * lateralGrip);

    this.velocity.x = forwardX * this.carSpeed + rightX * this.carLateralVel;
    this.velocity.z = forwardZ * this.carSpeed + rightZ * this.carLateralVel;

    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    this.worldGen.resolveHorizontalCollision(this.position, 1.4);
    this.speedMs = Math.hypot(this.velocity.x, this.velocity.z);

    // 4-Wheel Independent Raycast Ground Sampling & Suspension Compression
    let avgWheelY = 0;
    const wheelWorldY = [];
    for (let i = 0; i < 4; i++) {
      const w = this.roverWheels[i];
      const wx = this.position.x + rightX * w.baseX - forwardX * w.baseZ;
      const wz = this.position.z + rightZ * w.baseX - forwardZ * w.baseZ;
      const wy = Math.max(WATER_LEVEL - 0.35, this.worldGen.getCollisionHeight(wx, wz));
      wheelWorldY.push(wy);
      avgWheelY += wy * 0.25;
    }

    this.position.y = lerp(this.position.y, avgWheelY, 1.0 - Math.exp(-16.0 * dt));

    // Compute terrain pitch & roll from the 4 wheel contact heights
    const frontY = (wheelWorldY[0] + wheelWorldY[1]) * 0.5;
    const rearY = (wheelWorldY[2] + wheelWorldY[3]) * 0.5;
    const leftY = (wheelWorldY[0] + wheelWorldY[2]) * 0.5;
    const rightY = (wheelWorldY[1] + wheelWorldY[3]) * 0.5;

    const terrainPitch = Math.atan2(frontY - rearY, 2.92);
    const terrainRoll = Math.atan2(rightY - leftY, 2.04);

    // Dynamic Weight Transfer: Acceleration Squat, Braking Nose-Dive & Cornering Body Roll
    const longG = clamp((this.carSpeed - prevSpeed) / Math.max(dt, 0.005), -25, 25);
    const latG = yawRate * this.carSpeed;
    this.suspensionPitch = lerp(this.suspensionPitch, longG * 0.0038, dt * 8.0);
    this.suspensionRoll = lerp(this.suspensionRoll, -latG * 0.0055, dt * 8.0);

    // Smooth suspension orientation damping — filters out micro-bump jitter
    this.chassisTerrainPitch = lerp(this.chassisTerrainPitch, terrainPitch, 1.0 - Math.exp(-14.0 * dt));
    this.chassisTerrainRoll = lerp(this.chassisTerrainRoll, terrainRoll, 1.0 - Math.exp(-14.0 * dt));

    this.roverGroup.position.copy(this.position);
    this.roverGroup.rotation.order = 'YXZ';
    this.roverGroup.rotation.y = this.yaw;
    this.roverGroup.rotation.x = this.chassisTerrainPitch;
    this.roverGroup.rotation.z = this.chassisTerrainRoll;

    this.roverChassis.rotation.x = this.suspensionPitch;
    this.roverChassis.rotation.z = this.suspensionRoll;

    // Spin & Steer Wheels + Individual Wheel Suspension Strut Travel
    this.wheelRotation -= (this.carSpeed / 0.44) * dt;
    for (let i = 0; i < 4; i++) {
      const w = this.roverWheels[i];
      w.wheelMesh.rotation.x = this.wheelRotation;
      if (w.isFront) {
        w.steerPivot.rotation.y = this.carSteer * 1.15;
      }
      const wheelTravel = clamp(wheelWorldY[i] - this.position.y, -0.22, 0.22);
      w.steerPivot.position.y = w.baseY + wheelTravel * 0.65;
    }

    // Auto-centering Chase Orbit Camera (mouse orbits view smoothly without turning wheels)
    if (this.orbitResetTimer > 0) {
      this.orbitResetTimer -= dt;
    } else {
      this.camOrbitYaw = lerp(this.camOrbitYaw, 0, dt * 2.8);
      this.camOrbitPitch = lerp(this.camOrbitPitch, 0, dt * 2.8);
    }

    if (this.thirdPerson) {
      const dist = 8.2;
      const camHeading = this.yaw + this.camOrbitYaw - this.carSteer * 0.08;
      const camElevation = this.camOrbitPitch;
      const cx = this.position.x + Math.sin(camHeading) * Math.cos(camElevation) * dist;
      const cz = this.position.z + Math.cos(camHeading) * Math.cos(camElevation) * dist;
      const cy = this.position.y + 2.75 - Math.sin(camElevation) * dist;
      const camGround = this.worldGen.getCollisionHeight(cx, cz) + 0.8;

      // Low-pass filter camera ground clearance to prevent vertical snapping over curbs
      this.smoothCamFloorY = lerp(this.smoothCamFloorY || camGround, camGround, 1.0 - Math.exp(-10.0 * dt));
      const desiredY = Math.max(cy, this.smoothCamFloorY);

      const desiredCamPos = new THREE.Vector3(cx, desiredY, cz);
      this.worldGen.resolveHorizontalCollision(desiredCamPos, 0.5);

      const camAlpha = 1.0 - Math.exp(-14.0 * dt);
      this.camera.position.lerp(desiredCamPos, camAlpha);

      // Smooth lookAt target prevents viewing direction oscillation
      const targetY = this.position.y + 1.25 + this.chassisTerrainPitch * 0.5;
      const desiredTarget = new THREE.Vector3(this.position.x, targetY, this.position.z);
      if (this.smoothLookTarget.lengthSq() < 0.001) {
        this.smoothLookTarget.copy(desiredTarget);
      } else {
        this.smoothLookTarget.lerp(desiredTarget, 1.0 - Math.exp(-18.0 * dt));
      }
      this.camera.up.set(0, 1, 0);
      this.camera.lookAt(this.smoothLookTarget);
    } else {
      // Driver Cockpit View with free-look support
      const cockpitLookX = forwardX + Math.cos(this.yaw) * this.camOrbitYaw;
      const cockpitLookZ = forwardZ - Math.sin(this.yaw) * this.camOrbitYaw;
      this.camera.position.set(
        this.position.x - rightX * 0.42 + forwardX * 0.1,
        this.position.y + 1.38,
        this.position.z - rightZ * 0.42 + forwardZ * 0.1
      );
      this.camera.lookAt(
        this.camera.position.x + cockpitLookX * 30.0,
        this.camera.position.y + Math.sin(this.camOrbitPitch + terrainPitch) * 15.0,
        this.camera.position.z + cockpitLookZ * 30.0
      );
    }

    this.camera.fov = lerp(this.camera.fov, 64 + clamp(this.speedMs / 60.0, 0, 1) * 13.0, dt * 6);
    this.camera.updateProjectionMatrix();
  }

  // ==========================================================================
  // MODE 3: REALISTIC AERODYNAMIC TWIN-JET AIRCRAFT (LIFT, DRAG, BANKING, TAKEOFF)
  // ==========================================================================
  _updateRealisticAircraft(dt) {
    const pitchInput = (this.keys['KeyS'] || this.keys['ArrowDown'] ? 1 : 0) - (this.keys['KeyW'] || this.keys['ArrowUp'] ? 1 : 0);
    const rollInput = (this.keys['KeyD'] || this.keys['ArrowRight'] ? 1 : 0) - (this.keys['KeyA'] || this.keys['ArrowLeft'] ? 1 : 0);
    const yawInput = (this.keys['KeyQ'] ? 1 : 0) - (this.keys['KeyE'] ? 1 : 0);
    const throttleUp = Boolean(this.keys['ShiftLeft'] || this.keys['ShiftRight']);
    const throttleDown = Boolean(this.keys['ControlLeft'] || this.keys['ControlRight']);
    const climbAssist = Boolean(this.keys['Space']);

    if (throttleUp) this.airThrottle = clamp(this.airThrottle + dt * 0.45, 0.0, 1.0);
    if (throttleDown) this.airThrottle = clamp(this.airThrottle - dt * 0.55, 0.0, 1.0);

    const groundY = Math.max(WATER_LEVEL + 0.5, this.worldGen.getCollisionHeight(this.position.x, this.position.z));
    const altitudeAGL = this.position.y - (groundY + 1.05);
    const onGround = altitudeAGL <= 0.15;

    // Retract landing gear automatically above 22m AGL
    this.gearDeployed = altitudeAGL < 22.0;
    if (this.landingGearGroup) {
      this.landingGearGroup.visible = this.gearDeployed;
    }

    // Jet Thrust vs Parasitic & Induced Aerodynamic Drag
    const maxThrustAccel = throttleUp && this.airThrottle > 0.95 ? 85.0 : 45.0; // Afterburner boost!
    const thrustAccel = this.airThrottle * maxThrustAccel;
    const dragDecel = 0.0055 * this.airSpeed * this.airSpeed + (onGround ? 1.8 : 0.35);
    const gravityPitchAccel = -9.81 * Math.sin(this.airPitch);

    this.airSpeed += (thrustAccel - dragDecel + gravityPitchAccel) * dt;
    const maxAirSpeed = throttleUp ? 380.0 : 195.0;
    this.airSpeed = clamp(this.airSpeed, onGround ? 0.0 : 26.0, maxAirSpeed);

    // Pitch & Bank Control Surfaces
    if (pitchInput !== 0) {
      this.airPitch = clamp(this.airPitch + pitchInput * 1.35 * dt, -0.92, 0.92);
    } else {
      // Auto-trim gently holds cruise elevation angle (never fights mouse look!)
      this.airPitch = lerp(this.airPitch, 0.02, dt * 1.6);
    }

    if (climbAssist) {
      this.airPitch = lerp(this.airPitch, 0.35, dt * 5.0);
      if (this.airSpeed < 45.0) this.airSpeed = lerp(this.airSpeed, 60.0, dt * 3.5);
    }

    if (onGround && this.airSpeed < 32.0) {
      // On runway/ground below takeoff speed: steer with nosewheel
      this.airRoll = lerp(this.airRoll, 0, dt * 8.0);
      this.airPitch = Math.max(0.0, this.airPitch);
      this.yaw -= rollInput * 1.05 * clamp(this.airSpeed / 16.0, 0.1, 1.0) * dt;
    } else {
      // Airborne Coordinated Banked Turn: Roll banks the wing lift vector -> turns heading!
      const targetRoll = rollInput !== 0 ? rollInput * 1.05 : 0.0;
      const rollSpeed = rollInput !== 0 ? 4.2 : 3.4;
      this.airRoll = lerp(this.airRoll, targetRoll, dt * rollSpeed);

      const coordinatedYawRate = (9.81 * Math.tan(this.airRoll)) / Math.max(this.airSpeed, 28.0);
      this.yaw -= coordinatedYawRate * 1.85 * dt;
      this.yaw += yawInput * 0.75 * dt; // Rudder yaw trim Q/E
    }

    // Wing Lift calculation: Lift overcomes gravity above takeoff speed (~30 m/s)
    const liftFactor = clamp((this.airSpeed - 22.0) / 16.0, 0.0, 1.25) * Math.cos(this.airRoll * 0.55);
    const verticalClimb = this.airSpeed * Math.sin(this.airPitch) * liftFactor - 9.81 * (1.0 - Math.min(1.0, liftFactor));

    const forwardX = -Math.sin(this.yaw) * Math.cos(this.airPitch);
    const forwardZ = -Math.cos(this.yaw) * Math.cos(this.airPitch);

    this.velocity.set(forwardX * this.airSpeed, verticalClimb, forwardZ * this.airSpeed);
    this.position.addScaledVector(this.velocity, dt);

    // Runway / Ground Contact (soft suspension damping rather than hard snapping)
    const newMinY = Math.max(WATER_LEVEL + 1.05, this.worldGen.getCollisionHeight(this.position.x, this.position.z) + 1.05);
    if (this.position.y <= newMinY) {
      this.position.y = lerp(this.position.y, newMinY, 1.0 - Math.exp(-24.0 * dt));
      if (this.velocity.y < 0) this.velocity.y = 0;
      if (this.airPitch < 0) this.airPitch = lerp(this.airPitch, 0, 1.0 - Math.exp(-8.0 * dt));
    }

    this.speedMs = this.airSpeed;
    this.gForce = clamp(1.0 + Math.abs(Math.tan(this.airRoll)) * 0.65 + pitchInput * 0.8, 0.4, 6.5);

    // Orient 3D Aircraft Mesh with Pitch, Yaw & Banking Roll
    this.droneGroup.position.copy(this.position);
    this.droneGroup.rotation.order = 'YXZ';
    this.droneGroup.rotation.y = this.yaw;
    this.droneBody.rotation.x = this.airPitch;
    this.droneBody.rotation.z = -this.airRoll;

    // Scale jet afterburner plumes with throttle
    const plumeScale = 0.5 + this.airThrottle * 1.8;
    for (const p of this.thrusterGlows) {
      p.scale.set(1, plumeScale, 1);
    }

    // Auto-centering Chase Orbit Camera (mouse orbits view smoothly without pulling elevator)
    if (this.orbitResetTimer > 0) {
      this.orbitResetTimer -= dt;
    } else {
      this.camOrbitYaw = lerp(this.camOrbitYaw, 0, dt * 2.5);
      this.camOrbitPitch = lerp(this.camOrbitPitch, 0, dt * 2.5);
    }

    const flightDir = new THREE.Vector3(
      -Math.sin(this.yaw) * Math.cos(this.airPitch),
      Math.sin(this.airPitch),
      -Math.cos(this.yaw) * Math.cos(this.airPitch)
    ).normalize();

    if (this.thirdPerson) {
      const dist = 14.5;
      const camHeading = this.yaw + this.camOrbitYaw;
      const camPitch = this.airPitch + this.camOrbitPitch;
      const camDir = new THREE.Vector3(
        -Math.sin(camHeading) * Math.cos(camPitch),
        Math.sin(camPitch),
        -Math.cos(camHeading) * Math.cos(camPitch)
      ).normalize();

      const desiredCamPos = this.position.clone().addScaledVector(camDir, -dist).add(new THREE.Vector3(0, 3.2, 0));
      const rawCamFloor = Math.max(WATER_LEVEL + 1.0, this.worldGen.getCollisionHeight(desiredCamPos.x, desiredCamPos.z) + 1.4);

      // Low-pass filter camera clearance so mountain ridges don't pop the camera
      this.smoothCamFloorY = lerp(this.smoothCamFloorY || rawCamFloor, rawCamFloor, 1.0 - Math.exp(-8.0 * dt));
      desiredCamPos.y = Math.max(desiredCamPos.y, this.smoothCamFloorY);

      const camAlpha = 1.0 - Math.exp(-14.0 * dt);
      this.camera.position.lerp(desiredCamPos, camAlpha);

      // Smooth look target ahead of aircraft to eliminate viewing angle jitter
      const desiredTarget = this.position.clone().addScaledVector(flightDir, 32.0);
      if (this.smoothLookTarget.lengthSq() < 0.001) {
        this.smoothLookTarget.copy(desiredTarget);
      } else {
        this.smoothLookTarget.lerp(desiredTarget, 1.0 - Math.exp(-18.0 * dt));
      }

      // Smooth banking horizon with camera.up (avoids YXZ gimbal coupling)
      const bankAngle = -this.airRoll * 0.28;
      this.camera.up.set(-Math.sin(bankAngle), Math.cos(bankAngle), 0);
      this.camera.lookAt(this.smoothLookTarget);
    } else {
      this.camera.position.copy(this.position).add(new THREE.Vector3(0, 0.55, 0));
      const bankAngle = -this.airRoll * 0.65;
      this.camera.up.set(-Math.sin(bankAngle), Math.cos(bankAngle), 0);
      this.camera.lookAt(this.position.clone().addScaledVector(flightDir, 60.0));
    }

    this.camera.fov = lerp(this.camera.fov, 65 + clamp(this.airSpeed / 260.0, 0, 1) * 18.0, dt * 5);
    this.camera.updateProjectionMatrix();
  }

  // ==========================================================================
  // MODE 4: REALISTIC SPACEX STARSHIP ORBITAL LAUNCH, SPACE & INTERPLANETARY FLIGHT
  // ==========================================================================
  _updateRealisticRocket(dt) {
    const throttleUp = Boolean(this.keys['ShiftLeft'] || this.keys['ShiftRight'] || this.keys['Space']);
    const throttleDown = Boolean(this.keys['ControlLeft'] || this.keys['ControlRight']);
    const pitchDown = (this.keys['KeyW'] || this.keys['ArrowUp'] ? 1 : 0);
    const pitchUp = (this.keys['KeyS'] || this.keys['ArrowDown'] ? 1 : 0);
    const rollLeft = (this.keys['KeyA'] || this.keys['ArrowLeft'] ? 1 : 0);
    const rollRight = (this.keys['KeyD'] || this.keys['ArrowRight'] ? 1 : 0);
    const yawLeft = (this.keys['KeyQ'] ? 1 : 0);
    const yawRight = (this.keys['KeyE'] ? 1 : 0);

    // Toggle Interplanetary Warp / Boost with 'KeyR' in deep space
    if (this.keys['KeyR'] && this.position.y > 6000.0) {
      this.warpBoost = true;
    } else {
      this.warpBoost = false;
    }

    const groundY = Math.max(WATER_LEVEL + 1.0, this.worldGen.getCollisionHeight(this.position.x, this.position.z));
    const altitudeAGL = this.position.y - (groundY + 1.0);
    const onPad = altitudeAGL < 3.0;

    if (onPad && throttleUp) {
      this.launchInitiated = true;
    }

    // Throttle Dynamics
    if (throttleUp) {
      this.rocketThrottle = clamp(this.rocketThrottle + dt * 0.85, 0.0, 1.0);
    } else if (throttleDown) {
      this.rocketThrottle = clamp(this.rocketThrottle - dt * 0.95, 0.0, 1.0);
    } else if (!this.launchInitiated && onPad) {
      this.rocketThrottle = 0.0;
    }

    const altitude = this.position.y;
    const airDensity = Math.exp(-Math.max(0, altitude) / 5200.0);
    const inSpace = altitude > 7500.0;

    // Staging at altitude > 4500m
    if (altitude > 4500.0 && this.rocketStage === 1) {
      this.rocketStage = 2; // Starship separates from Super Heavy!
      if (this.boosterStageMesh) {
        this.boosterStageMesh.visible = false;
      }
    }

    // Raptor Engine Thrust (Booster vs Starship vacuum)
    const maxThrust = this.warpBoost ? 2400.0 : (this.rocketStage === 1 ? 135.0 : 85.0);
    const currentThrust = this.rocketThrottle * maxThrust;
    const dragDecel = 0.0032 * airDensity * this.rocketSpeed * this.rocketSpeed;
    const earthGravity = inSpace ? 0.0 : 9.81 * (1.0 - smoothstep(1200.0, 14000.0, altitude));

    // Attitude Dynamics (Pitch, Yaw, Roll)
    const pitchInput = pitchDown - pitchUp;
    const rollInput = rollRight - rollLeft;
    const yawInput = yawLeft - yawRight;

    const rotSpeed = inSpace ? 1.8 : 0.92;
    this.rocketPitch += pitchInput * rotSpeed * dt;
    this.rocketRoll += rollInput * rotSpeed * 1.5 * dt;
    this.rocketYaw += yawInput * rotSpeed * dt;

    // Automatic gravity turn during atmospheric launch ascent:
    if (this.launchInitiated && altitude > 220.0 && altitude < 6200.0) {
      const orbitTilt = smoothstep(220.0, 6200.0, altitude) * 0.68;
      this.rocketPitch = lerp(this.rocketPitch, -Math.PI * 0.5 + orbitTilt, dt * 0.55);
    }

    // Compute Forward Heading Vector from Pitch and Yaw
    const forward = new THREE.Vector3(
      -Math.sin(this.rocketYaw) * Math.cos(this.rocketPitch),
      -Math.sin(this.rocketPitch),
      -Math.cos(this.rocketYaw) * Math.cos(this.rocketPitch)
    ).normalize();

    // Accelerate along forward axis
    const maxSpeed = this.warpBoost ? 25000.0 : (inSpace ? 5200.0 : 1400.0);
    this.rocketSpeed += (currentThrust - dragDecel) * dt;
    if (throttleDown && this.rocketSpeed > 10.0) {
      this.rocketSpeed -= 55.0 * dt; // Retro braking burn
    }
    this.rocketSpeed = clamp(this.rocketSpeed, onPad && !this.launchInitiated ? 0.0 : 5.0, maxSpeed);

    // Apply Velocity to Position
    this.velocity.copy(forward).multiplyScalar(this.rocketSpeed);
    this.velocity.y -= earthGravity * dt;

    // Gravitational pull of celestial bodies in deep space (Moon & Mars)
    const moonDist = this.position.distanceTo(new THREE.Vector3(14000, 16200, -12000));
    if (moonDist < 3200.0 && moonDist > 1820.0) {
      const moonDir = new THREE.Vector3(14000, 16200, -12000).sub(this.position).normalize();
      this.velocity.addScaledVector(moonDir, 12.0 * dt); // Lunar gravity pull
    }

    const marsDist = this.position.distanceTo(new THREE.Vector3(-22000, 22400, 24000));
    if (marsDist < 4200.0 && marsDist > 2220.0) {
      const marsDir = new THREE.Vector3(-22000, 22400, 24000).sub(this.position).normalize();
      this.velocity.addScaledVector(marsDir, 18.0 * dt); // Martian gravity pull
    }

    this.position.addScaledVector(this.velocity, dt);

    // Prevent crashing through terrain floor on Earth
    if (altitude < 5000.0) {
      const minGroundY = this.worldGen.getCollisionHeight(this.position.x, this.position.z) + 1.2;
      if (this.position.y <= minGroundY) {
        this.position.y = minGroundY;
        if (this.velocity.y < -15.0) {
          this.velocity.y = 0;
        }
        this.rocketSpeed = lerp(this.rocketSpeed, 0, dt * 5.0);
        this.launchInitiated = false;
      }
    }

    // Orient 3D Rocket Mesh
    this.rocketGroup.position.copy(this.position);
    this.rocketGroup.rotation.order = 'YXZ';
    this.rocketGroup.rotation.y = this.rocketYaw;
    this.rocketGroup.rotation.x = this.rocketPitch;
    this.rocketGroup.rotation.z = this.rocketRoll;

    // Articulate Aerodynamic Flaps
    if (this.rocketForwardFlaps) {
      for (let i = 0; i < this.rocketForwardFlaps.length; i++) {
        this.rocketForwardFlaps[i].rotation.z = (i === 0 ? 1 : -1) * (0.2 + pitchInput * 0.45);
      }
    }
    if (this.rocketAftFlaps) {
      for (let i = 0; i < this.rocketAftFlaps.length; i++) {
        this.rocketAftFlaps[i].rotation.z = (i === 0 ? 1 : -1) * (0.2 + rollInput * 0.55);
      }
    }

    // Animate Raptor Exhaust Flame Plume
    const plumeScale = this.rocketThrottle * (this.warpBoost ? 3.0 : (inSpace ? 1.8 : 1.1));
    if (this.rocketPlumeGroup) {
      this.rocketPlumeGroup.visible = this.rocketThrottle > 0.05;
      if (this.rocketPlumeGroup.visible) {
        const flicker = 1.0 + (Math.random() - 0.5) * 0.18;
        this.plumeCore.scale.set(plumeScale * flicker, plumeScale * flicker, plumeScale * flicker);
        this.plumeOuter.scale.set(plumeScale * flicker, plumeScale * flicker, plumeScale * flicker);
        this.rocketEngineLight.intensity = this.rocketThrottle * (inSpace ? 24.0 : 55.0);
      }
    }

    // Animate Re-entry Plasma Sheath
    if (this.reentryPlasma) {
      const isReentry = altitude < 8000.0 && altitude > 1200.0 && this.rocketSpeed > 140.0;
      this.reentryPlasma.material.opacity = isReentry ? clamp((this.rocketSpeed - 140.0) / 250.0, 0.0, 0.85) : 0.0;
    }

    // Rocket Searchlights
    if (this.rocketHeadlights) {
      const lightsOn = this.flashlightOn || altitude < 800.0;
      for (const spot of this.rocketHeadlights) {
        spot.intensity = lightsOn ? 42.0 : 0.0;
      }
    }

    // Camera Chase Behavior in 3rd vs 1st person
    if (this.thirdPerson) {
      const camDist = this.warpBoost ? 55.0 : 38.0;
      const camUp = new THREE.Vector3(0, 1, 0);
      const camPos = this.position.clone().sub(forward.clone().multiplyScalar(camDist)).addScaledVector(camUp, 12.0);

      this.camera.position.lerp(camPos, 1.0 - Math.exp(-12.0 * dt));
      this.camera.lookAt(this.position.clone().addScaledVector(forward, 16.0));

      // Warp speed FOV stretch
      const targetFov = this.warpBoost ? 88 : (this.rocketSpeed > 600 ? 76 : 64);
      this.camera.fov = lerp(this.camera.fov, targetFov, dt * 4.0);
      this.camera.updateProjectionMatrix();
    } else {
      // 1st Person Bridge View from Nosecone Windows
      const noseBridge = this.position.clone().addScaledVector(forward, 24.0);
      this.camera.position.copy(noseBridge);
      this.camera.lookAt(noseBridge.clone().addScaledVector(forward, 60.0));
    }
  }
}
