// ============================================================================
// AETHERIA OPEN WORLD ENGINE - Continent-Scale World, Biome & Infrastructure
// 256 km x 256 km (65,536 km²) Deterministic Geomorphology, Smooth Road
// Grading, Coastal Runway, Hiking Trails, Bridges & Building Colliders
// ============================================================================

import { SeededNoise, smoothstep, smootherstep, lerp, clamp } from './Noise.js';

export const WORLD_SIZE_KM = 256;
export const WORLD_HALF_EXTENT = (WORLD_SIZE_KM * 1000) / 2; // 128,000 meters
export const WATER_LEVEL = 0.0;
export const CITY_GRID_SPACING = 220.0 / 3.0; // 73.333333m -> 3 * spacing = 220.0m (matches Coastal Highway!)

export const BIOMES = {
  OCEAN: { id: 0, name: 'Sapphire Ocean', color: '#0c3b66', badge: '#38bdf8' },
  COASTAL_METROPOLIS: { id: 1, name: 'Solis Coastal Metropolis', color: '#64748b', badge: '#94a3b8' },
  EMERALD_FOREST: { id: 2, name: 'Emerald Timberlands', color: '#1e5932', badge: '#4ade80' },
  ALPINE_PEAKS: { id: 3, name: 'Valkyrie Alpine Peaks', color: '#e2e8f0', badge: '#f8fafc' },
  REDSTONE_CANYON: { id: 4, name: 'Redstone Grand Canyon', color: '#b4532a', badge: '#fb923c' },
  GOLDEN_DUNES: { id: 5, name: 'Helios Golden Dune Sea', color: '#d9a441', badge: '#facc15' },
  VOLCANIC_CALDERA: { id: 6, name: 'Obsidian Volcanic Highlands', color: '#3b2824', badge: '#f87171' },
  TUNDRA_FJORD: { id: 7, name: 'Aegis Sub-Arctic Tundra', color: '#5f7a85', badge: '#7dd3fc' },
  LUSH_PLAINS: { id: 8, name: 'Whispering Emerald Valley', color: '#457b3b', badge: '#a3e635' }
};

