// ============================================================================
// AETHERIA OPEN WORLD ENGINE - SpaceX Starbase Orbital Launch Complex
// Orbital Launch Mount (OLM), 145m Mechazilla Chopstick Tower, Starship Full
// Stack (B9 + S25), Suborbital Pad, Cryogenic Tank Farm, Mega Bay & Control
// ============================================================================

import * as THREE from 'three';

export class SpaceXStarbase {
  constructor(scene, worldGen) {
    this.scene = scene;
    this.worldGen = worldGen;

    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Starbase Coastal Coordinates (x: 1050, z: 880) overlooking Sapphire Ocean
    this.baseX = 1050;
    this.baseZ = 880;
    this.baseY = 13.5;

    this.group.position.set(this.baseX, this.baseY, this.baseZ);

    this.flareLight = null;
    this.flareMesh = null;
    this.flareTimer = 0;
    this.aviationBeacons = [];

    this._createMaterials();
    this._buildConcreteApronAndRoads();
    this._buildOrbitalLaunchMountAndTrench();
    this._buildMechazillaTowerAndChopsticks();
    this._buildFullStackStarship();
    this._buildSuborbitalTestPad();
    this._buildCryogenicTankFarm();
    this._buildVerticalAssemblyMegaBay();
    this._buildLaunchControlCenter();
    this._buildFlareStack();
    this._buildPerimeterAndGate();
    this._registerColliders();
  }

