// ============================================================================
// AETHERIA OPEN WORLD ENGINE - Anatomical Human Rig, NPC Daily Routines & Traffic
// Multi-Jointed Humanoid Kinematics (Hips, Knees, Ankles, Spine, Shoulders,
// Elbows, Head) + 24-Hour Daily Schedules (Commuters, Workers, Hikers, Joggers,
// Villagers) + Autonomous AI Highway & City Traffic Vehicles
// ============================================================================

import * as THREE from 'three';
import { HIKING_TRAILS, WATER_LEVEL, CITY_GRID_SPACING } from './WorldGenerator.js';
import { clamp, lerp } from './Noise.js';

// Shared materials cache for performance
const SKIN_TONES = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0xffdbac];
const SUIT_COLORS = [0x1e293b, 0x334155, 0x1e3a8a, 0x27272a, 0x3f3f46, 0x0f172a];
const CASUAL_COLORS = [0x2563eb, 0xdc2626, 0x059669, 0xd97706, 0x7c3aed, 0x0891b2, 0xbe123c];
const PANTS_COLORS = [0x1e293b, 0x334155, 0x475569, 0x292524, 0x172554];
const HAIR_COLORS = [0x18181b, 0x3f2314, 0x713f12, 0xca8a04, 0x52525b];

const FIRST_NAMES = [
  'Elena', 'Marcus', 'David', 'Sofia', 'Lucas', 'Hannah', 'Liam', 'Maya',
  'Noah', 'Chloe', 'Julian', 'Aria', 'Ethan', 'Zoe', 'Gabriel', 'Nora',
  'Adrian', 'Clara', 'Victor', 'Leah', 'Samuel', 'Eva', 'Daniel', 'Amara'
];
const LAST_NAMES = [
  'Vance', 'Reed', 'Chen', 'Patel', 'Meyer', 'Kowalski', 'Silva', 'Lindqvist',
  'Rossi', 'Moreau', 'Tanaka', 'Okafor', 'Bergstrom', 'Navarro', 'Keller', 'Brooks'
];