// Scenic landmark fast-travel coordinates (positioned right in front of each landmark with an unobstructed view)
export const LANDMARKS = [
  {
    id: 'solis_city',
    name: 'Solis Harbor Metropolis',
    category: 'Metropolis',
    biome: 'Solis Coastal Metropolis',
    x: -73.33,
    z: 220,
    radius: 620,
    baseElevation: 12.5,
    heading: 1.57,
    description: 'Bustling coastal city with offices, cafes, crosswalks, commuters, and waterfront parks.'
  },
  {
    id: 'solis_airport',
    name: 'Solis Coastal Airport & Runway',
    category: 'Aviation Hub',
    biome: 'Solis Coastal Metropolis',
    x: 495,
    z: 220,
    radius: 380,
    baseElevation: 12.5,
    heading: -1.57,
    description: '850-meter paved coastal airstrip, control tower, and hangars for realistic aircraft takeoff and landing.'
  },
  {
    id: 'golden_bridge',
    name: 'Golden Bay Suspension Bridge',
    category: 'Megastructure',
    biome: 'Sapphire Ocean',
    x: -245,
    z: 220,
    radius: 480,
    baseElevation: 13.0,
    heading: 1.57,
    description: 'Monumental 920-meter twin-tower suspension bridge carrying commuter traffic across Golden Bay.'
  },
  {
    id: 'oakhaven_village',
    name: 'Oakhaven Alpine Village',
    category: 'Settlement',
    biome: 'Emerald Timberlands',
    x: 1750,
    z: -1360,
    radius: 340,
    baseElevation: 48.0,
    heading: 0.0,
    description: 'Living mountain village with timber chalets, open-air market square, artisans, and trailheads.'
  },
  {
    id: 'valkyrie_observatory',
    name: 'Valkyrie Summit Observatory',
    category: 'Science Outpost',
    biome: 'Valkyrie Alpine Peaks',
    x: 3600,
    z: -3352,
    radius: 160,
    baseElevation: 1120.0,
    heading: 0.0,
    description: 'High-altitude astronomical research dome and alpine hiker summit camp.'
  },
  {
    id: 'redstone_canyon',
    name: 'Redstone Canyon & Viaduct',
    category: 'Natural Wonder',
    biome: 'Redstone Grand Canyon',
    x: -2600,
    z: -1565,
    radius: 650,
    baseElevation: 154.0,
    heading: 0.0,
    description: 'Terraced crimson sandstone mesas cut by a deep river gorge and spanned by a high arch viaduct.'
  },
  {
    id: 'helios_ruins',
    name: 'Helios Temple Ruins & Oasis',
    category: 'Ancient Ruins',
    biome: 'Helios Golden Dune Sea',
    x: -2950,
    z: 2345,
    radius: 450,
    baseElevation: 28.0,
    heading: 0.0,
    description: 'Classical marble colonnades, obelisks, and archaeological expedition camp by a palm oasis.'
  },
  {
    id: 'stormwatch_lighthouse',
    name: 'Cape Stormwatch Lighthouse',
    category: 'Coastal Beacon',
    biome: 'Sapphire Ocean',
    x: 1550,
    z: 1992,
    radius: 220,
    baseElevation: 46.0,
    heading: 0.0,
    description: 'Dramatic cliffside lighthouse projecting a rotating volumetric beam across the outer ocean.'
  },
  {
    id: 'obsidian_caldera',
    name: 'Mount Ignis Volcanic Caldera',
    category: 'Volcanic Wonder',
    biome: 'Obsidian Volcanic Highlands',
    x: 5200,
    z: 4215,
    radius: 900,
    baseElevation: 760.0,
    heading: 0.0,
    description: 'Towering basalt stratovolcano with a sunken magma crater and glowing obsidian fissures.'
  },
  {
    id: 'titan_divide',
    name: 'Titan Continental Divide',
    category: 'Continent Range',
    biome: 'Valkyrie Alpine Peaks',
    x: 24000,
    z: -32000,
    radius: 2500,
    baseElevation: 1650.0,
    heading: 2.1,
    description: 'Colossal continental backbone range in the far northern sector of the 65,536 km² map.'
  },
  {
    id: 'spacex_starbase',
    name: 'SpaceX Starbase & Orbital Launch Complex',
    category: 'Spaceport',
    biome: 'Sapphire Ocean',
    x: 1050,
    z: 880,
    radius: 420,
    baseElevation: 13.5,
    heading: 0.0,
    description: 'Orbital Launch Mount, 145m Mechazilla Chopstick Tower, Starship Full Stack, High Bays, and Cryogenic Tank Farm.'
  },
  {
    id: 'space_leo',
    name: 'Low Earth Orbit (LEO) & Space Station',
    category: 'Outer Space',
    biome: 'Outer Space',
    x: 800,
    z: 1200,
    radius: 500,
    baseElevation: 8500.0,
    heading: 0.0,
    description: 'Orbital spaceflight overlooking continent Aetheria, with the International Space Station and Starlink satellites.'
  },
  {
    id: 'space_moon',
    name: 'The Moon & Artemis Lunar Base',
    category: 'Celestial Body',
    biome: 'Lunar Highlands',
    x: 14000,
    z: -12000,
    radius: 1800,
    baseElevation: 16200.0,
    heading: 0.0,
    description: 'Cratered lunar surface, Sea of Tranquility, and SpaceX Lunar Starbase habitat outpost.'
  },
  {
    id: 'space_mars',
    name: 'Planet Mars & Mars Base Alpha',
    category: 'Celestial Body',
    biome: 'Martian Basaltic Plains',
    x: -22000,
    z: 24000,
    radius: 2200,
    baseElevation: 22400.0,
    heading: 0.0,
    description: 'Rust-red Martian terrain, Valles Marineris canyon, and the historic SpaceX Mars Base Alpha colony.'
  }
];

export const BRIDGES = [
  {
    id: 'golden_bay_bridge',
    name: 'Golden Bay Suspension Bridge',
    x1: -260,
    z1: 220,
    x2: -1180,
    z2: 220,
    deckHeight: 13.0,
    archHeight: 11.0,
    width: 18.0,
    towerHeight: 112.0,
    type: 'suspension'
  },
  {
    id: 'redstone_viaduct',
    name: 'Redstone Canyon Arch Viaduct',
    x1: -2600,
    z1: -1580,
    x2: -2600,
    z2: -2120,
    deckHeight: 154.0,
    archHeight: 4.5,
    width: 15.0,
    towerHeight: 110.0,
    type: 'viaduct'
  }
];