  _createMaterials() {
    // 1. Cold-Rolled 304L Stainless Steel (Starship & Booster Mirror Shell)
    this.matStainless = new THREE.MeshStandardMaterial({
      color: 0xecf0f5,
      metalness: 0.96,
      roughness: 0.12
    });

    // 2. Black Hexagonal Ceramic Thermal Protection System (TPS) Heat Shield Tiles
    this.matHeatShield = new THREE.MeshStandardMaterial({
      color: 0x111317,
      metalness: 0.2,
      roughness: 0.88
    });

    // 3. Dark Structural Steel (Mechazilla Tower, OLM Mount, Truss Framework)
    this.matTowerSteel = new THREE.MeshStandardMaterial({
      color: 0x22262e,
      metalness: 0.75,
      roughness: 0.45
    });

    // 4. Industrial Heavy Reinforced Concrete
    this.matConcrete = new THREE.MeshStandardMaterial({
      color: 0x787d85,
      metalness: 0.1,
      roughness: 0.85
    });

    // 5. Cryogenic Tank Insulation (White Clean Coating)
    this.matCryoTank = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.35,
      roughness: 0.3
    });

    // 6. Raptor Engine Superalloy Inconel Bells
    this.matRaptorBell = new THREE.MeshStandardMaterial({
      color: 0x3a3f47,
      metalness: 0.85,
      roughness: 0.35
    });

    // 7. Safety Warning Yellow & Red Accents
    this.matWarningYellow = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.4 });
    this.matSpaceXRed = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.4 });
    this.matGlass = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.75
    });
  }

  // 1. Concrete Launch Complex Ground Foundation & Access Roads
  _buildConcreteApronAndRoads() {
    // Main heavy reinforced concrete pad
    const padGeo = new THREE.BoxGeometry(260, 2.2, 220);
    const pad = new THREE.Mesh(padGeo, this.matConcrete);
    pad.position.set(0, 1.1, 0);
    pad.receiveShadow = true;
    this.group.add(pad);

    // Blast deflection apron leading towards ocean (east)
    const blastApronGeo = new THREE.BoxGeometry(85, 1.6, 60);
    const blastApron = new THREE.Mesh(blastApronGeo, this.matConcrete);
    blastApron.position.set(85, 0.8, 0);
    blastApron.receiveShadow = true;
    this.group.add(blastApron);

    // Yellow safety perimeter markings around launch danger zone
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
    for (let side of [-1, 1]) {
      const lineX = new THREE.Mesh(new THREE.BoxGeometry(240, 0.05, 0.8), lineMat);
      lineX.position.set(0, 2.23, side * 95);
      const lineZ = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.05, 190), lineMat);
      lineZ.position.set(side * 120, 2.23, 0);
      this.group.add(lineX, lineZ);
    }
  }

  // 2. Orbital Launch Mount (OLM) & Water Deluge Flame Trench
  _buildOrbitalLaunchMountAndTrench() {
    this.olmGroup = new THREE.Group();
    this.olmGroup.position.set(0, 2.2, 0);

    // Six colossal launch table support pillars (hexagonal array)
    const pillarRadius = 14.5;
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const px = Math.cos(angle) * pillarRadius;
      const pz = Math.sin(angle) * pillarRadius;

      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 2.2, 22.0, 12), this.matTowerSteel);
      pillar.position.set(px, 11.0, pz);
      pillar.castShadow = true;
      pillar.receiveShadow = true;
      this.olmGroup.add(pillar);

      // Diagonal structural brace
      const nextAngle = ((i + 1) / 6) * Math.PI * 2;
      const npx = Math.cos(nextAngle) * pillarRadius;
      const npz = Math.sin(nextAngle) * pillarRadius;
      const midX = (px + npx) * 0.5;
      const midZ = (pz + npz) * 0.5;

      const brace = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, pillarRadius * 1.05), this.matTowerSteel);
      brace.position.set(midX, 15.0, midZ);
      brace.rotation.y = angle + Math.PI / 6;
      this.olmGroup.add(brace);
    }

    // Heavy Circular Launch Ring Mount (where the 33 Raptor engines fire through)
    const ringGeo = new THREE.CylinderGeometry(17.5, 17.5, 3.8, 24, 1, true);
    const ring = new THREE.Mesh(ringGeo, this.matTowerSteel);
    ring.position.y = 22.0;
    ring.castShadow = true;
    this.olmGroup.add(ring);

    // 20 Hold-down clamp release boxes along the ring perimeter
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const clampBox = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.5, 1.4), this.matWarningYellow);
      clampBox.position.set(Math.cos(angle) * 10.5, 24.2, Math.sin(angle) * 10.5);
      clampBox.rotation.y = angle;
      this.olmGroup.add(clampBox);
    }

    // High-pressure water deluge sound suppression manifold ring (sprays 100,000 gal/min)
    const delugePipe = new THREE.Mesh(new THREE.TorusGeometry(12.2, 0.75, 8, 24), this.matStainless);
    delugePipe.position.y = 19.5;
    delugePipe.rotation.x = Math.PI * 0.5;
    this.olmGroup.add(delugePipe);

    // Flame Trench under OLM directing exhaust out to ocean (east)
    const trenchWallMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 });
    const trenchFloor = new THREE.Mesh(new THREE.BoxGeometry(65, 1.2, 22), trenchWallMat);
    trenchFloor.position.set(32, -4.5, 0);
    this.olmGroup.add(trenchFloor);

    // Angled flame deflector plate under OLM center
    const deflector = new THREE.Mesh(new THREE.BoxGeometry(18, 2.5, 18), this.matStainless);
    deflector.position.set(4, 2.0, 0);
    deflector.rotation.z = 0.55;
    this.olmGroup.add(deflector);

    // Cryogenic Propellant Quick-Disconnect (QD) Umbilical Arm
    const qdArm = new THREE.Mesh(new THREE.BoxGeometry(18, 3.2, 4.0), this.matTowerSteel);
    qdArm.position.set(-14.0, 24.0, 0);
    this.olmGroup.add(qdArm);

    this.group.add(this.olmGroup);
  }

  // 3. Mechazilla 145-Meter Launch & Catch Tower with Articulated "Chopsticks"
  _buildMechazillaTowerAndChopsticks() {
    this.towerGroup = new THREE.Group();
    // Positioned north-west of the OLM (x: -18, z: -18)
    this.towerGroup.position.set(-18.0, 2.2, -18.0);

    const towerH = 145.0;
    const colSize = 1.4;
    const halfW = 6.0;

    // 4 vertical structural corner steel columns
    const colGeo = new THREE.BoxGeometry(colSize, towerH, colSize);
    for (const cx of [-halfW, halfW]) {
      for (const cz of [-halfW, halfW]) {
        const col = new THREE.Mesh(colGeo, this.matTowerSteel);
        col.position.set(cx, towerH * 0.5, cz);
        col.castShadow = true;
        this.towerGroup.add(col);
      }
    }

    // Horizontal & Diagonal lattice truss tiers every 10 meters up to 145m
    for (let y = 10; y <= towerH; y += 10) {
      // Horizontal frame perimeter
      const hX1 = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2, 0.9, 0.9), this.matTowerSteel);
      hX1.position.set(0, y, -halfW);
      const hX2 = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2, 0.9, 0.9), this.matTowerSteel);
      hX2.position.set(0, y, halfW);
      const hZ1 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, halfW * 2), this.matTowerSteel);
      hZ1.position.set(-halfW, y, 0);
      const hZ2 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, halfW * 2), this.matTowerSteel);
      hZ2.position.set(halfW, y, 0);
      this.towerGroup.add(hX1, hX2, hZ1, hZ2);

      // Diagonal cross-brace on outer sides
      const diagLen = Math.hypot(halfW * 2, 10);
      const diag = new THREE.Mesh(new THREE.BoxGeometry(0.65, diagLen, 0.65), this.matTowerSteel);
      diag.position.set(-halfW, y - 5, 0);
      diag.rotation.x = Math.atan2(10, halfW * 2);
      this.towerGroup.add(diag);
    }

    // Mechazilla Catching Carriage & Dual "Chopsticks" (Catch Arms at height 88m)
    const carriageH = 88.0;
    const carriage = new THREE.Mesh(new THREE.BoxGeometry(14, 12, 6.5), this.matTowerSteel);
    carriage.position.set(0, carriageH, halfW + 3.2);
    this.towerGroup.add(carriage);

    // Left Chopstick Arm (extended towards OLM at x: 18, z: 18)
    const armGeo = new THREE.BoxGeometry(36, 2.6, 2.4);
    const armLeft = new THREE.Mesh(armGeo, this.matWarningYellow);
    armLeft.position.set(16, carriageH + 1.2, halfW + 7.5);
    armLeft.rotation.y = 0.22;
    armLeft.castShadow = true;

    // Right Chopstick Arm
    const armRight = new THREE.Mesh(armGeo, this.matWarningYellow);
    armRight.position.set(16, carriageH + 1.2, halfW + 13.5);
    armRight.rotation.y = -0.22;
    armRight.castShadow = true;

    this.towerGroup.add(armLeft, armRight);

    // Tower Crane / Derrick on top (y = 145m to 165m)
    const derrickBoom = new THREE.Mesh(new THREE.BoxGeometry(28, 1.8, 1.8), this.matWarningYellow);
    derrickBoom.position.set(6, towerH + 4.5, 0);
    const counterWeight = new THREE.Mesh(new THREE.BoxGeometry(6, 4.5, 4.5), this.matConcrete);
    counterWeight.position.set(-8, towerH + 4.5, 0);
    this.towerGroup.add(derrickBoom, counterWeight);

    // Lightning rod spire & aviation warning beacon on top
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.45, 18.0, 6), this.matStainless);
    spire.position.set(0, towerH + 9.0, 0);
    this.towerGroup.add(spire);

    const beaconGeo = new THREE.SphereGeometry(0.65, 8, 8);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 1.0 });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.set(0, towerH + 18.0, 0);
    this.towerGroup.add(beacon);
    this.aviationBeacons.push(beacon);

    this.group.add(this.towerGroup);
  }

  // 4. Full-Stack Starship (Super Heavy Booster 9 + Starship 25 on OLM) - Total Height 121m!
  _buildFullStackStarship() {
    this.starshipStackGroup = new THREE.Group();
    // Sitting on OLM ring at y = 24.2m
    this.starshipStackGroup.position.set(0, 26.4, 0);

    const radius = 4.5; // 9-meter diameter rocket

    // =========================================================================
    // STAGE 1: SUPER HEAVY BOOSTER (Height 71m)
    // =========================================================================
    const boosterH = 71.0;
    const boosterGeo = new THREE.CylinderGeometry(radius, radius, boosterH, 32);
    this.superHeavyMesh = new THREE.Mesh(boosterGeo, this.matStainless);
    this.superHeavyMesh.position.y = boosterH * 0.5;
    this.superHeavyMesh.castShadow = true;
    this.superHeavyMesh.receiveShadow = true;
    this.starshipStackGroup.add(this.superHeavyMesh);

    // 4 Titanium Planar Lattice Grid Fins at top of Super Heavy (y = 67m)
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const finGroup = new THREE.Group();
      finGroup.position.set(Math.cos(angle) * (radius + 0.5), boosterH - 4.5, Math.sin(angle) * (radius + 0.5));
      finGroup.rotation.y = angle;

      const finMesh = new THREE.Mesh(new THREE.BoxGeometry(0.35, 3.8, 6.2), this.matTowerSteel);
      finMesh.castShadow = true;
      finGroup.add(finMesh);
      this.starshipStackGroup.add(finGroup);
    }

    // 33 Raptor Engine Bells at the base of Super Heavy
    // Center cluster of 13 engines (gimbaling)
    for (let c = 0; c < 13; c++) {
      const angle = (c / 12) * Math.PI * 2;
      const r = c === 0 ? 0 : 1.8;
      const bell = new THREE.Mesh(new THREE.ConeGeometry(0.75, 2.2, 10, 1, true), this.matRaptorBell);
      bell.position.set(Math.cos(angle) * r, -1.0, Math.sin(angle) * r);
      this.starshipStackGroup.add(bell);
    }
    // Outer fixed ring of 20 Raptor engines
    for (let o = 0; o < 20; o++) {
      const angle = (o / 20) * Math.PI * 2;
      const bell = new THREE.Mesh(new THREE.ConeGeometry(0.72, 2.2, 10, 1, true), this.matRaptorBell);
      bell.position.set(Math.cos(angle) * 3.6, -1.0, Math.sin(angle) * 3.6);
      this.starshipStackGroup.add(bell);
    }

    // Hot-Staging Ring (laser-cut vented interstage cylinder)
    const hotStageRing = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, 2.4, 24, 1, true), this.matTowerSteel);
    hotStageRing.position.y = boosterH + 1.2;
    this.starshipStackGroup.add(hotStageRing);

    // =========================================================================
    // STAGE 2: STARSHIP UPPER STAGE (Height 50m) - Total stack = 121m!
    // =========================================================================
    const shipBaseY = boosterH + 2.4;
    this.starshipUpperGroup = new THREE.Group();
    this.starshipUpperGroup.position.y = shipBaseY;

    // Starship Main Cylindrical Tanker Body (32m cylinder)
    const shipCylinderH = 32.0;
    const shipCyl = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, shipCylinderH, 32), this.matStainless);
    shipCyl.position.y = shipCylinderH * 0.5;
    shipCyl.castShadow = true;
    this.starshipUpperGroup.add(shipCyl);

    // Black Ceramic Tile Heat Shield on leeward half-cylinder (+Z side)
    const shieldGeo = new THREE.CylinderGeometry(radius + 0.05, radius + 0.05, shipCylinderH, 20, 1, false, 0, Math.PI);
    shieldGeo.rotateY(-Math.PI * 0.5);
    const shieldMesh = new THREE.Mesh(shieldGeo, this.matHeatShield);
    shieldMesh.position.y = shipCylinderH * 0.5;
    this.starshipUpperGroup.add(shieldMesh);

    // Aerodynamic Gothic Arch Nosecone (18m tall)
    const noseH = 18.0;
    const noseGeo = new THREE.ConeGeometry(radius, noseH, 32);
    const noseMesh = new THREE.Mesh(noseGeo, this.matStainless);
    noseMesh.position.y = shipCylinderH + noseH * 0.5;
    noseMesh.castShadow = true;
    this.starshipUpperGroup.add(noseMesh);

    // Heat shield on nosecone (+Z side)
    const noseShieldGeo = new THREE.ConeGeometry(radius + 0.04, noseH, 20, 1, false, 0, Math.PI);
    noseShieldGeo.rotateY(-Math.PI * 0.5);
    const noseShield = new THREE.Mesh(noseShieldGeo, this.matHeatShield);
    noseShield.position.y = shipCylinderH + noseH * 0.5;
    this.starshipUpperGroup.add(noseShield);

    // 2 Forward Actuating Flaps (Canards at nosecone base)
    for (const side of [-1, 1]) {
      const flap = new THREE.Mesh(new THREE.BoxGeometry(0.3, 4.8, 3.2), this.matStainless);
      flap.position.set(side * (radius + 1.2), shipCylinderH + 1.5, 0.2);
      flap.rotation.z = side * 0.15;
      flap.castShadow = true;
      this.starshipUpperGroup.add(flap);
    }

    // 2 Aft Delta Body Flaps (at Starship base)
    for (const side of [-1, 1]) {
      const aftFlap = new THREE.Mesh(new THREE.BoxGeometry(0.35, 12.0, 4.8), this.matStainless);
      aftFlap.position.set(side * (radius + 1.8), 6.5, -0.4);
      aftFlap.rotation.z = side * 0.12;
      aftFlap.castShadow = true;
      this.starshipUpperGroup.add(aftFlap);
    }

    // 6 Starship Raptor Engines (3 Center Sea-Level, 3 Outer Giant Vacuum Bells)
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const bell = new THREE.Mesh(new THREE.ConeGeometry(0.72, 2.2, 12, 1, true), this.matRaptorBell);
      bell.position.set(Math.cos(angle) * 1.2, -1.0, Math.sin(angle) * 1.2);
      this.starshipUpperGroup.add(bell);
    }
    // 3 Giant Raptor Vacuum (RVac) engines with 2.4m expanded bells
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2 + Math.PI / 3;
      const rvacBell = new THREE.Mesh(new THREE.ConeGeometry(1.4, 2.8, 14, 1, true), this.matStainless);
      rvacBell.position.set(Math.cos(angle) * 2.8, -1.2, Math.sin(angle) * 2.8);
      this.starshipUpperGroup.add(rvacBell);
    }

    this.starshipStackGroup.add(this.starshipUpperGroup);
    this.group.add(this.starshipStackGroup);
  }

  // 5. Suborbital Launch Pad B & Test Vehicle Stand
  _buildSuborbitalTestPad() {
    const subPadGroup = new THREE.Group();
    subPadGroup.position.set(-65, 1.1, 45);

    const subPad = new THREE.Mesh(new THREE.CylinderGeometry(18, 20, 2.5, 16), this.matConcrete);
    subPad.position.y = 1.25;
    subPadGroup.add(subPad);

    // Test Starship Prototype on test stand (Ship 24 style)
    const testShip = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 38.0, 24), this.matStainless);
    testShip.position.y = 21.5;
    testShip.castShadow = true;
    subPadGroup.add(testShip);

    const testNose = new THREE.Mesh(new THREE.ConeGeometry(4.5, 14.0, 24), this.matStainless);
    testNose.position.y = 47.5;
    testNose.castShadow = true;
    subPadGroup.add(testNose);

    this.group.add(subPadGroup);
  }

  // 6. Cryogenic Propellant Tank Farm (CH4, LOX, LN2 Vertical Insulated Tanks)
  _buildCryogenicTankFarm() {
    this.tankFarmGroup = new THREE.Group();
    this.tankFarmGroup.position.set(-75, 2.2, -65);

    // Concrete safety berm containment basin
    const berm = new THREE.Mesh(new THREE.BoxGeometry(75, 2.5, 55), this.matConcrete);
    berm.position.y = 1.25;
    this.tankFarmGroup.add(berm);

    // 8 Colossal Cryogenic Propellant Vertical Tanks (2x4 array, height 32m, diameter 9m)
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 4; c++) {
        const tx = (c - 1.5) * 16.5;
        const tz = (r - 0.5) * 22.0;

        const isMethane = (r === 0);
        const tank = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.2, 28.0, 20), this.matCryoTank);
        tank.position.set(tx, 16.5, tz);
        tank.castShadow = true;
        this.tankFarmGroup.add(tank);

        // Domed top cap
        const cap = new THREE.Mesh(new THREE.SphereGeometry(4.2, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), this.matCryoTank);
        cap.position.set(tx, 30.5, tz);
        this.tankFarmGroup.add(cap);

        // Cryo Placard Strip (Blue for CH4 Liquid Methane, Green for LOX Liquid Oxygen)
        const stripeMat = new THREE.MeshBasicMaterial({ color: isMethane ? 0x0284c7 : 0x16a34a });
        const stripe = new THREE.Mesh(new THREE.CylinderGeometry(4.25, 4.25, 1.8, 20), stripeMat);
        stripe.position.set(tx, 22.0, tz);
        this.tankFarmGroup.add(stripe);
      }
    }

    // High-Pressure Spherical Gas Accumulator Spheres (GN2 / Deluge Water)
    for (let s = -1; s <= 1; s += 2) {
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(6.2, 16, 16), this.matStainless);
      sphere.position.set(s * 28.0, 9.5, 34.0);
      sphere.castShadow = true;
      this.tankFarmGroup.add(sphere);

      // Support tripod legs
      const tripod = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.9, 7.5, 6), this.matTowerSteel);
      tripod.position.set(s * 28.0, 3.75, 34.0);
      this.tankFarmGroup.add(tripod);
    }

    // Overhead Stainless Steel Cryogenic Pipe Rack connecting Tank Farm to OLM
    const pipeRack = new THREE.Mesh(new THREE.BoxGeometry(65, 1.5, 2.5), this.matTowerSteel);
    pipeRack.position.set(38, 12.0, 28);
    this.tankFarmGroup.add(pipeRack);

    for (let p = -0.6; p <= 0.6; p += 0.4) {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 65, 8), this.matStainless);
      pipe.rotation.z = Math.PI * 0.5;
      pipe.position.set(38, 13.2, 28 + p);
      this.tankFarmGroup.add(pipe);
    }

    this.group.add(this.tankFarmGroup);
  }

  // 7. Vertical Assembly Mega Bay / High Bay Hangar Building (Height 85m)
  _buildVerticalAssemblyMegaBay() {
    this.megaBayGroup = new THREE.Group();
    this.megaBayGroup.position.set(85, 2.2, 95);

    const bayW = 54.0;
    const bayD = 65.0;
    const bayH = 85.0;

    // Mega Bay Main Structural Shell
    const hangarMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.55, metalness: 0.6 });
    const whiteRibbedMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });

    const hangar = new THREE.Mesh(new THREE.BoxGeometry(bayW, bayH, bayD), hangarMat);
    hangar.position.y = bayH * 0.5;
    hangar.castShadow = true;
    hangar.receiveShadow = true;
    this.megaBayGroup.add(hangar);

    // Architectural White Ribbed Center Section
    const rib = new THREE.Mesh(new THREE.BoxGeometry(bayW + 0.6, bayH * 0.75, bayD * 0.7), whiteRibbedMat);
    rib.position.y = bayH * 0.55;
    this.megaBayGroup.add(rib);

    // Colossal Vertical Roll-Up Rocket Rollout Door (Facing Launch Pad)
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7, metalness: 0.4 });
    const door = new THREE.Mesh(new THREE.BoxGeometry(22, 68, 1.2), doorMat);
    door.position.set(-bayW * 0.5 - 0.2, 34.0, 0);
    this.megaBayGroup.add(door);

    // Rooftop Communications & Crane Gantry
    const roofGantry = new THREE.Mesh(new THREE.BoxGeometry(32, 6.5, 42), this.matTowerSteel);
    roofGantry.position.y = bayH + 3.25;
    this.megaBayGroup.add(roofGantry);

    // Giant Illuminated "SPACEX" Stencil on Mega Bay Facade
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, 512, 128);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SPACEX', 256, 64);
    const signTex = new THREE.CanvasTexture(canvas);
    signTex.colorSpace = THREE.SRGBColorSpace;
    signTex.anisotropy = 8;

    const signMat = new THREE.MeshBasicMaterial({ map: signTex });
    const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(28, 7), signMat);
    signMesh.position.set(0, bayH - 8.0, bayD * 0.5 + 0.4);
    this.megaBayGroup.add(signMesh);

    this.group.add(this.megaBayGroup);
  }

  // 8. SpaceX Launch Control Center & Tracking Radome
  _buildLaunchControlCenter() {
    this.controlGroup = new THREE.Group();
    this.controlGroup.position.set(-85, 2.2, 45);

    // Blast-resistant control bunker
    const bunker = new THREE.Mesh(new THREE.BoxGeometry(36, 12, 28), this.matConcrete);
    bunker.position.y = 6.0;
    bunker.castShadow = true;
    this.controlGroup.add(bunker);

    // Angled observation glass window gallery facing the OLM
    const win = new THREE.Mesh(new THREE.BoxGeometry(1.2, 4.5, 22), this.matGlass);
    win.position.set(18.2, 8.5, 0);
    this.controlGroup.add(win);

    // Rooftop 8-Meter Parabolic Tracking Dish
    const dishPedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 4.5, 8), this.matTowerSteel);
    dishPedestal.position.set(-8, 14.25, 0);
    const dish = new THREE.Mesh(new THREE.SphereGeometry(4.2, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.4), this.matStainless);
    dish.position.set(-8, 18.0, 0);
    dish.rotation.x = 0.65;
    dish.rotation.z = -0.45;
    this.controlGroup.add(dishPedestal, dish);

    // Weather Radar Dome (Radome)
    const radome = new THREE.Mesh(new THREE.SphereGeometry(3.2, 16, 16), this.matCryoTank);
    radome.position.set(8, 15.2, 6);
    this.controlGroup.add(radome);

    this.group.add(this.controlGroup);
  }

  // 9. Active Methane Flare Stack with Animated Flame
  _buildFlareStack() {
    this.flareGroup = new THREE.Group();
    this.flareGroup.position.set(85, 2.2, -65);

    const stackH = 38.0;
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.95, stackH, 10), this.matTowerSteel);
    pipe.position.y = stackH * 0.5;
    pipe.castShadow = true;
    this.flareGroup.add(pipe);

    // Guy wire structural stabilizers
    const wireMat = new THREE.LineBasicMaterial({ color: 0x475569 });
    for (let a = 0; a < 3; a++) {
      const angle = (a / 3) * Math.PI * 2;
      const points = [
        new THREE.Vector3(0, stackH * 0.75, 0),
        new THREE.Vector3(Math.cos(angle) * 18, 0, Math.sin(angle) * 18)
      ];
      const wireGeo = new THREE.BufferGeometry().setFromPoints(points);
      const wire = new THREE.Line(wireGeo, wireMat);
      this.flareGroup.add(wire);
    }

    // Animated Methane Burnoff Flame at tip
    const flameGeo = new THREE.ConeGeometry(1.6, 6.2, 8);
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xff7700 });
    this.flareMesh = new THREE.Mesh(flameGeo, flameMat);
    this.flareMesh.position.y = stackH + 3.1;
    this.flareGroup.add(this.flareMesh);

    this.flareLight = new THREE.PointLight(0xff8800, 4.5, 45.0);
    this.flareLight.position.set(0, stackH + 3.5, 0);
    this.flareGroup.add(this.flareLight);

    this.group.add(this.flareGroup);
  }

  // 10. Starbase Main Entrance Gate & "GATEWAY TO MARS" Monument
  _buildPerimeterAndGate() {
    this.gateGroup = new THREE.Group();
    this.gateGroup.position.set(0, 2.2, -105);

    // Monument entrance arch sign
    const signPillarMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });
    const colLeft = new THREE.Mesh(new THREE.BoxGeometry(2.5, 9.0, 2.5), signPillarMat);
    colLeft.position.set(-14, 4.5, 0);
    const colRight = new THREE.Mesh(new THREE.BoxGeometry(2.5, 9.0, 2.5), signPillarMat);
    colRight.position.set(14, 4.5, 0);

    const archBeam = new THREE.Mesh(new THREE.BoxGeometry(32, 2.2, 2.8), signPillarMat);
    archBeam.position.set(0, 9.5, 0);
    this.gateGroup.add(colLeft, colRight, archBeam);

    // Illuminated "SPACEX STARBASE - GATEWAY TO MARS" Sign
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 1024, 128);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 44px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('★ SPACEX STARBASE — GATEWAY TO MARS ★', 512, 64);
    const gateTex = new THREE.CanvasTexture(canvas);
    gateTex.colorSpace = THREE.SRGBColorSpace;
    gateTex.anisotropy = 8;

    const gateSign = new THREE.Mesh(new THREE.PlaneGeometry(28, 3.5), new THREE.MeshBasicMaterial({ map: gateTex }));
    gateSign.position.set(0, 9.5, -1.45);
    gateSign.rotation.y = Math.PI;
    this.gateGroup.add(gateSign);

    // Security Gatehouse Guard Booth
    const booth = new THREE.Mesh(new THREE.BoxGeometry(5.5, 3.6, 4.5), this.matConcrete);
    booth.position.set(0, 1.8, 0);
    this.gateGroup.add(booth);

    // 6 Stadium Floodlight Towers illuminating the Launch Complex at night
    for (let f = 0; f < 6; f++) {
      const angle = (f / 6) * Math.PI * 2;
      const fx = Math.cos(angle) * 115;
      const fz = Math.sin(angle) * 95;

      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.65, 34.0, 8), this.matTowerSteel);
      mast.position.set(fx, 17.0, fz);

      const lightRack = new THREE.Mesh(new THREE.BoxGeometry(7.5, 2.4, 1.2), this.matTowerSteel);
      lightRack.position.set(fx, 34.0, fz);

      const flood = new THREE.SpotLight(0xfffbeb, 12.0, 180.0, Math.PI * 0.35, 0.45);
      flood.position.set(fx, 34.0, fz);
      flood.target.position.set(0, 25.0, 0);
      this.group.add(mast, lightRack, flood, flood.target);
    }

    this.group.add(this.gateGroup);
  }

  _registerColliders() {
    // Register physical AABB colliders with WorldGenerator so explorer & rover don't clip through buildings
    // 1. OLM base
    this.worldGen.registerCollider(this.baseX, this.baseZ, 18, 18, this.baseY + 28);
    // 2. Mechazilla tower
    this.worldGen.registerCollider(this.baseX - 18, this.baseZ - 18, 8, 8, this.baseY + 148);
    // 3. Mega Bay Hangar
    this.worldGen.registerCollider(this.baseX + 85, this.baseZ + 95, 28, 34, this.baseY + 86);
    // 4. Tank Farm Berm
    this.worldGen.registerCollider(this.baseX - 75, this.baseZ - 65, 38, 28, this.baseY + 34);
    // 5. Control Center
    this.worldGen.registerCollider(this.baseX - 85, this.baseZ + 45, 19, 15, this.baseY + 14);
  }

  update(dt) {
    // Animate methane flare stack flame flicker
    if (this.flareMesh) {
      this.flareTimer += dt * 14.0;
      const s = 1.0 + Math.sin(this.flareTimer) * 0.22 + Math.cos(this.flareTimer * 2.3) * 0.15;
      this.flareMesh.scale.set(s, s * (1.0 + Math.sin(this.flareTimer * 1.5) * 0.25), s);
      if (this.flareLight) {
        this.flareLight.intensity = 3.5 + Math.sin(this.flareTimer) * 1.5;
      }
    }

    // Flash aviation warning beacons
    if (this.aviationBeacons && this.aviationBeacons.length > 0) {
      const flash = Math.sin(performance.now() * 0.005) > 0.2 ? 1.0 : 0.15;
      for (const b of this.aviationBeacons) {
        b.material.opacity = flash;
      }
    }
  }

  // Returns true if player is in proximity to the Starship launch mount to board
  isPlayerNearPad(playerPos) {
    const distSq = (playerPos.x - this.baseX) ** 2 + (playerPos.z - this.baseZ) ** 2;
    return distSq < 38.0 * 38.0 && Math.abs(playerPos.y - this.baseY) < 30.0;
  }
}