// Build an articulated, multi-jointed realistic human character rig
export function createHumanRig(config = {}) {
  const {
    role = 'explorer', // 'explorer' | 'commuter' | 'worker' | 'hiker' | 'jogger' | 'villager' | 'officer' | 'barista' | 'courier' | 'medic' | 'surveyor' | 'sweeper' | 'executive' | 'tourist' | 'student'
    seed = 0.5
  } = config;

  const pick = (arr, offset = 0) => arr[Math.floor(((seed * 997 + offset) % 1.0) * arr.length)];

  const skinColor = pick(SKIN_TONES, 0.1);
  const hairColor = pick(HAIR_COLORS, 0.2);
  let topColor = pick(CASUAL_COLORS, 0.3);
  let pantsColor = pick(PANTS_COLORS, 0.4);

  if (role === 'commuter') {
    topColor = pick(SUIT_COLORS, 0.3);
    pantsColor = topColor;
  } else if (role === 'executive') {
    topColor = 0x18181b;
    pantsColor = 0x18181b;
  } else if (role === 'officer') {
    topColor = 0x1e293b; // Municipal Transit Police Navy
    pantsColor = 0x0f172a;
  } else if (role === 'medic') {
    topColor = 0xdc2626; // Emergency Red
    pantsColor = 0x1e3a8a;
  } else if (role === 'surveyor') {
    topColor = 0xf97316; // Neon Orange Safety
    pantsColor = 0x334155;
  } else if (role === 'sweeper') {
    topColor = 0xea580c; // Sanitation High-Vis Orange
    pantsColor = 0x9a3412;
  } else if (role === 'barista') {
    topColor = 0x064e3b; // Deep Forest Apron over white
    pantsColor = 0x1e293b;
  } else if (role === 'courier') {
    topColor = 0x0284c7; // Bright Cyan Athletic
    pantsColor = 0x1e293b;
  } else if (role === 'tourist') {
    topColor = 0x38bdf8; // Pastel Resort Cyan
    pantsColor = 0xd4b996; // Khaki
  } else if (role === 'student') {
    topColor = 0x6366f1; // Indigo Hoodie
    pantsColor = 0x334155;
  } else if (role === 'worker') {
    topColor = 0xeab308; // High-vis safety vest
    pantsColor = 0x1e3a8a;
  } else if (role === 'explorer') {
    topColor = 0x1d4ed8;
    pantsColor = 0x1e293b;
  }

  const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.55 });
  const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.75 });
  const topMat = new THREE.MeshStandardMaterial({ color: topColor, roughness: 0.65 });
  const pantsMat = new THREE.MeshStandardMaterial({ color: pantsColor, roughness: 0.75 });
  const shoeMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.6 });
  const soleMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.7 });
  const shirtMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
  const buckleMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.88, roughness: 0.2 });
  const beltMat = new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.7 });
  const shadesMat = new THREE.MeshStandardMaterial({ color: 0x09090b, roughness: 0.1, metalness: 0.95 });

  const root = new THREE.Group();

  // 1. Pelvis & Waist Belt Pivot (at y = 0.94m)
  const pelvis = new THREE.Group();
  pelvis.position.y = 0.94;
  root.add(pelvis);

  const hipMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.155, 0.145, 0.18, 12), pantsMat);
  hipMesh.scale.set(1.15, 1.0, 0.78);
  hipMesh.castShadow = true;
  pelvis.add(hipMesh);

  // Adult Leather Belt & Metallic Buckle
  const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.162, 0.158, 0.045, 12), beltMat);
  belt.position.y = 0.08;
  belt.scale.set(1.16, 1.0, 0.79);
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.055, 0.015), buckleMat);
  buckle.position.set(0, 0.08, -0.125);
  pelvis.add(belt, buckle);

  // 2. Spine & Sculpted Torso
  const spine = new THREE.Group();
  spine.position.y = 0.06;
  pelvis.add(spine);

  const lowerTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.175, 0.15, 0.32, 12), topMat);
  lowerTorso.position.y = 0.16;
  lowerTorso.scale.set(1.18, 1.0, 0.74);
  lowerTorso.castShadow = true;
  spine.add(lowerTorso);

  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.195, 0.175, 0.32, 12), topMat);
  chest.position.y = 0.44;
  chest.scale.set(1.22, 1.0, 0.76);
  chest.castShadow = true;
  spine.add(chest);

  // Tailored Collar / Lapels & Under-Shirt
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.088, 0.095, 0.11, 10), shirtMat);
  collar.position.set(0, 0.58, -0.02);
  spine.add(collar);

  // Jacket Lapels
  const lapelGeo = new THREE.BoxGeometry(0.075, 0.22, 0.02);
  const leftLapel = new THREE.Mesh(lapelGeo, topMat);
  leftLapel.position.set(-0.065, 0.48, -0.155);
  leftLapel.rotation.z = -0.18;
  const rightLapel = new THREE.Mesh(lapelGeo, topMat);
  rightLapel.position.set(0.065, 0.48, -0.155);
  rightLapel.rotation.z = 0.18;
  spine.add(leftLapel, rightLapel);

  // Role-specific torso accessories
  if (role === 'explorer' || role === 'hiker' || role === 'student') {
    const packColor = role === 'explorer' ? 0xea580c : role === 'student' ? 0x4f46e5 : 0x15803d;
    const packMat = new THREE.MeshStandardMaterial({ color: packColor, roughness: 0.6 });
    const pack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.46, 0.19), packMat);
    pack.position.set(0, 0.38, 0.19);
    pack.castShadow = true;
    spine.add(pack);

    if (role === 'hiker') {
      const roll = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.34, 10),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.7 })
      );
      roll.rotation.z = Math.PI * 0.5;
      roll.position.set(0, 0.64, 0.19);
      spine.add(roll);
    }
  } else if (role === 'courier') {
    const bagMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.5 });
    const bag = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.28, 0.16), bagMat);
    bag.position.set(0.12, 0.26, 0.14);
    bag.rotation.z = 0.22;
    bag.castShadow = true;
    spine.add(bag);
  } else if (role === 'officer' || role === 'medic') {
    const pMat = role === 'medic' ? new THREE.MeshStandardMaterial({ color: 0xdc2626 }) : new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.8 });
    const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.1), pMat);
    pouch.position.set(0.22, 0.04, 0);
    pelvis.add(pouch);
    if (role === 'medic') {
      const crossMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const c1 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.15, 0.01), crossMat);
      const c2 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.05, 0.01), crossMat);
      c1.position.set(0, 0.44, -0.19);
      c2.position.set(0, 0.44, -0.19);
      spine.add(c1, c2);
    }
  } else if (role === 'worker' || role === 'surveyor' || role === 'sweeper') {
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0 });
    const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.198, 0.182, 0.05, 12), stripeMat);
    stripe.position.y = 0.34;
    stripe.scale.set(1.23, 1.0, 0.77);
    spine.add(stripe);
  }

  // 3. Neck & Sculpted Anatomical Head (Cranium + Mandible Jaw + Nose Bridge + Styled Hair)
  const neck = new THREE.Group();
  neck.position.y = 0.62;
  spine.add(neck);

  const neckMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.060, 0.070, 0.12, 10), skinMat);
  neckMesh.position.y = 0.04;
  neck.add(neckMesh);

  // Adult Cranium Structure
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.20, 0.19), skinMat);
  head.position.set(0, 0.18, 0);
  head.castShadow = true;
  neck.add(head);

  // Mandible Jaw & Defined Chin (realistic adult facial plane)
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.145, 0.085, 0.13), skinMat);
  jaw.position.set(0, 0.12, -0.04);
  neck.add(jaw);

  // Ears
  for (const sx of [-0.095, 0.095]) {
    const ear = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.055, 0.035), skinMat);
    ear.position.set(sx, 0.175, -0.01);
    neck.add(ear);
  }

  // Brow Ridge & Anatomical Nose Bridge (replaces snowman cone nose!)
  const brow = new THREE.Mesh(new THREE.BoxGeometry(0.145, 0.026, 0.04), skinMat);
  brow.position.set(0, 0.208, -0.10);
  const noseBridge = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.055, 0.032), skinMat);
  noseBridge.position.set(0, 0.172, -0.116);
  neck.add(brow, noseBridge);

  // Natural Eye Sockets or Sleek Modern Sunglasses
  const wearsSunglasses = (role === 'commuter' || role === 'executive' || role === 'officer' || role === 'tourist' || role === 'explorer' || seed > 0.4);
  if (wearsSunglasses) {
    const sunglasses = new THREE.Mesh(new THREE.BoxGeometry(0.155, 0.042, 0.026), shadesMat);
    sunglasses.position.set(0, 0.196, -0.112);
    neck.add(sunglasses);
  } else {
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1e293b });
    for (const sx of [-0.045, 0.045]) {
      const eye = new THREE.Mesh(new THREE.BoxGeometry(0.032, 0.018, 0.01), eyeMat);
      eye.position.set(sx, 0.196, -0.102);
      neck.add(eye);
    }
  }

  // Headwear or Styled Modern Hair
  if (role === 'worker' || role === 'surveyor') {
    const hatColor = role === 'surveyor' ? 0xffffff : 0xfacc15;
    const hatMat = new THREE.MeshStandardMaterial({ color: hatColor, roughness: 0.3 });
    const hardhat = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.09, 0.24), hatMat);
    hardhat.position.set(0, 0.28, -0.01);
    neck.add(hardhat);
  } else if (role === 'officer') {
    const capMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 });
    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.075, 0.22), capMat);
    cap.position.set(0, 0.28, -0.01);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.02, 0.11), capMat);
    visor.position.set(0, 0.24, -0.13);
    visor.rotation.x = 0.2;
    const badge = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.02), new THREE.MeshBasicMaterial({ color: 0xfacc15 }));
    badge.position.set(0, 0.28, -0.12);
    neck.add(cap, visor, badge);
  } else if (role === 'tourist') {
    const hatMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.8 });
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.02, 14), hatMat);
    brim.position.set(0, 0.26, 0);
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.14, 0.08, 12), hatMat);
    crown.position.set(0, 0.30, 0);
    neck.add(brim, crown);
  } else {
    // Sculpted Modern Textured Hair Cut
    const hairCrown = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.08, 0.20), hairMat);
    hairCrown.position.set(0, 0.27, 0.01);
    const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.185, 0.14, 0.07), hairMat);
    hairBack.position.set(0, 0.20, 0.08);
    neck.add(hairCrown, hairBack);
  }

  // 4. Articulated Arms (Shoulder -> Upper Arm -> Elbow -> Forearm -> Hand)
  const buildArm = (side) => {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.245, 0.55, 0);
    spine.add(shoulder);

    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.044, 0.29, 10), topMat);
    upperArm.position.y = -0.13;
    upperArm.castShadow = true;
    shoulder.add(upperArm);

    const elbow = new THREE.Group();
    elbow.position.y = -0.28;
    shoulder.add(elbow);

    const forearmMat = role === 'jogger' || role === 'worker' ? skinMat : topMat;
    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.035, 0.26, 10), forearmMat);
    forearm.position.y = -0.12;
    forearm.castShadow = true;
    elbow.add(forearm);

    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.038, 8, 8), skinMat);
    hand.position.y = -0.26;
    hand.scale.set(0.8, 1.2, 0.6);
    elbow.add(hand);

    // Handheld props
    if ((role === 'commuter' || role === 'executive') && side === 1 && seed > 0.25) {
      const caseMat = new THREE.MeshStandardMaterial({ color: role === 'executive' ? 0x18181b : 0x451a03, roughness: 0.5 });
      const briefcase = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.28, 0.38), caseMat);
      briefcase.position.set(0.05, -0.36, 0);
      elbow.add(briefcase);
    } else if (role === 'hiker') {
      const poleMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.3 });
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.008, 1.15, 6), poleMat);
      pole.position.set(0, -0.42, -0.08);
      pole.rotation.x = 0.22;
      elbow.add(pole);
    } else if (role === 'barista' && side === 1) {
      const cupMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.03, 0.11, 8), cupMat);
      cup.position.set(0, -0.32, -0.08);
      elbow.add(cup);
    } else if (role === 'surveyor' && side === 1) {
      const boardMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.6 });
      const board = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.28, 0.22), boardMat);
      board.position.set(0.06, -0.34, 0);
      elbow.add(board);
    } else if (role === 'sweeper' && side === 1) {
      const poleMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6 });
      const broomStick = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.4, 6), poleMat);
      broomStick.position.set(0, -0.35, -0.05);
      const bristles = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, 0.32), new THREE.MeshStandardMaterial({ color: 0x713f12 }));
      bristles.position.set(0, -1.0, -0.05);
      elbow.add(broomStick, bristles);
    }

    return { shoulder, elbow };
  };

  const leftArm = buildArm(-1);
  const rightArm = buildArm(1);

  // 5. Articulated Legs (Hip -> Thigh -> Knee -> Shin -> Foot/Shoe)
  const buildLeg = (side) => {
    const hip = new THREE.Group();
    hip.position.set(side * 0.105, -0.04, 0);
    pelvis.add(hip);

    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.074, 0.058, 0.44, 10), pantsMat);
    thigh.position.y = -0.21;
    thigh.castShadow = true;
    hip.add(thigh);

    const knee = new THREE.Group();
    knee.position.y = -0.43;
    hip.add(knee);

    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.056, 0.042, 0.43, 10), pantsMat);
    shin.position.y = -0.21;
    shin.castShadow = true;
    knee.add(shin);

    const ankle = new THREE.Group();
    ankle.position.y = -0.43;
    knee.add(ankle);

    const shoeUpper = new THREE.Mesh(new THREE.BoxGeometry(0.098, 0.065, 0.23), shoeMat);
    shoeUpper.position.set(0, 0.005, -0.045);
    shoeUpper.castShadow = true;
    const shoeSole = new THREE.Mesh(new THREE.BoxGeometry(0.104, 0.032, 0.245), soleMat);
    shoeSole.position.set(0, -0.032, -0.045);
    shoeSole.castShadow = true;
    ankle.add(shoeUpper, shoeSole);

    return { hip, knee, ankle };
  };

  const leftLeg = buildLeg(-1);
  const rightLeg = buildLeg(1);

  return {
    root,
    pelvis,
    spine,
    neck,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    phase: seed * Math.PI * 2
  };
}