// Hiking trails for mountain backpackers & hikers
export const HIKING_TRAILS = [
  // Trail 1: Oakhaven Village -> Alpine Pine Ridge -> Valkyrie Foothills Overlook
  [
    [1820, -1460],
    [1940, -1620],
    [2120, -1840],
    [2340, -2100],
    [2580, -2380],
    [2820, -2680],
    [3100, -2980],
    [3450, -3280]
  ],
  // Trail 2: Cape Stormwatch Coastal Cliff Trail
  [
    [1180, 1380],
    [1310, 1560],
    [1440, 1740],
    [1540, 1910]
  ],
  // Trail 3: Helios Oasis & Ruins Archaeological Path
  [
    [-2740, 2140],
    [-2820, 2210],
    [-2910, 2275],
    [-2980, 2320]
  ]
];

export class WorldGenerator {
  constructor(seed = 20261017) {
    this.noise = new SeededNoise(seed);
    this.roadCellSize = 100.0;
    this.roadGrid = new Map();
    this.roadPolylines = [];
    this.structureColliders = [];
    this._buildHighwayNetwork();
  }

  registerCollider(x, z, hw, hd, topY = 200.0) {
    this.structureColliders.push({ x, z, hw, hd, topY });
  }

  // Push horizontal position (x, z) out of any solid building AABB
  resolveHorizontalCollision(pos, radius = 0.65) {
    for (let i = 0; i < this.structureColliders.length; i++) {
      const c = this.structureColliders[i];
      if (pos.y > c.topY) continue;
      const dx = pos.x - c.x;
      const dz = pos.z - c.z;
      const ex = c.hw + radius;
      const ez = c.hd + radius;
      if (Math.abs(dx) < ex && Math.abs(dz) < ez) {
        const penX = ex - Math.abs(dx);
        const penZ = ez - Math.abs(dz);
        if (penX < penZ) {
          pos.x += dx >= 0 ? penX : -penX;
        } else {
          pos.z += dz >= 0 ? penZ : -penZ;
        }
      }
    }
  }

  _buildHighwayNetwork() {
    const routes = [
      // Route 1: Solis City Boulevard -> Coastal Airport -> Cape Stormwatch Lighthouse
      [
        [-260, 220],
        [0, 220],
        [380, 220],
        [720, 580],
        [1150, 1280],
        [1420, 1680],
        [1550, 1920]
      ],
      // Route 2: Solis City Central Avenue -> Silvermist River Valley -> Oakhaven Village
      [
        [0, 220],
        [0, -146.67],
        [240, -360],
        [580, -620],
        [980, -920],
        [1380, -1180],
        [1750, -1400]
      ],
      // Route 3: Solis City -> Golden Bay Bridge -> Western Crossroads -> Redstone Canyon Viaduct
      [
        [0, 220],
        [-260, 220],
        [-720, 220],
        [-1180, 220],
        [-1680, 40],
        [-2150, -480],
        [-2480, -1080],
        [-2600, -1580],
        [-2600, -1850],
        [-2600, -2120],
        [-2550, -2550]
      ],
      // Route 4: Western Bridge Approach -> Southern Desert Highway -> Helios Temple Ruins
      [
        [-1420, 160],
        [-1850, 620],
        [-2280, 1250],
        [-2640, 1780],
        [-2920, 2260]
      ],
      // Route 5: Oakhaven Village -> Eastern Foothills Pass -> Mount Ignis Caldera Overlook
      [
        [1750, -1400],
        [2350, -950],
        [2950, -250],
        [3650, 750],
        [4350, 1950],
        [4850, 3150]
      ],
      // Route 6: Coastal Highway Spur -> SpaceX Starbase Main Gate & Launch Pad
      [
        [720, 580],
        [880, 720],
        [1050, 880]
      ]
    ];

    for (const controlPoints of routes) {
      const sampled = this._sampleCatmullRom(controlPoints, 32);
      this.roadPolylines.push(sampled);

      for (let i = 0; i < sampled.length - 1; i++) {
        const p0 = sampled[i];
        const p1 = sampled[i + 1];
        this._insertRoadSegment(p0[0], p0[1], p1[0], p1[1]);
      }
    }
  }