// Biomechanical Human Gait & Posture Animator
export function animateHumanRig(rig, speedMs, dt, options = {}) {
  const {
    slopePitch = 0,
    isSwimming = false,
    isHiker = false,
    idleGesture = 0
  } = options;

  if (isSwimming) {
    rig.pelvis.position.y = 0.55;
    rig.spine.rotation.x = -1.25;
    rig.phase += dt * 5.0;
    const s = Math.sin(rig.phase);
    rig.leftArm.shoulder.rotation.x = s * 1.2 - 1.4;
    rig.rightArm.shoulder.rotation.x = -s * 1.2 - 1.4;
    rig.leftLeg.hip.rotation.x = -s * 0.45;
    rig.rightLeg.hip.rotation.x = s * 0.45;
    rig.leftLeg.knee.rotation.x = 0.25;
    rig.rightLeg.knee.rotation.x = 0.25;
    return;
  }

  if (speedMs > 0.15) {
    const isRunning = speedMs > 3.2;
    const cadence = isRunning ? 3.2 + speedMs * 0.52 : 2.4 + speedMs * 1.35;
    rig.phase = (rig.phase + dt * cadence) % (Math.PI * 2);
    const p = rig.phase;

    const strideAmp = isRunning
      ? clamp(0.65 + (speedMs - 3.2) * 0.04, 0.65, 1.05)
      : clamp(speedMs * 0.24, 0.18, 0.56);

    // Hip flexion / extension
    const lHip = Math.sin(p) * strideAmp;
    const rHip = Math.sin(p + Math.PI) * strideAmp;
    rig.leftLeg.hip.rotation.x = lHip;
    rig.rightLeg.hip.rotation.x = rHip;

    // Realistic Knee Flexion (negative rotation.x bends shin backward toward +Z!)
    const lKneeBend = Math.max(0.05, Math.sin(p - 0.75) * strideAmp * (isRunning ? 1.55 : 1.35));
    const rKneeBend = Math.max(0.05, Math.sin(p + Math.PI - 0.75) * strideAmp * (isRunning ? 1.55 : 1.35));
    rig.leftLeg.knee.rotation.x = -lKneeBend;
    rig.rightLeg.knee.rotation.x = -rKneeBend;

    // Ankle heel-strike to toe-off
    rig.leftLeg.ankle.rotation.x = Math.cos(p) * 0.22 + lKneeBend * 0.3;
    rig.rightLeg.ankle.rotation.x = Math.cos(p + Math.PI) * 0.22 + rKneeBend * 0.3;

    // Pelvis vertical double-frequency bob & subtle hip roll
    const bob = Math.abs(Math.cos(p)) * (isRunning ? 0.065 : 0.032) * (strideAmp / 0.5);
    rig.pelvis.position.y = 0.94 + bob;
    rig.pelvis.rotation.z = Math.sin(p) * 0.035;

    // Forward torso lean (negative rotation.x tilts spine forward toward -Z!) & counter-rotation
    const targetLean = (isRunning ? 0.15 : 0.04) + (isHiker ? 0.12 : 0.0) + clamp(slopePitch * 0.5, -0.1, 0.25);
    rig.spine.rotation.x = lerp(rig.spine.rotation.x, -targetLean, dt * 8);
    rig.spine.rotation.y = -Math.sin(p) * 0.11;
    rig.neck.rotation.y = Math.sin(p) * 0.07;

    // Counter-swinging arms with natural forward elbow bend (positive rotation.x bends forearm toward -Z!)
    const armAmp = isRunning ? strideAmp * 0.95 : strideAmp * 0.75;
    rig.leftArm.shoulder.rotation.x = Math.sin(p + Math.PI) * armAmp;
    rig.rightArm.shoulder.rotation.x = Math.sin(p) * armAmp;

    const baseElbow = isRunning ? 1.05 : isHiker ? 0.65 : 0.26;
    rig.leftArm.elbow.rotation.x = baseElbow + Math.max(0, Math.sin(p + Math.PI)) * 0.35;
    rig.rightArm.elbow.rotation.x = baseElbow + Math.max(0, Math.sin(p)) * 0.35;
  } else {
    // Natural Idle Breathing & Subtle Conversational / Work Gestures
    rig.phase += dt * 1.6;
    const breath = Math.sin(rig.phase) * 0.015;
    rig.pelvis.position.y = lerp(rig.pelvis.position.y, 0.94, dt * 8);
    rig.pelvis.rotation.z = lerp(rig.pelvis.rotation.z, 0, dt * 8);
    rig.spine.rotation.x = lerp(rig.spine.rotation.x, breath, dt * 6);
    rig.spine.rotation.y = lerp(rig.spine.rotation.y, Math.sin(rig.phase * 0.4) * 0.08, dt * 4);
    rig.neck.rotation.y = Math.sin(rig.phase * 0.55 + idleGesture) * 0.18;

    rig.leftLeg.hip.rotation.x = lerp(rig.leftLeg.hip.rotation.x, 0, dt * 8);
    rig.rightLeg.hip.rotation.x = lerp(rig.rightLeg.hip.rotation.x, 0, dt * 8);
    rig.leftLeg.knee.rotation.x = lerp(rig.leftLeg.knee.rotation.x, -0.03, dt * 8);
    rig.rightLeg.knee.rotation.x = lerp(rig.rightLeg.knee.rotation.x, -0.03, dt * 8);
    rig.leftLeg.ankle.rotation.x = lerp(rig.leftLeg.ankle.rotation.x, 0, dt * 8);
    rig.rightLeg.ankle.rotation.x = lerp(rig.rightLeg.ankle.rotation.x, 0, dt * 8);

    if (idleGesture > 0.5) {
      rig.rightArm.shoulder.rotation.x = 0.35 + Math.sin(rig.phase * 2.2) * 0.18;
      rig.rightArm.elbow.rotation.x = 0.85;
      rig.leftArm.shoulder.rotation.x = lerp(rig.leftArm.shoulder.rotation.x, -0.05, dt * 6);
      rig.leftArm.elbow.rotation.x = lerp(rig.leftArm.elbow.rotation.x, 0.2, dt * 6);
    } else {
      rig.leftArm.shoulder.rotation.x = lerp(rig.leftArm.shoulder.rotation.x, 0, dt * 6);
      rig.rightArm.shoulder.rotation.x = lerp(rig.rightArm.shoulder.rotation.x, 0, dt * 6);
      rig.leftArm.elbow.rotation.x = lerp(rig.leftArm.elbow.rotation.x, 0.12, dt * 6);
      rig.rightArm.elbow.rotation.x = lerp(rig.rightArm.elbow.rotation.x, 0.12, dt * 6);
    }
  }
}

// ============================================================================
// LIVING WORLD SIMULATION: 95+ NPCs WITH DAILY ROUTINES & 32 AI TRAFFIC CARS
// ============================================================================
export class LifeSimulation {
  constructor(scene, worldGen, atmosphere) {
    this.scene = scene;
    this.worldGen = worldGen;
    this.atmosphere = atmosphere;

    this.npcGroup = new THREE.Group();
    this.scene.add(this.npcGroup);

    this.trafficGroup = new THREE.Group();
    this.scene.add(this.trafficGroup);

    this.npcs = [];
    this.vehicles = [];
    this.nearestNpc = null;
    this.nearestNpcDist = Infinity;
    this.activeDialogue = null;
    this.dialogueTimer = 0;

    this._spawnSolisCityCommutersAndWorkers();
    this._spawnMountainHikers();
    this._spawnOakhavenVillagers();
    this._spawnAutonomousTraffic();
  }

  _generateName(idx) {
    const fn = FIRST_NAMES[idx % FIRST_NAMES.length];
    const ln = LAST_NAMES[(idx * 7 + 3) % LAST_NAMES.length];
    return `${fn} ${ln}`;
  }

  // 1. Spawn Solis Metropolis Realistic Multi-Zone City NPCs (130+ Citizens)
  _spawnSolisCityCommutersAndWorkers() {
    const gridSpacing = CITY_GRID_SPACING;
    const sidewalkOffset = 13.6;

    const rolesAndTitles = [
      { role: 'officer', title: 'Transit Security Officer', speed: 1.4 },
      { role: 'barista', title: 'Waterfront Barista', speed: 1.25 },
      { role: 'courier', title: 'Express Bicycle Courier', speed: 3.1 },
      { role: 'medic', title: 'EMS First Responder', speed: 1.5 },
      { role: 'surveyor', title: 'Civil Infrastructure Surveyor', speed: 1.35 },
      { role: 'sweeper', title: 'Municipal Sanitation Tech', speed: 1.2 },
      { role: 'executive', title: 'Senior Technology Director', speed: 1.6 },
      { role: 'tourist', title: 'Waterfront Sightseer', speed: 1.15 },
      { role: 'student', title: 'Urban Planning Researcher', speed: 1.45 },
      { role: 'commuter', title: 'Structural Engineer', speed: 1.55 },
      { role: 'commuter', title: 'Financial Analyst', speed: 1.65 },
      { role: 'commuter', title: 'Urban Architect', speed: 1.50 },
      { role: 'worker', title: 'Bridge Maintenance Crew', speed: 1.25 },
      { role: 'jogger', title: 'Coastal Marathon Runner', speed: 3.75 }
    ];

    let cityNpcIdx = 0;

    // A. Coastal Boulevard Promenade & Harbor Esplanade (35 NPCs)
    for (let i = 0; i < 35; i++) {
      const seed = ((cityNpcIdx * 137.5) % 100) / 100;
      const spec = rolesAndTitles[cityNpcIdx % rolesAndTitles.length];
      const rig = createHumanRig({ role: spec.role, seed });

      const side = (i % 2 === 0 ? 1 : -1) * 14.0;
      const startX = -360 + (i / 35) * 680;
      const length = 80 + (i % 4) * 45;
      const dir = (i % 2 === 0) ? 1 : -1;

      const waypoints = [
        { x: startX, z: 220.0 + side },
        { x: startX + length * dir, z: 220.0 + side },
        { x: startX + length * dir, z: 220.0 + side * 0.8 },
        { x: startX, z: 220.0 + side * 0.8 }
      ];

      const p0 = waypoints[0];
      const y = this.worldGen.getCollisionHeight(p0.x, p0.z);
      rig.root.position.set(p0.x, y, p0.z);
      this.npcGroup.add(rig.root);

      this.npcs.push({
        id: `npc_city_${cityNpcIdx}`,
        name: this._generateName(cityNpcIdx),
        role: spec.role,
        title: spec.title,
        rig,
        waypoints,
        currentWp: 1,
        baseSpeed: spec.speed * (0.9 + seed * 0.25),
        pauseTimer: (i % 5) * 1.5,
        seed
      });
      cityNpcIdx++;
    }

    // B. Golden Bay Suspension Bridge Walkway (20 NPCs)
    for (let i = 0; i < 20; i++) {
      const seed = ((cityNpcIdx * 137.5) % 100) / 100;
      const bridgeRoles = [
        { role: 'surveyor', title: 'Bridge Inspection Engineer', speed: 1.35 },
        { role: 'worker', title: 'Cable Maintenance Tech', speed: 1.25 },
        { role: 'tourist', title: 'Bridge Overlook Tourist', speed: 1.15 },
        { role: 'jogger', title: 'Bay Crossing Runner', speed: 3.65 },
        { role: 'officer', title: 'Bridge Security Patrol', speed: 1.4 }
      ];
      const spec = bridgeRoles[i % bridgeRoles.length];
      const rig = createHumanRig({ role: spec.role, seed });

      const sideZ = i % 2 === 0 ? 211.5 : 228.5; // North vs South walkway
      const startX = -820 + (i / 20) * 800;
      const span = 140 + (i % 3) * 60;
      const dir = i % 2 === 0 ? 1 : -1;

      const waypoints = [
        { x: startX, z: sideZ },
        { x: startX + span * dir, z: sideZ }
      ];

      const p0 = waypoints[0];
      const y = this.worldGen.getCollisionHeight(p0.x, p0.z);
      rig.root.position.set(p0.x, y, p0.z);
      this.npcGroup.add(rig.root);

      this.npcs.push({
        id: `npc_city_${cityNpcIdx}`,
        name: this._generateName(cityNpcIdx),
        role: spec.role,
        title: spec.title,
        rig,
        waypoints,
        currentWp: 1,
        pingPong: true,
        direction: 1,
        baseSpeed: spec.speed * (0.9 + seed * 0.25),
        pauseTimer: (i % 4) * 2.0,
        seed
      });
      cityNpcIdx++;
    }

    // C. Downtown Financial District & Solis Tower Plazas (45 NPCs)
    const zAvenues = [2, 1, 0, -1, -2];
    for (let i = 0; i < 45; i++) {
      const seed = ((cityNpcIdx * 137.5) % 100) / 100;
      const spec = rolesAndTitles[cityNpcIdx % rolesAndTitles.length];
      const rig = createHumanRig({ role: spec.role, seed });

      const gx = (i % 5) - 2;
      const gz = zAvenues[i % zAvenues.length];
      const blockX1 = gx * gridSpacing;
      const blockZ1 = gz * gridSpacing;
      const spanBlocks = 1 + (i % 2);
      const dir = i % 2 === 0 ? 1 : -1;
      const side = (i % 4 < 2 ? -1 : 1) * sidewalkOffset;

      const waypoints = [
        { x: blockX1 + side, z: blockZ1 + side },
        { x: blockX1 + spanBlocks * gridSpacing * dir + side, z: blockZ1 + side },
        { x: blockX1 + spanBlocks * gridSpacing * dir + side, z: blockZ1 - gridSpacing + side },
        { x: blockX1 + side, z: blockZ1 - gridSpacing + side }
      ];

      const wpIdx = i % waypoints.length;
      const startPt = waypoints[wpIdx];
      const y = this.worldGen.getCollisionHeight(startPt.x, startPt.z);
      rig.root.position.set(startPt.x, y, startPt.z);
      this.npcGroup.add(rig.root);

      this.npcs.push({
        id: `npc_city_${cityNpcIdx}`,
        name: this._generateName(cityNpcIdx),
        role: spec.role,
        title: spec.title,
        rig,
        waypoints,
        currentWp: (wpIdx + 1) % waypoints.length,
        baseSpeed: spec.speed * (0.9 + seed * 0.25),
        pauseTimer: (i % 6) * 1.8,
        seed
      });
      cityNpcIdx++;
    }

    // D. Solis Coastal Airport Access Road & Terminal (15 NPCs)
    for (let i = 0; i < 15; i++) {
      const seed = ((cityNpcIdx * 137.5) % 100) / 100;
      const airportRoles = [
        { role: 'worker', title: 'Airport Ground Operations', speed: 1.3 },
        { role: 'officer', title: 'Aviation Security Marshal', speed: 1.4 },
        { role: 'courier', title: 'Air Cargo Dispatcher', speed: 2.8 },
        { role: 'commuter', title: 'Flight Systems Coordinator', speed: 1.55 },
        { role: 'tourist', title: 'Arriving Passenger', speed: 1.2 }
      ];
      const spec = airportRoles[i % airportRoles.length];
      const rig = createHumanRig({ role: spec.role, seed });

      const ax = 370 + (i / 15) * 220;
      const az = 195 + (i % 3) * 16;
      const waypoints = [
        { x: ax, z: az },
        { x: ax + 35, z: az },
        { x: ax + 35, z: az + 18 },
        { x: ax, z: az + 18 }
      ];

      const p0 = waypoints[0];
      const y = this.worldGen.getCollisionHeight(p0.x, p0.z);
      rig.root.position.set(p0.x, y, p0.z);
      this.npcGroup.add(rig.root);

      this.npcs.push({
        id: `npc_city_${cityNpcIdx}`,
        name: this._generateName(cityNpcIdx),
        role: spec.role,
        title: spec.title,
        rig,
        waypoints,
        currentWp: 1,
        baseSpeed: spec.speed * (0.9 + seed * 0.25),
        pauseTimer: (i % 4) * 2.2,
        seed
      });
      cityNpcIdx++;
    }

    // E. Waterfront Outdoor Cafes & Harbor Steps (15 NPCs)
    for (let i = 0; i < 15; i++) {
      const seed = ((cityNpcIdx * 137.5) % 100) / 100;
      const cafeRoles = [
        { role: 'barista', title: 'Master Espresso Roaster', speed: 1.2 },
        { role: 'executive', title: 'Technology Executive at Lunch', speed: 1.4 },
        { role: 'student', title: 'Student Researcher', speed: 1.35 },
        { role: 'tourist', title: 'Harbor Sightseer', speed: 1.15 },
        { role: 'commuter', title: 'Civil Engineer on Break', speed: 1.45 }
      ];
      const spec = cafeRoles[i % cafeRoles.length];
      const rig = createHumanRig({ role: spec.role, seed });

      const cx = -90 + (i / 15) * 180;
      const cz = 232 + (i % 3) * 6;
      const waypoints = [
        { x: cx, z: cz },
        { x: cx + 18, z: cz + 8 },
        { x: cx - 12, z: cz + 6 }
      ];

      const p0 = waypoints[0];
      const y = this.worldGen.getCollisionHeight(p0.x, p0.z);
      rig.root.position.set(p0.x, y, p0.z);
      this.npcGroup.add(rig.root);

      this.npcs.push({
        id: `npc_city_${cityNpcIdx}`,
        name: this._generateName(cityNpcIdx),
        role: spec.role,
        title: spec.title,
        rig,
        waypoints,
        currentWp: 1,
        baseSpeed: spec.speed * (0.9 + seed * 0.25),
        pauseTimer: 3.5 + (i % 3) * 4.0,
        seed
      });
      cityNpcIdx++;
    }
  }