  _sampleCatmullRom(pts, subdivisionsPerSegment = 24) {
    const result = [];
    const n = pts.length;
    for (let i = 0; i < n - 1; i++) {
      const p0 = pts[Math.max(0, i - 1)];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[Math.min(n - 1, i + 2)];

      // Use straight linear interpolation when two control points are colinear along X or Z (e.g., bridges & boulevards)
      const isAxisAligned = Math.abs(p1[0] - p2[0]) < 0.01 || Math.abs(p1[1] - p2[1]) < 0.01;

      for (let j = 0; j < subdivisionsPerSegment; j++) {
        const t = j / subdivisionsPerSegment;
        if (isAxisAligned) {
          result.push([lerp(p1[0], p2[0], t), lerp(p1[1], p2[1], t)]);
        } else {
          const t2 = t * t;
          const t3 = t2 * t;
          const x =
            0.5 *
            (2 * p1[0] +
              (-p0[0] + p2[0]) * t +
              (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 +
              (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3);
          const z =
            0.5 *
            (2 * p1[1] +
              (-p0[1] + p2[1]) * t +
              (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 +
              (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3);
          result.push([x, z]);
        }
      }
    }
    result.push(pts[n - 1]);
    return result;
  }

  _insertRoadSegment(x0, z0, x1, z1) {
    const pad = 42.0;
    const minX = Math.floor((Math.min(x0, x1) - pad) / this.roadCellSize);
    const maxX = Math.floor((Math.max(x0, x1) + pad) / this.roadCellSize);
    const minZ = Math.floor((Math.min(z0, z1) - pad) / this.roadCellSize);
    const maxZ = Math.floor((Math.max(z0, z1) + pad) / this.roadCellSize);

    const seg = { x0, z0, x1, z1 };
    for (let cx = minX; cx <= maxX; cx++) {
      for (let cz = minZ; cz <= maxZ; cz++) {
        const key = `${cx},${cz}`;
        let list = this.roadGrid.get(key);
        if (!list) {
          list = [];
          this.roadGrid.set(key, list);
        }
        list.push(seg);
      }
    }
  }

  // Check if (x, z) is on Solis Coastal Airport Runway (x: 420..1120, z: 185..255)
  getRunwayInfo(x, z) {
    if (x >= 380 && x <= 1160 && z >= 175 && z <= 265) {
      const dx = Math.max(0, Math.abs(x - 770) - 340);
      const dz = Math.abs(z - 220);
      const dist = Math.hypot(dx, dz);
      if (dist < 28.0) {
        return {
          onRunway: dz < 16.0 && dx < 8.0,
          runwayMask: clamp(1.0 - dz / 18.0, 0.0, 1.0) * (1.0 - smoothstep(335, 365, Math.abs(x - 770)))
        };
      }
    }
    return { onRunway: false, runwayMask: 0.0 };
  }

  // Fast O(1) distance to nearest highway segment or city street grid
  getRoadInfo(x, z) {
    // 0. Check Airport Runway
    const rwy = this.getRunwayInfo(x, z);
    if (rwy.runwayMask > 0.05) {
      return {
        distance: (1.0 - rwy.runwayMask) * 9.0,
        isRoad: true,
        roadMask: rwy.runwayMask,
        closestX: x,
        closestZ: 220,
        isCityStreet: true
      };
    }

    // 1. Check Solis Metropolis street grid around (0, 0) using CITY_GRID_SPACING (73.3333m)
    const cityDist = Math.hypot(x, z);
    let cityRoadMask = 0.0;
    let dGrid = 9999;
    if (cityDist < 420 && x > -265) {
      const rx = Math.abs(x - Math.round(x / CITY_GRID_SPACING) * CITY_GRID_SPACING);
      const rz = Math.abs(z - Math.round(z / CITY_GRID_SPACING) * CITY_GRID_SPACING);
      dGrid = Math.min(rx, rz);
      const fade = 1.0 - smoothstep(340, 420, cityDist);
      if (dGrid < 9.0) {
        cityRoadMask = clamp(1.0 - dGrid / 9.0, 0.0, 1.0) * fade;
      }
    }

    // 2. Check spatial hash for inter-regional highways
    const cx = Math.floor(x / this.roadCellSize);
    const cz = Math.floor(z / this.roadCellSize);
    const segs = this.roadGrid.get(`${cx},${cz}`);
    if (!segs) {
      return {
        distance: dGrid,
        isRoad: cityRoadMask > 0.2,
        roadMask: cityRoadMask,
        closestX: x,
        closestZ: z,
        isCityStreet: cityRoadMask > 0.01
      };
    }

    let minDistSq = 99999999;
    let closestX = x;
    let closestZ = z;

    for (let i = 0; i < segs.length; i++) {
      const s = segs[i];
      const vx = s.x1 - s.x0;
      const vz = s.z1 - s.z0;
      const lenSq = vx * vx + vz * vz;
      let t = 0;
      if (lenSq > 0.0001) {
        t = ((x - s.x0) * vx + (z - s.z0) * vz) / lenSq;
        t = Math.max(0.0, Math.min(1.0, t));
      }
      const px = s.x0 + t * vx;
      const pz = s.z0 + t * vz;
      const dx = x - px;
      const dz = z - pz;
      const dSq = dx * dx + dz * dz;
      if (dSq < minDistSq) {
        minDistSq = dSq;
        closestX = px;
        closestZ = pz;
      }
    }

    const dist = Math.sqrt(minDistSq);
    const hwyMask = clamp(1.0 - dist / 9.0, 0.0, 1.0);
    const bestMask = Math.max(cityRoadMask, hwyMask);

    return {
      distance: Math.min(dist, dGrid),
      isRoad: bestMask > 0.2,
      roadMask: bestMask,
      closestX,
      closestZ,
      isCityStreet: cityRoadMask >= hwyMask && cityRoadMask > 0.01
    };
  }

  // Check if (x, z) is on a monumental bridge deck
  getBridgeInfo(x, z) {
    for (let i = 0; i < BRIDGES.length; i++) {
      const b = BRIDGES[i];
      const vx = b.x2 - b.x1;
      const vz = b.z2 - b.z1;
      const lenSq = vx * vx + vz * vz;
      const t = ((x - b.x1) * vx + (z - b.z1) * vz) / lenSq;
      if (t >= -0.02 && t <= 1.02) {
        const tc = clamp(t, 0, 1);
        const px = b.x1 + tc * vx;
        const pz = b.z1 + tc * vz;
        const lateralDist = Math.hypot(x - px, z - pz);
        if (lateralDist <= b.width * 0.6) {
          const arch = Math.sin(clamp(t, 0, 1) * Math.PI) * (b.archHeight || 4.0);
          return {
            onBridge: true,
            bridge: b,
            deckY: b.deckHeight + arch,
            lateralDist,
            t
          };
        }
      }
    }
    return { onBridge: false, deckY: -9999 };
  }

  _getRawElevationAndBiomes(x, z) {
    const n = this.noise;

    // 1. Macro Continental & Climate Fields (spanning 256 km x 256 km)
    const macroContinent = n.warpedFbm2D(x * 0.000045, z * 0.000045, 4, 0.5);
    const regionalTerrain = n.fbm2D(x * 0.00028, z * 0.00028, 4);
    const detailNoise = n.fbm2D(x * 0.0018, z * 0.0018, 4);
    const microNoise = n.noise2D(x * 0.009, z * 0.009);

    const latTemp = clamp(0.55 + (z / 18000.0) * 0.35 + n.fbm2D(x * 0.00012, z * 0.00012, 2) * 0.25, 0.0, 1.0);
    const moisture = clamp(0.5 + (x / 9000.0) * 0.32 + n.fbm2D(x * 0.00018 + 7.1, z * 0.00018 - 3.4, 3) * 0.35, 0.0, 1.0);

    // 2. Base Eroded Continental Height
    let height = 26.0 + macroContinent * 220.0 + regionalTerrain * 78.0 + detailNoise * 13.0 + microNoise * 1.1;

    // 3. Southern Sapphire Ocean Basin
    const oceanOpen = smoothstep(420.0, 1750.0, z - Math.abs(x - 150) * 0.38);
    height = lerp(height, -48.0 + regionalTerrain * 22.0, oceanOpen * 0.88);

    // 4. Cape Stormwatch Promontory (x: 1550, z: 1950)
    const capeDist = Math.hypot(x - 1550, z - 1950);
    if (capeDist < 950) {
      const capeMask = 1.0 - smoothstep(110.0, 850.0, capeDist);
      const cliffTop = 46.0 + detailNoise * 4.0 * (1.0 - smoothstep(0, 140, capeDist));
      height = lerp(height, cliffTop, capeMask);
    }

    // 5. Valkyrie Alpine Cordillera (Majestic alpine peaks in the far north-east)
    const alpineZone = smoothstep(1600.0, 3800.0, x - z * 0.85 - 1000.0) * smoothstep(-1200.0, -3400.0, z);
    const outerCordillera = Math.max(
      0.0,
      smoothstep(0.28, 0.68, macroContinent) * smoothstep(3800.0, 11000.0, Math.hypot(x, z))
    );
    const mountainWeight = Math.min(1.0, alpineZone + outerCordillera * 0.85);

    if (mountainWeight > 0.001) {
      const ridged = n.ridged2D(x * 0.00055, z * 0.00055, 5);
      const sharpCrags = n.ridged2D(x * 0.0024, z * 0.0024, 3);
      const alpineHeight = 160.0 + ridged * 920.0 + sharpCrags * 145.0;
      height = lerp(height, Math.max(height, alpineHeight), mountainWeight);
    }

    // Valkyrie Peak Crown & Summit Observatory Plateau (x: 3600, z: -3400)
    const valkyrieDist = Math.hypot(x - 3600, z + 3400);
    if (valkyrieDist < 1600) {
      const peakCone = (1.0 - smoothstep(95.0, 1500.0, valkyrieDist)) * 520.0;
      height += peakCone;
      const summitFlat = 1.0 - smootherstep(55.0, 135.0, valkyrieDist);
      height = lerp(height, 1120.0, summitFlat);
    }

    // 6. Redstone Grand Canyon & Terraced Mesas + Arch Viaduct Abutments
    const canyonZone = smoothstep(-900.0, -2200.0, x) * smoothstep(-200.0, -1400.0, z);
    if (canyonZone > 0.001) {
      const rawMesa = 135.0 + n.warpedFbm2D(x * 0.0007, z * 0.0007, 4, 0.4) * 140.0;
      const stepSize = 24.0;
      const stepped = Math.floor(rawMesa / stepSize) * stepSize + smoothstep(0.65, 0.95, (rawMesa % stepSize) / stepSize) * stepSize;
      let mesaHeight = lerp(rawMesa, stepped, 0.72);

      // Grade rim near Redstone Viaduct abutments (-2600, -1580) & (-2600, -2120) to 153.5m
      const rimDist = Math.min(Math.hypot(x + 2600, z + 1580), Math.hypot(x + 2600, z + 2120));
      if (rimDist < 240) {
        mesaHeight = lerp(mesaHeight, 153.5, 1.0 - smootherstep(45, 220, rimDist));
      }

      const gorgeCenterZ = -1850.0 + Math.sin((x + 2600) * 0.0016) * 180.0;
      const gorgeDist = Math.abs(z - gorgeCenterZ);
      const gorgeCarve = (1.0 - smootherstep(45.0, 240.0, gorgeDist));
      mesaHeight = lerp(mesaHeight, 32.0, gorgeCarve);

      height = lerp(height, mesaHeight, canyonZone);
    }

    // 7. Helios Golden Dune Sea & Emerald Oasis
    const desertZone = smoothstep(-1000.0, -2300.0, x) * smoothstep(300.0, 1500.0, z);
    if (desertZone > 0.001) {
      const dunePhase = x * 0.018 + z * 0.009 + n.fbm2D(x * 0.003, z * 0.003, 2) * 4.2;
      const duneWave = Math.pow(Math.abs(Math.sin(dunePhase)), 0.65) * 26.0;
      let desertHeight = 22.0 + regionalTerrain * 35.0 + duneWave;

      const oasisDist = Math.hypot(x + 2780, z - 2180);
      if (oasisDist < 260) {
        const oasisCarve = (1.0 - smootherstep(55.0, 220.0, oasisDist)) * 34.0;
        desertHeight -= oasisCarve;
      }

      const ruinsDist = Math.hypot(x + 2950, z - 2300);
      if (ruinsDist < 240) {
        const ruinsFlat = 1.0 - smootherstep(95.0, 210.0, ruinsDist);
        desertHeight = lerp(desertHeight, 28.0, ruinsFlat);
      }

      height = lerp(height, desertHeight, desertZone);
    }

    // 8. Mount Ignis Volcanic Caldera
    const volcanoDist = Math.hypot(x - 5200, z - 3800);
    let volcanicWeight = 0.0;
    if (volcanoDist < 2600) {
      volcanicWeight = 1.0 - smoothstep(400.0, 2500.0, volcanoDist);
      const cone = (1.0 - smoothstep(260.0, 2400.0, volcanoDist)) * 840.0;
      const craterDrop = (1.0 - smootherstep(180.0, 440.0, volcanoDist)) * 420.0;
      const ruggedLava = n.ridged2D(x * 0.0035, z * 0.0035, 3) * 45.0 * volcanicWeight;
      height = height * (1.0 - volcanicWeight * 0.6) + cone - craterDrop + ruggedLava;
    }

    // 9. Silvermist River Valley Carving
    if (x > -400 && x < 3400 && z < 400 && z > -3200) {
      const riverTargetZ = -0.78 * x - 180.0 + Math.sin(x * 0.0025) * 145.0;
      const riverDist = Math.abs(z - riverTargetZ);
      if (riverDist < 280) {
        const valleyMask = 1.0 - smootherstep(28.0, 260.0, riverDist);
        const channelMask = 1.0 - smootherstep(12.0, 42.0, riverDist);
        const reachFade = smoothstep(-200, 300, x) * (1.0 - smoothstep(2600, 3200, x));
        height = lerp(height, Math.min(height, 18.0 + (x / 2500.0) * 35.0), valleyMask * reachFade * 0.65);
        height -= channelMask * reachFade * 24.0;
      }
    }

    // 10. Flatten Solis Metropolis & Coastal Airport Terrace (x: -260..1220, z: -340..340)
    const terraceDx = x < -255 ? (-255 - x) : x > 1220 ? (x - 1220) : 0;
    const terraceDz = Math.max(0, Math.abs(z) - 310);
    const terraceDist = Math.hypot(terraceDx, terraceDz);
    if (terraceDist < 260) {
      const terraceWeight = 1.0 - smootherstep(15.0, 240.0, terraceDist);
      height = lerp(height, 12.5, terraceWeight);
    }

    // 10b. Flatten SpaceX Starbase Spaceport Terrace (x: 1050, z: 880, radius: 280)
    const starbaseDist = Math.hypot(x - 1050, z - 880);
    if (starbaseDist < 290) {
      const sbWeight = 1.0 - smootherstep(75.0, 275.0, starbaseDist);
      height = lerp(height, 13.5, sbWeight);
    }

    // Urban concrete paver mask only in downtown Solis Metropolis (x: -255..295, z: -295..295)
    const urbanDx = x < -255 ? (-255 - x) : x > 295 ? (x - 295) : 0;
    const urbanDz = Math.max(0, Math.abs(z) - 295);
    const urbanDist = Math.hypot(urbanDx, urbanDz);
    let cityWeight = 0.0;
    if (urbanDist < 90) {
      cityWeight = 1.0 - smootherstep(10.0, 85.0, urbanDist);
    }

    // 11. Carve Deep Golden Bay Ocean Strait & Inlet under Golden Bay Suspension Bridge
    if (x > -1550 && x < -180 && z > -650 && z < 1850) {
      const bridgePin = 1.0 - Math.exp(-Math.pow((z - 220.0) / 140.0, 2.0));
      const coastWarp = (regionalTerrain * 190.0 + detailNoise * 65.0) * bridgePin;
      const flareSouth = Math.max(0.0, (z - 260.0) * 0.35);
      const eastEdge = -258.0 + coastWarp * 0.45 + flareSouth * 0.35;
      const westEdge = -1178.0 - coastWarp - flareSouth * 0.55;

      const eastShore = smoothstep(eastEdge, eastEdge - 52.0, x);
      const westShore = 1.0 - smoothstep(westEdge + 52.0, westEdge, x);
      const northHead = -460.0 + regionalTerrain * 180.0;
      const northFade = smoothstep(northHead, northHead + 280.0, z);
      const straitMask = eastShore * westShore * northFade;
      height = lerp(height, -28.0 + detailNoise * 4.0, straitMask);
    }

    // Western Bridge Abutment Terrace at (-1180, 220) so bridge meets Western Highway at 12.8m
    const westAbutment = Math.hypot(x + 1220, z - 220);
    if (westAbutment < 240) {
      height = lerp(height, 12.8, 1.0 - smootherstep(45, 220, westAbutment));
    }

    // 12. Flatten Oakhaven Alpine Village Terrace (x: 1750, z: -1400)
    const villageDist = Math.hypot(x - 1750, z + 1400);
    if (villageDist < 360) {
      const villageFlat = 1.0 - smootherstep(160.0, 340.0, villageDist);
      height = lerp(height, 48.0, villageFlat);
    }

    // 13. Engineered Highway Mountain Pass Corridor Carving
    // Ensures highways naturally follow gentle valley passes without jagged cliff step discontinuities
    const road = this.getRoadInfo(x, z);
    if (road.distance < 85.0 && !road.isCityStreet) {
      const bridge = this.getBridgeInfo(x, z);
      if (!bridge.onBridge) {
        const passCut = 1.0 - smootherstep(8.5, 75.0, road.distance);
        const distFromHub = Math.hypot(x, z);
        const engineeredPassH = 12.5 + clamp((distFromHub / 2400.0) * 38.0, 0.0, 52.0);
        if (height > engineeredPassH) {
          height = lerp(height, engineeredPassH, passCut * passCut);
        }
      }
    }

    let biome = BIOMES.LUSH_PLAINS;
    if (height < WATER_LEVEL + 1.8) {
      biome = BIOMES.OCEAN;
    } else if (cityWeight > 0.35) {
      biome = BIOMES.COASTAL_METROPOLIS;
    } else if (volcanicWeight > 0.35) {
      biome = BIOMES.VOLCANIC_CALDERA;
    } else if (canyonZone > 0.45) {
      biome = BIOMES.REDSTONE_CANYON;
    } else if (desertZone > 0.45 || (latTemp > 0.68 && moisture < 0.35)) {
      biome = BIOMES.GOLDEN_DUNES;
    } else if (height > 290.0 || mountainWeight > 0.55) {
      biome = BIOMES.ALPINE_PEAKS;
    } else if (latTemp < 0.28) {
      biome = BIOMES.TUNDRA_FJORD;
    } else if (moisture > 0.46) {
      biome = BIOMES.EMERALD_FOREST;
    }

    return {
      height,
      biome,
      temperature: latTemp,
      moisture,
      canyonZone,
      desertZone,
      volcanicWeight,
      mountainWeight,
      cityWeight
    };
  }

  getTerrainData(x, z) {
    const raw = this._getRawElevationAndBiomes(x, z);
    let height = raw.height;

    const road = this.getRoadInfo(x, z);
    if (road.distance < 24.0 && !road.isCityStreet) {
      const bridgeInfo = this.getBridgeInfo(x, z);
      if (!bridgeInfo.onBridge) {
        const centerRaw = this._getRawElevationAndBiomes(road.closestX, road.closestZ).height;
        const targetRoadY = Math.max(WATER_LEVEL + 3.0, centerRaw);
        // Smoothly flatten road crown (0..7.5m flat road deck, 7.5..20m smooth natural shoulder transition)
        const gradeBlend = (1.0 - smootherstep(7.5, 20.0, road.distance)) * (1.0 - raw.cityWeight);
        height = lerp(height, targetRoadY, gradeBlend);
      }
    }

    return {
      height,
      biome: raw.biome,
      temperature: raw.temperature,
      moisture: raw.moisture,
      canyonZone: raw.canyonZone,
      desertZone: raw.desertZone,
      volcanicWeight: raw.volcanicWeight,
      mountainWeight: raw.mountainWeight,
      cityWeight: raw.cityWeight,
      roadMask: road.roadMask,
      isRoad: road.isRoad
    };
  }

  getHeight(x, z) {
    return this.getTerrainData(x, z).height;
  }

  getCollisionHeight(x, z) {
    const bridge = this.getBridgeInfo(x, z);
    let terrainY = this.getHeight(x, z);

    // Smooth 0.28m raised concrete sidewalk curb ramp when traversing Solis Metropolis blocks
    if (x > -245 && x < 290 && z > -280 && z < 285 && Math.hypot(x, z) < 350) {
      const rx = Math.abs(x - Math.round(x / CITY_GRID_SPACING) * CITY_GRID_SPACING);
      const rz = Math.abs(z - Math.round(z / CITY_GRID_SPACING) * CITY_GRID_SPACING);
      if (rx > 9.8 && rz > 9.8) {
        const curbX = smoothstep(9.8, 10.8, rx);
        const curbZ = smoothstep(9.8, 10.8, rz);
        terrainY += 0.28 * curbX * curbZ;
      }
    }

    if (bridge.onBridge && bridge.deckY > terrainY) {
      return bridge.deckY;
    }
    return terrainY;
  }

  getNormalAndSlope(x, z, eps = 1.5) {
    const hL = this.getCollisionHeight(x - eps, z);
    const hR = this.getCollisionHeight(x + eps, z);
    const hD = this.getCollisionHeight(x, z - eps);
    const hU = this.getCollisionHeight(x, z + eps);

    const dx = (hL - hR) / (2.0 * eps);
    const dz = (hD - hU) / (2.0 * eps);
    const dy = 1.0;
    const len = Math.hypot(dx, dy, dz);

    const nx = dx / len;
    const ny = dy / len;
    const nz = dz / len;
    const slopeDeg = Math.acos(clamp(ny, -1.0, 1.0)) * (180.0 / Math.PI);

    return { nx, ny, nz, slopeDeg };
  }
}