  // 2. Spawn Mountain Hikers & Backpackers on Alpine, Coastal & Desert Trails
  _spawnMountainHikers() {
    const trailNames = [
      'Hiking Valkyrie Alpine Trail',
      'Trekking Cape Stormwatch Cliff Path',
      'Exploring Helios Archaeological Trail'
    ];

    let hikerId = 0;
    HIKING_TRAILS.forEach((rawPts, tIdx) => {
      const densePts = this.worldGen._sampleCatmullRom(rawPts, 16);
      const count = tIdx === 0 ? 14 : 6;

      for (let i = 0; i < count; i++) {
        const seed = ((hikerId * 73.1) % 100) / 100;
        const rig = createHumanRig({ role: 'hiker', seed });
        const startIdx = Math.floor((i / count) * (densePts.length - 1));
        const [sx, sz] = densePts[startIdx];
        const sy = this.worldGen.getCollisionHeight(sx, sz);
        rig.root.position.set(sx, sy, sz);
        this.npcGroup.add(rig.root);

        const waypoints = densePts.map(([px, pz]) => ({ x: px, z: pz }));

        this.npcs.push({
          id: `npc_hiker_${hikerId}`,
          name: this._generateName(60 + hikerId),
          role: 'hiker',
          title: 'Alpine Mountaineer',
          customActivity: trailNames[tIdx],
          rig,
          waypoints,
          currentWp: (startIdx + 1) % waypoints.length,
          pingPong: true,
          direction: i % 2 === 0 ? 1 : -1,
          baseSpeed: 1.38 + seed * 0.3,
          pauseTimer: 0,
          seed
        });
        hikerId++;
      }
    });
  }

  // 3. Spawn Oakhaven Alpine Village Artisans & Residents
  _spawnOakhavenVillagers() {
    const vx = 1750;
    const vz = -1400;
    const occupations = ['Village Baker', 'Timber Craftsman', 'Market Grocer', 'Forestry Warden', 'Innkeeper'];

    for (let i = 0; i < 16; i++) {
      const seed = ((i * 59.3) % 100) / 100;
      const rig = createHumanRig({ role: 'villager', seed });
      const a1 = (i / 16) * Math.PI * 2;
      const a2 = a1 + 1.4;
      const r1 = 22 + (i % 3) * 28;
      const r2 = 34 + ((i + 1) % 3) * 24;

      const waypoints = [
        { x: vx + Math.cos(a1) * r1, z: vz + Math.sin(a1) * r1 },
        { x: vx + Math.cos(a2) * r2, z: vz + Math.sin(a2) * r2 },
        { x: vx + Math.cos(a1 + 3.1) * 18, z: vz + Math.sin(a1 + 3.1) * 18 }
      ];

      const p0 = waypoints[0];
      rig.root.position.set(p0.x, this.worldGen.getCollisionHeight(p0.x, p0.z), p0.z);
      this.npcGroup.add(rig.root);

      this.npcs.push({
        id: `npc_village_${i}`,
        name: this._generateName(90 + i),
        role: 'villager',
        title: occupations[i % occupations.length],
        rig,
        waypoints,
        currentWp: 1,
        baseSpeed: 1.25 + seed * 0.25,
        pauseTimer: (i % 4) * 2.0,
        seed
      });
    }
  }

  // 4. Build Sculpted AI Traffic Vehicles along Highways, Bridges & City Streets
  _buildTrafficCarMesh(colorHex, isTruck = false) {
    const group = new THREE.Group();
    group.rotation.order = 'YXZ';

    const paintMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.18, metalness: 0.75 });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.7, metalness: 0.2 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.2, metalness: 0.88 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.06, metalness: 0.95 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x141416, roughness: 0.88 });
    const headMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const brakeMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const amberMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });

    if (isTruck) {
      // Modern Aerodynamic Coach / Long-Haul Semi
      const cab = new THREE.Mesh(new THREE.BoxGeometry(2.35, 2.30, 6.6), paintMat);
      cab.position.y = 1.55;
      cab.castShadow = true;
      group.add(cab);

      // Lower Skirt & Front Bumper
      const bumper = new THREE.Mesh(new THREE.BoxGeometry(2.38, 0.42, 6.7), trimMat);
      bumper.position.y = 0.58;
      group.add(bumper);

      // Panoramic Windshield
      const windshield = new THREE.Mesh(new THREE.BoxGeometry(2.22, 1.05, 0.08), glassMat);
      windshield.position.set(0, 1.95, -3.31);
      windshield.rotation.x = 0.08;
      group.add(windshield);

      // Side Windows
      for (const sx of [-1.185, 1.185]) {
        const sideWin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.92, 4.8), glassMat);
        sideWin.position.set(sx, 1.95, -0.4);
        group.add(sideWin);
      }

      // Chrome Front Grille & Roof Destination Display
      const grille = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.65, 0.08), chromeMat);
      grille.position.set(0, 1.05, -3.31);
      const sign = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.25, 0.08), amberMat);
      sign.position.set(0, 2.55, -3.31);
      group.add(grille, sign);

      // Lights
      for (const sx of [-0.85, 0.85]) {
        const hl = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.18, 0.06), headMat);
        hl.position.set(sx, 0.85, -3.32);
        const tl = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.38, 0.06), brakeMat);
        tl.position.set(sx, 0.95, 3.32);
        group.add(hl, tl);
      }

      // Dual Rear Axles (6 Wheels total)
      const wheelGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.28, 14);
      wheelGeo.rotateZ(Math.PI * 0.5);
      const rimGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.29, 10);
      rimGeo.rotateZ(Math.PI * 0.5);

      const truckAxles = [-2.1, 1.45, 2.45];
      for (const wz of truckAxles) {
        for (const wx of [-1.08, 1.08]) {
          const w = new THREE.Mesh(wheelGeo, tireMat);
          w.position.set(wx, 0.42, wz);
          const r = new THREE.Mesh(rimGeo, chromeMat);
          r.position.set(wx, 0.42, wz);
          group.add(w, r);
        }
      }
    } else {
      // Sculpted Modern Sports Sedan / Crossover
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.94, 0.52, 4.45), paintMat);
      chassis.position.y = 0.62;
      chassis.castShadow = true;
      group.add(chassis);

      // Matte Black Rocker Skirts & Diffuser
      const skirts = new THREE.Mesh(new THREE.BoxGeometry(1.96, 0.16, 4.52), trimMat);
      skirts.position.y = 0.44;
      group.add(skirts);

      // Sloped Sculpted Hood
      const hood = new THREE.Mesh(new THREE.BoxGeometry(1.86, 0.18, 1.42), paintMat);
      hood.position.set(0, 0.88, -1.45);
      hood.rotation.x = 0.08;
      hood.castShadow = true;
      group.add(hood);

      // Aerodynamic Cabin Greenhouse (A/B/C Pillars & Tinted Glass)
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.64, 0.54, 2.22), glassMat);
      cabin.position.set(0, 1.22, 0.18);
      group.add(cabin);

      // Painted Roof Slab
      const roof = new THREE.Mesh(new THREE.BoxGeometry(1.58, 0.06, 1.85), paintMat);
      roof.position.set(0, 1.49, 0.22);
      roof.castShadow = true;
      group.add(roof);

      // Front Radiator Grille
      const grille = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.22, 0.06), trimMat);
      grille.position.set(0, 0.66, -2.23);
      group.add(grille);

      // Projector Headlights
      for (const sx of [-0.68, 0.68]) {
        const hl = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.14, 0.06), headMat);
        hl.position.set(sx, 0.72, -2.23);
        group.add(hl);

        // Aerodynamic Side Mirrors
        const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.10, 0.12), paintMat);
        mirror.position.set(sx * 1.02, 1.12, -0.45);
        group.add(mirror);
      }

      // Continuous Modern Red LED Rear Lightbar
      const rearLightBar = new THREE.Mesh(new THREE.BoxGeometry(1.68, 0.10, 0.06), brakeMat);
      rearLightBar.position.set(0, 0.82, 2.23);
      group.add(rearLightBar);

      // Dual Exhaust Tips
      for (const sx of [-0.48, 0.48]) {
        const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.12, 8), chromeMat);
        exhaust.rotation.x = Math.PI * 0.5;
        exhaust.position.set(sx, 0.42, 2.24);
        group.add(exhaust);
      }

      // 4 Sport Alloy Wheels with Silver Rims
      const wheelGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.26, 14);
      wheelGeo.rotateZ(Math.PI * 0.5);
      const rimGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.27, 10);
      rimGeo.rotateZ(Math.PI * 0.5);

      const zWheel = 1.38;
      for (const [wx, wz] of [[-0.96, -zWheel], [0.96, -zWheel], [-0.96, zWheel], [0.96, zWheel]]) {
        const w = new THREE.Mesh(wheelGeo, tireMat);
        w.position.set(wx, 0.36, wz);
        const r = new THREE.Mesh(rimGeo, chromeMat);
        r.position.set(wx, 0.36, wz);
        group.add(w, r);
      }
    }

    return group;
  }

  _spawnAutonomousTraffic() {
    const carColors = [0xe2e8f0, 0x3b82f6, 0xef4444, 0x10b981, 0xf59e0b, 0x64748b, 0x1e293b];
    let vCount = 0;

    // Spawn vehicles along all inter-regional highway polylines
    this.worldGen.roadPolylines.forEach((poly, rIdx) => {
      const carsOnRoute = 6;
      for (let i = 0; i < carsOnRoute; i++) {
        const isTruck = (vCount % 5 === 0);
        const color = carColors[vCount % carColors.length];
        const mesh = this._buildTrafficCarMesh(color, isTruck);
        this.trafficGroup.add(mesh);

        const dir = i % 2 === 0 ? 1 : -1;
        const idx = Math.floor(((i + 0.5) / carsOnRoute) * (poly.length - 2));

        this.vehicles.push({
          mesh,
          polyline: poly,
          segIdx: idx,
          segT: 0.0,
          dir,
          speed: isTruck ? 15.5 : 19.5 + (vCount % 4) * 2.2,
          laneOffset: 3.4 // Right-hand traffic lane offset
        });
        vCount++;
      }
    });
  }

  // Evaluate real-life daily schedule status text based on Solar Time of Day
  getNpcActivityStatus(npc, timeOfDay) {
    if (npc.customActivity) {
      if (timeOfDay < 5.5 || timeOfDay > 21.5) return 'Resting at Basecamp / Alpine Cabin';
      return npc.customActivity;
    }
    if (npc.role === 'officer') {
      if (timeOfDay >= 6.0 && timeOfDay < 9.5) return 'Patrolling Morning Commuter Corridors & Crosswalks';
      if (timeOfDay >= 9.5 && timeOfDay < 17.5) return 'Stationary Civic Security & Harbor Watch';
      if (timeOfDay >= 17.5 && timeOfDay < 21.0) return 'Managing Evening Transit Congestion';
      return 'Night Patrol — Securing Municipal Plazas';
    }
    if (npc.role === 'barista') {
      if (timeOfDay >= 5.5 && timeOfDay < 10.0) return 'Brewing Morning Roasts & Serving Rush Hour Espressos';
      if (timeOfDay >= 10.0 && timeOfDay < 14.0) return 'Serving Midday Lunches & Waterfront Pastries';
      if (timeOfDay >= 14.0 && timeOfDay < 18.5) return 'Afternoon Coffee Service & Restocking Supplies';
      return 'Cleaning Espresso Machines & Closing Cafe';
    }
    if (npc.role === 'courier') {
      if (timeOfDay >= 7.0 && timeOfDay < 12.0) return 'Priority Morning Document & Parcel Dispatches';
      if (timeOfDay >= 12.0 && timeOfDay < 13.0) return 'Grabbing Quick Lunch at Harbor Kiosk';
      if (timeOfDay >= 13.0 && timeOfDay < 18.0) return 'Express Tower-to-Tower Deliveries';
      return 'Returning Dispatch Satchel to Depot';
    }
    if (npc.role === 'medic') {
      if (timeOfDay >= 7.0 && timeOfDay < 19.0) return 'On-Call Standby at Central Metropolis First Aid Post';
      return 'Evening EMS Shift Handover';
    }
    if (npc.role === 'surveyor') {
      if (timeOfDay >= 8.0 && timeOfDay < 12.0) return 'Laser Surveying Suspension Bridge Cable Foundations';
      if (timeOfDay >= 12.0 && timeOfDay < 13.0) return 'Reviewing Geotechnical Blueprints over Lunch';
      if (timeOfDay >= 13.0 && timeOfDay < 17.0) return 'Monitoring Seawall Settlement & Concrete Pavements';
      return 'Filing Daily Civil Infrastructure Reports';
    }
    if (npc.role === 'sweeper') {
      if (timeOfDay >= 5.0 && timeOfDay < 9.0) return 'Morning Promenade Sweeping & Debris Clearance';
      if (timeOfDay >= 9.0 && timeOfDay < 15.0) return 'Emptying Civic Recycling Receptacles';
      return 'Off-Duty — Strolling Waterfront';
    }
    if (npc.role === 'executive') {
      if (timeOfDay >= 7.5 && timeOfDay < 9.0) return 'Walking to Solis Financial Tower Boardroom';
      if (timeOfDay >= 9.0 && timeOfDay < 12.0) return 'Directing Regional Infrastructure Investments';
      if (timeOfDay >= 12.0 && timeOfDay < 13.5) return 'Executive Dining at Waterfront Terrace';
      if (timeOfDay >= 13.5 && timeOfDay < 18.0) return 'Reviewing Global Architecture Contracts';
      return 'Evening Return to Coastal Penthouse';
    }
    if (npc.role === 'tourist') {
      if (timeOfDay >= 8.0 && timeOfDay < 12.0) return 'Photographing Golden Bay Bridge from Lookout';
      if (timeOfDay >= 12.0 && timeOfDay < 14.0) return 'Sampling Local Seafood at Esplanade Market';
      if (timeOfDay >= 14.0 && timeOfDay < 18.5) return 'Exploring Historic Helios Ruins & Shoreline';
      return 'Evening Stroll along Illuminated Pier';
    }
    if (npc.role === 'student') {
      if (timeOfDay >= 8.0 && timeOfDay < 12.0) return 'Gathering Environmental Sensor Data in the Field';
      if (timeOfDay >= 12.0 && timeOfDay < 13.3) return 'Studying Course Notes at Marina Benches';
      if (timeOfDay >= 13.3 && timeOfDay < 17.0) return 'Fieldwork along Coastal Wetlands & Dunes';
      return 'Relaxing with Classmates at Harbor Steps';
    }
    if (npc.role === 'jogger') {
      return timeOfDay < 10.0 || timeOfDay > 16.5 ? 'Coastal Cardio & 10K Marathon Training' : 'Light Recovery Jog along Promenade';
    }
    if (npc.role === 'worker') {
      if (timeOfDay >= 12.0 && timeOfDay < 13.0) return 'Taking Lunch Break with Civil Crew';
      if (timeOfDay >= 7.0 && timeOfDay <= 17.5) return 'Inspecting Municipal Utilities & Road Surfacing';
      return 'Off-Duty — Heading Home to Residential District';
    }
    if (npc.role === 'villager') {
      if (timeOfDay >= 7.5 && timeOfDay < 17.5) return 'Tending Oakhaven Artisan Craft & Bakery Shops';
      if (timeOfDay >= 17.5 && timeOfDay < 21.0) return 'Evening Gathering at Village Square Fountain';
      return 'Walking Home to Alpine Chalet';
    }
    // Commuter
    if (timeOfDay >= 6.5 && timeOfDay < 9.0) return 'Morning Commute to Downtown Office Tower';
    if (timeOfDay >= 9.0 && timeOfDay < 12.0) return 'Working — Structural Modeling & Analysis';
    if (timeOfDay >= 12.0 && timeOfDay < 13.5) return 'Lunch Break at Solis Esplanade';
    if (timeOfDay >= 13.5 && timeOfDay < 17.5) return 'Client Briefings & Civil Design Work';
    if (timeOfDay >= 17.5 && timeOfDay < 20.0) return 'Evening Commute across Golden Bay Walkway';
    return 'Night Stroll along Harbor Promenade';
  }

  // Trigger realistic contextual conversation when player presses [E]
  interactWithNearestNpc() {
    if (!this.nearestNpc || this.nearestNpcDist > 15.0) return null;
    const npc = this.nearestNpc;
    const tod = this.atmosphere.state.timeOfDay;
    const status = this.getNpcActivityStatus(npc, tod);

    // Turn NPC to face player briefly
    npc.pauseTimer = 5.0;

    let lines = [];
    if (npc.role === 'officer') {
      lines = [
        `"Municipal security is on point today. Keep your vehicle speed in check on Coastal Boulevard."`,
        `"Looking out over Golden Bay Bridge—she's clear and open in both directions."`,
        `"If you're flying the twin-jet today, remember ATC tower maintains strict airspace clearance around the coastal runway."`
      ];
    } else if (npc.role === 'barista') {
      lines = [
        `"Fresh double-shot macchiato roasted this morning! The sea breeze here on Coastal Boulevard makes it all worthwhile."`,
        `"A lot of engineers from the Solis Tower stopped by for cold brews today. Need an espresso for the road?"`,
        `"We get our dairy fresh from Oakhaven Alpine Village every morning. Nothing beats local quality."`
      ];
    } else if (npc.role === 'courier') {
      lines = [
        `"Got three rush architectural packages heading up to the Solis Tower penthouse. Traffic's smooth today!"`,
        `"Cycling along the coastal bike lanes is pure joy in this weather. Stay hydrated out there!"`
      ];
    } else if (npc.role === 'medic') {
      lines = [
        `"All clear across the downtown district. Just running routine paramedic checks on our mobile medical kit."`,
        `"Stay safe if you're hiking up the Valkyrie Alpine Trail—temperature drops fast once you reach the summit snowline."`
      ];
    } else if (npc.role === 'surveyor') {
      lines = [
        `"Our laser sensors show the suspension bridge pylons are rock solid, despite the ocean tides."`,
        `"We're cataloging the bedrock integrity near Redstone Canyon next week for the highway extension."`
      ];
    } else if (npc.role === 'sweeper') {
      lines = [
        `"Keeping Solis Metropolis pristine! Hard work, but watching the morning sun illuminate the glass towers makes it a pleasure."`,
        `"Love hearing the waves crash against the seawall while working along the esplanade."`
      ];
    } else if (npc.role === 'executive') {
      lines = [
        `"Aetheria's green infrastructure design is second to none. We're modeling zero-emission transit networks across the bay."`,
        `"Taking a moment away from board meetings to admire the horizon. That suspension span is a marvel of civil engineering."`
      ];
    } else if (npc.role === 'tourist') {
      lines = [
        `"I just arrived from the coastal ferry! The view of the skyscrapers against the distant mountains is breathtaking."`,
        `"Can you recommend the best viewpoint for sunset? Someone told me Cape Stormwatch lighthouse has an incredible panorama."`
      ];
    } else if (npc.role === 'student') {
      lines = [
        `"I'm analyzing the microclimates between the ocean coast and the alpine peaks. The biome diversity in Aetheria is fascinating!"`,
        `"Check out the air quality index on your HUD—it's phenomenal up near Oakhaven Village."`
      ];
    } else if (npc.role === 'hiker') {
      lines = [
        `"The air up here on the ridge is crystal clear today! Have you climbed up to Valkyrie Observatory yet?"`,
        `"Watch your footing on the steeper switchbacks—the views across Golden Bay are worth every step."`,
        `"I started from Oakhaven Village at dawn. Nothing beats trekking through the pines."`
      ];
    } else if (npc.role === 'worker') {
      lines = [
        `"We're running structural checks on the Golden Bay Bridge approaches and the coastal runway."`,
        `"Traffic's flowing smoothly across the suspension span today—stay safe out there!"`,
        `"Just finishing up the civil inspection logs before shift change."`
      ];
    } else if (npc.role === 'villager') {
      lines = [
        `"Welcome to Oakhaven! Fresh mountain timber and warm bread in the square every morning."`,
        `"If you follow the northern highway up past the river valley, it'll take you right to the snowline."`,
        `"Life is peaceful here in the valley compared to the bustle of Solis Metropolis."`
      ];
    } else if (npc.role === 'jogger') {
      lines = [
        `"Doing a 10K loop along the Solis Harbor promenade—great sea breeze today!"`,
        `"Trying to beat my personal best before the afternoon clouds roll in!"`
      ];
    } else {
      if (tod >= 6.5 && tod < 9.5) {
        lines = [
          `"Good morning! Trying to catch the early briefing at the Solis Tower before 9:00."`,
          `"Grabbed an espresso by the harbor—another busy day in Solis Metropolis!"`
        ];
      } else if (tod >= 12.0 && tod < 13.5) {
        lines = [
          `"Stepped out of the office for some fresh ocean air during lunch break."`,
          `"The waterfront plaza is always the best spot in the city at midday."`
        ];
      } else {
        lines = [
          `"Heading back from the downtown financial district—love watching the light hit Golden Bay."`,
          `"Have you driven out to Redstone Canyon or the airport runway yet? The highway connects right through."`
        ];
      }
    }

    const idx = Math.floor(( performance.now() * 0.001 + npc.seed * 10 ) % lines.length);
    this.activeDialogue = {
      speaker: `${npc.name} (${npc.title})`,
      status,
      text: lines[idx]
    };
    this.dialogueTimer = 6.5;
    return this.activeDialogue;
  }

  update(dt, playerPos) {
    const tod = this.atmosphere.state.timeOfDay;
    if (this.dialogueTimer > 0) {
      this.dialogueTimer -= dt;
      if (this.dialogueTimer <= 0) {
        this.activeDialogue = null;
      }
    }

    this.nearestNpc = null;
    this.nearestNpcDist = Infinity;

    // 1. Update Living NPCs
    for (let i = 0; i < this.npcs.length; i++) {
      const npc = this.npcs[i];
      const pos = npc.rig.root.position;
      const distToPlayer = Math.hypot(pos.x - playerPos.x, pos.z - playerPos.z);

      if (distToPlayer < this.nearestNpcDist) {
        this.nearestNpcDist = distToPlayer;
        this.nearestNpc = npc;
      }

      // Distance LOD culling: hide distant NPCs (> 180m) to save CPU/GPU
      if (distToPlayer > 180.0) {
        npc.rig.root.visible = false;
        continue;
      }
      npc.rig.root.visible = true;

      // Schedule-based pauses (e.g., lunch break, admiring overlook, or talking to player)
      let currentSpeed = 0;
      let slopePitch = 0;

      if (npc.pauseTimer > 0) {
        npc.pauseTimer -= dt;
        // Look toward player if close
        if (distToPlayer < 12.0) {
          const angleToPlayer = Math.atan2(pos.x - playerPos.x, pos.z - playerPos.z);
          npc.rig.root.rotation.y = angleToPlayer;
        }
      } else {
        const target = npc.waypoints[npc.currentWp];
        const dx = target.x - pos.x;
        const dz = target.z - pos.z;
        const d = Math.hypot(dx, dz);

        if (d < 1.8) {
          // Reached waypoint — advance to next waypoint and occasionally pause
          if (npc.pingPong) {
            npc.currentWp += npc.direction;
            if (npc.currentWp >= npc.waypoints.length || npc.currentWp < 0) {
              npc.direction *= -1;
              npc.currentWp = clamp(npc.currentWp + npc.direction * 2, 0, npc.waypoints.length - 1);
              npc.pauseTimer = 4.5; // Pause at summit / trailhead overlook!
            }
          } else {
            npc.currentWp = (npc.currentWp + 1) % npc.waypoints.length;
            // Commuters & villagers pause briefly at corners/crosswalks or during lunch
            if ((tod >= 12.0 && tod <= 13.5 && npc.role === 'commuter') || npc.role === 'villager' || npc.role === 'worker') {
              if (((i + npc.currentWp) % 3) === 0) {
                npc.pauseTimer = 3.5 + npc.seed * 4.0;
              }
            }
          }
        } else {
          // Move smoothly toward target waypoint
          currentSpeed = npc.baseSpeed;
          const vx = (dx / d) * currentSpeed;
          const vz = (dz / d) * currentSpeed;

          const prevY = pos.y;
          pos.x += vx * dt;
          pos.z += vz * dt;
          pos.y = Math.max(WATER_LEVEL, this.worldGen.getCollisionHeight(pos.x, pos.z));

          slopePitch = clamp((pos.y - prevY) / Math.max(0.01, currentSpeed * dt), -0.35, 0.35);
          const heading = Math.atan2(-vx, -vz);
          npc.rig.root.rotation.y = heading;
        }
      }

      if (distToPlayer <= 65.0) {
        animateHumanRig(npc.rig, currentSpeed, dt, {
          slopePitch,
          isHiker: npc.role === 'hiker',
          idleGesture: npc.role === 'worker' || npc.role === 'villager' ? 1.0 : 0.3
        });
      }
    }

    // 2. Update Autonomous Highway & Bridge Traffic Vehicles
    for (let i = 0; i < this.vehicles.length; i++) {
      const v = this.vehicles[i];
      const poly = v.polyline;
      const i0 = v.segIdx;
      const i1 = clamp(i0 + v.dir, 0, poly.length - 1);

      if (i0 === i1) {
        v.dir *= -1;
        continue;
      }

      const p0 = poly[i0];
      const p1 = poly[i1];
      const dx = p1[0] - p0[0];
      const dz = p1[1] - p0[1];
      const segLen = Math.max(0.1, Math.hypot(dx, dz));

      const curX = lerp(p0[0], p1[0], v.segT);
      const curZ = lerp(p0[1], p1[1], v.segT);
      const distPlayer = Math.hypot(curX - playerPos.x, curZ - playerPos.z);

      // Distance LOD culling: hide distant traffic vehicles (> 380m) to save draw calls & collision queries
      if (distPlayer > 380.0) {
        v.mesh.visible = false;
        continue;
      }
      v.mesh.visible = true;

      const activeSpeed = distPlayer < 16.0 ? 0.0 : distPlayer < 32.0 ? v.speed * 0.4 : v.speed;
      v.segT += (activeSpeed * dt) / segLen;

      if (v.segT >= 1.0) {
        v.segT -= 1.0;
        v.segIdx = i1;
        if (v.segIdx <= 0 || v.segIdx >= poly.length - 1) {
          v.dir *= -1;
        }
      }

      const dirX = dx / segLen;
      const dirZ = dz / segLen;
      // Right-hand lane perpendicular vector
      const rightX = -dirZ;
      const rightZ = dirX;

      const wx = lerp(p0[0], p1[0], v.segT) + rightX * v.laneOffset;
      const wz = lerp(p0[1], p1[1], v.segT) + rightZ * v.laneOffset;
      const wy = this.worldGen.getCollisionHeight(wx, wz);
      const targetY = wy + 0.04; // +4cm clearance above road asphalt to completely prevent coplanar z-fighting

      if (v.curY === undefined) {
        v.curY = targetY;
        v.curPitch = 0.0;
      }
      v.curY = lerp(v.curY, targetY, dt * 14.0);

      // Pitch vehicle smoothly along road grade
      const hAhead = this.worldGen.getCollisionHeight(wx + dirX * 3.2, wz + dirZ * 3.2);
      const targetPitch = clamp((hAhead - wy) / 3.2, -0.25, 0.25);
      v.curPitch = lerp(v.curPitch, targetPitch, dt * 10.0);

      v.mesh.position.set(wx, v.curY, wz);
      v.mesh.rotation.y = Math.atan2(-dirX, -dirZ);
      v.mesh.rotation.x = v.curPitch;
    }
  }
}
