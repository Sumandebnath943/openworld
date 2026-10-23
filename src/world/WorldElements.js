// ============================================================================
// AETHERIA OPEN WORLD ENGINE - Realistic Cities, Airport, Bridges & Flora
// Solis Metropolis (Sidewalks, Streetlights, Traffic Signals, Cafes, Towers),
// Solis Coastal Airport & ATC Tower, Golden Bay Bridge, Oakhaven Village,
// Stormwatch Lighthouse, Helios Ruins, Observatory & Instanced Forests
// ============================================================================

import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { BRIDGES, WATER_LEVEL, CITY_GRID_SPACING } from './WorldGenerator.js';
import { smoothstep } from './Noise.js';
import { SpaceXStarbase } from './SpaceXStarbase.js';
import { SpaceExploration } from './SpaceExploration.js';

export class WorldElements {
  constructor(scene, worldGen, atmosphere) {
    this.scene = scene;
    this.worldGen = worldGen;
    this.atmosphere = atmosphere;

    this.landmarksGroup = new THREE.Group();
    this.scene.add(this.landmarksGroup);

    this.foliageGroup = new THREE.Group();
    this.scene.add(this.foliageGroup);

    this.densityMultiplier = 1.0;
    this.totalInstancesRendered = 0;
    this.buildingColliders = [];
    this.cityTowerMaterials = [];
    this.aviationBeacons = [];
    this.beaconTimer = 0;

    this._createProceduralTextures();
    this._buildBridges();
    this._buildSolisMetropolis();
    this._buildSolisAirport();
    this._buildOakhavenVillage();
    this._buildStormwatchLighthouse();
    this._buildHeliosRuins();
    this._buildValkyrieObservatory();
    this.starbase = new SpaceXStarbase(this.landmarksGroup, this.worldGen);
    this.spaceExploration = new SpaceExploration(this.landmarksGroup, this.atmosphere);
    this._initStreamingFoliagePools();

    this.lastFoliageCenter = new THREE.Vector2(999999, 999999);
  }

  _createProceduralTextures() {
    const setupTex = (canvas) => {
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 16;
      return tex;
    };

    // 1. High-Tech Glass Curtain Wall Facade (1024x1024) with Floor Spandrels & Venetian Blinds
    const cGlass = document.createElement('canvas');
    cGlass.width = 1024; cGlass.height = 1024;
    const ctxG = cGlass.getContext('2d');
    const cGlassEm = document.createElement('canvas');
    cGlassEm.width = 1024; cGlassEm.height = 1024;
    const ctxGEm = cGlassEm.getContext('2d');

    ctxG.fillStyle = '#09101d';
    ctxG.fillRect(0, 0, 1024, 1024);
    ctxGEm.fillStyle = '#000000';
    ctxGEm.fillRect(0, 0, 1024, 1024);

    const colsG = 32;
    const rowsG = 48;
    const wG = 1024 / colsG;
    const hG = 1024 / rowsG;

    for (let r = 0; r < rowsG; r++) {
      ctxG.fillStyle = '#1e293b';
      ctxG.fillRect(0, r * hG, 1024, 4); // Steel floor slab

      for (let c = 0; c < colsG; c++) {
        // Vertical mullion
        ctxG.fillStyle = '#334155';
        ctxG.fillRect(c * wG, r * hG, 3, hG);

        const rand = Math.sin(r * 23.7 + c * 71.3) * 0.5 + 0.5;
        const winX = c * wG + 3;
        const winY = r * hG + 4;
        const winW = wG - 4;
        const winH = hG - 5;

        if (rand > 0.42) {
          const warm = rand > 0.72;
          const litColor = warm ? '#fef3c7' : '#93c5fd';
          const emColor = warm ? '#ffd166' : '#60a5fa';

          ctxG.fillStyle = litColor;
          ctxG.fillRect(winX, winY, winW, winH);
          ctxGEm.fillStyle = emColor;
          ctxGEm.fillRect(winX, winY, winW, winH);

          // Subtle horizontal blinds slats
          ctxG.fillStyle = 'rgba(15, 23, 42, 0.35)';
          for (let b = winY + 3; b < winY + winH; b += 4) {
            ctxG.fillRect(winX, b, winW, 1.2);
          }
        } else {
          ctxG.fillStyle = '#0b1626';
          ctxG.fillRect(winX, winY, winW, winH);
        }
      }
    }

    this.texGlass = setupTex(cGlass);
    this.texGlassEmissive = setupTex(cGlassEm);
    this.skyscraperTexture = this.texGlass; // Backwards-compatible reference

    // 2. Prestige Bronze Financial Tower Facade (1024x1024)
    const cBronze = document.createElement('canvas');
    cBronze.width = 1024; cBronze.height = 1024;
    const ctxB = cBronze.getContext('2d');
    const cBronzeEm = document.createElement('canvas');
    cBronzeEm.width = 1024; cBronzeEm.height = 1024;
    const ctxBEm = cBronzeEm.getContext('2d');

    ctxB.fillStyle = '#1c1510';
    ctxB.fillRect(0, 0, 1024, 1024);
    ctxBEm.fillStyle = '#000000';
    ctxBEm.fillRect(0, 0, 1024, 1024);

    const colsB = 24;
    const rowsB = 40;
    const wB = 1024 / colsB;
    const hB = 1024 / rowsB;

    for (let r = 0; r < rowsB; r++) {
      ctxB.fillStyle = '#3b2c20';
      ctxB.fillRect(0, r * hB, 1024, 6);

      for (let c = 0; c < colsB; c++) {
        ctxB.fillStyle = '#2d2016';
        ctxB.fillRect(c * wB, r * hB, 4, hB);

        const rand = Math.sin(r * 17.1 + c * 59.9) * 0.5 + 0.5;
        const winX = c * wB + 4;
        const winY = r * hB + 6;
        const winW = wB - 6;
        const winH = hB - 7;

        if (rand > 0.48) {
          ctxB.fillStyle = '#fed7aa';
          ctxB.fillRect(winX, winY, winW, winH);
          ctxBEm.fillStyle = '#f97316';
          ctxBEm.fillRect(winX, winY, winW, winH);
        } else {
          ctxB.fillStyle = '#120d09';
          ctxB.fillRect(winX, winY, winW, winH);
        }
      }
    }

    this.texBronze = setupTex(cBronze);
    this.texBronzeEmissive = setupTex(cBronzeEm);

    // 3. Travertine / Limestone Art-Deco Facade (1024x1024)
    const cStone = document.createElement('canvas');
    cStone.width = 1024; cStone.height = 1024;
    const ctxS = cStone.getContext('2d');
    const cStoneEm = document.createElement('canvas');
    cStoneEm.width = 1024; cStoneEm.height = 1024;
    const ctxSEm = cStoneEm.getContext('2d');

    ctxS.fillStyle = '#78716c';
    ctxS.fillRect(0, 0, 1024, 1024);
    ctxSEm.fillStyle = '#000000';
    ctxSEm.fillRect(0, 0, 1024, 1024);

    const colsS = 20;
    const rowsS = 36;
    const wS = 1024 / colsS;
    const hS = 1024 / rowsS;

    for (let r = 0; r < rowsS; r++) {
      ctxS.fillStyle = '#57534e';
      ctxS.fillRect(0, r * hS, 1024, 7);

      for (let c = 0; c < colsS; c++) {
        // Fluted vertical pilaster
        ctxS.fillStyle = '#44403c';
        ctxS.fillRect(c * wS, r * hS, 6, hS);

        const rand = Math.sin(r * 31.3 + c * 43.7) * 0.5 + 0.5;
        const winX = c * wS + 7;
        const winY = r * hS + 8;
        const winW = wS - 10;
        const winH = hS - 10;

        if (rand > 0.44) {
          ctxS.fillStyle = '#fef08a';
          ctxS.fillRect(winX, winY, winW, winH);
          ctxSEm.fillStyle = '#eab308';
          ctxSEm.fillRect(winX, winY, winW, winH);
        } else {
          ctxS.fillStyle = '#1c1917';
          ctxS.fillRect(winX, winY, winW, winH);
        }
      }
    }

    this.texArtDeco = setupTex(cStone);
    this.texArtDecoEmissive = setupTex(cStoneEm);

    // 4. Modern Residential Balconies & Terraces Facade (1024x1024)
    const cRes = document.createElement('canvas');
    cRes.width = 1024; cRes.height = 1024;
    const ctxR = cRes.getContext('2d');
    const cResEm = document.createElement('canvas');
    cResEm.width = 1024; cResEm.height = 1024;
    const ctxREm = cResEm.getContext('2d');

    ctxR.fillStyle = '#cbd5e1';
    ctxR.fillRect(0, 0, 1024, 1024);
    ctxREm.fillStyle = '#000000';
    ctxREm.fillRect(0, 0, 1024, 1024);

    const colsR = 18;
    const rowsR = 30;
    const wR = 1024 / colsR;
    const hR = 1024 / rowsR;

    for (let r = 0; r < rowsR; r++) {
      ctxR.fillStyle = '#94a3b8';
      ctxR.fillRect(0, r * hR, 1024, 6);

      for (let c = 0; c < colsR; c++) {
        const rand = Math.sin(r * 19.1 + c * 83.7) * 0.5 + 0.5;
        const winX = c * wR + 4;
        const winY = r * hR + 7;
        const winW = wR - 7;
        const winH = hR - 9;

        if (rand > 0.38) {
          ctxR.fillStyle = '#fde68a';
          ctxR.fillRect(winX, winY, winW, winH);
          ctxREm.fillStyle = '#f59e0b';
          ctxREm.fillRect(winX, winY, winW, winH);
        } else {
          ctxR.fillStyle = '#1e293b';
          ctxR.fillRect(winX, winY, winW, winH);
        }

        // Glass balcony guardrail on lower third of window opening
        ctxR.fillStyle = 'rgba(56, 189, 248, 0.65)';
        ctxR.fillRect(winX, winY + winH * 0.6, winW, winH * 0.4);
      }
    }

    this.texRes = setupTex(cRes);
    this.texResEmissive = setupTex(cResEm);

    // 5. Rooftop Helipad Decal (512x512)
    const cHelipad = document.createElement('canvas');
    cHelipad.width = 512; cHelipad.height = 512;
    const ctxH = cHelipad.getContext('2d');

    ctxH.fillStyle = '#1e293b';
    ctxH.fillRect(0, 0, 512, 512);

    // Yellow perimeter boundary circle
    ctxH.strokeStyle = '#eab308';
    ctxH.lineWidth = 14;
    ctxH.beginPath();
    ctxH.arc(256, 256, 230, 0, Math.PI * 2);
    ctxH.stroke();

    // White center landing circle
    ctxH.strokeStyle = '#f8fafc';
    ctxH.lineWidth = 12;
    ctxH.beginPath();
    ctxH.arc(256, 256, 160, 0, Math.PI * 2);
    ctxH.stroke();

    // Bold white 'H'
    ctxH.fillStyle = '#f8fafc';
    ctxH.fillRect(175, 150, 32, 212);
    ctxH.fillRect(305, 150, 32, 212);
    ctxH.fillRect(175, 240, 162, 32);

    this.texHelipad = setupTex(cHelipad);
  }

  // 1. Monumental Suspension Bridge & Canyon Arch Viaduct
  _buildBridges() {
    const steelMat = new THREE.MeshStandardMaterial({ color: 0xc83e2b, roughness: 0.42, metalness: 0.68 });
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x9aa0a6, roughness: 0.75, metalness: 0.1 });
    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x3c3f45, roughness: 0.82, metalness: 0.02 });
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x333840, roughness: 0.35, metalness: 0.85 });

    for (const b of BRIDGES) {
      const group = new THREE.Group();
      const dx = b.x2 - b.x1;
      const dz = b.z2 - b.z1;
      const length = Math.hypot(dx, dz);
      const cx = (b.x1 + b.x2) * 0.5;
      const cz = (b.z1 + b.z2) * 0.5;
      const angle = Math.atan2(dz, dx);

      group.position.set(cx, 0, cz);
      group.rotation.y = -angle;

      const segs = 36;
      const segLen = length / segs;
      const archH = b.archHeight || 4.0;

      for (let i = 0; i < segs; i++) {
        const t0 = i / segs;
        const t1 = (i + 1) / segs;
        const tm = (t0 + t1) * 0.5;
        const xLocal = (tm - 0.5) * length;

        const y0 = b.deckHeight + Math.sin(t0 * Math.PI) * archH;
        const y1 = b.deckHeight + Math.sin(t1 * Math.PI) * archH;
        const ym = (y0 + y1) * 0.5;
        const pitch = Math.atan2(y1 - y0, segLen);

        const deckGeo = new THREE.BoxGeometry(segLen + 0.35, 2.0, b.width);
        const deckMesh = new THREE.Mesh(deckGeo, asphaltMat);
        deckMesh.position.set(xLocal, ym - 1.0, 0);
        deckMesh.rotation.z = pitch;
        deckMesh.receiveShadow = true;
        deckMesh.castShadow = true;
        group.add(deckMesh);

        for (const side of [-1, 1]) {
          const railGeo = new THREE.BoxGeometry(segLen + 0.2, 1.35, 0.55);
          const rail = new THREE.Mesh(railGeo, b.type === 'suspension' ? steelMat : concreteMat);
          rail.position.set(xLocal, ym + 0.6, side * (b.width * 0.5 - 0.35));
          rail.rotation.z = pitch;
          group.add(rail);
        }
      }

      if (b.type === 'suspension') {
        const towerOffsets = [-length * 0.26, length * 0.26];
        for (const tx of towerOffsets) {
          const pierGeo = new THREE.BoxGeometry(14, 24, b.width + 8);
          const pier = new THREE.Mesh(pierGeo, concreteMat);
          pier.position.set(tx, 2, 0);
          group.add(pier);

          for (const side of [-1, 1]) {
            const legGeo = new THREE.BoxGeometry(4.2, b.towerHeight, 4.2);
            const leg = new THREE.Mesh(legGeo, steelMat);
            leg.position.set(tx, b.towerHeight * 0.5 + 4, side * (b.width * 0.5 + 1.2));
            leg.castShadow = true;
            group.add(leg);
          }

          for (const sy of [28, 62, 92, b.towerHeight]) {
            const strutGeo = new THREE.BoxGeometry(3.6, 3.8, b.width + 6.5);
            const strut = new THREE.Mesh(strutGeo, steelMat);
            strut.position.set(tx, sy, 0);
            group.add(strut);
          }
        }

        const cableSegs = 46;
        for (const side of [-1, 1]) {
          const zOff = side * (b.width * 0.5 + 1.2);
          for (let i = 0; i < cableSegs; i++) {
            const t = (i + 0.5) / cableSegs;
            const xPos = (t - 0.5) * length;
            const deckY = b.deckHeight + Math.sin(t * Math.PI) * archH;

            const absNorm = Math.abs(t - 0.5);
            let cableY;
            if (absNorm <= 0.26) {
              const u = absNorm / 0.26;
              cableY = (b.deckHeight + archH + 6.0) + u * u * (b.towerHeight - b.deckHeight - archH);
            } else {
              const u = (absNorm - 0.26) / 0.24;
              cableY = (b.towerHeight + 4.0) * (1.0 - u) + (b.deckHeight + 2.0) * u;
            }

            const hangerLen = Math.max(1.0, cableY - deckY);
            const hangerGeo = new THREE.CylinderGeometry(0.16, 0.16, hangerLen, 6);
            const hanger = new THREE.Mesh(hangerGeo, cableMat);
            hanger.position.set(xPos, deckY + hangerLen * 0.5, zOff);
            group.add(hanger);
          }
        }
      } else {
        const cols = 18;
        for (let i = 1; i < cols; i++) {
          const t = i / cols;
          const xPos = (t - 0.5) * length;
          const archDrop = Math.sin(t * Math.PI) * 95.0;
          const colHeight = archDrop + 18.0;
          const colGeo = new THREE.BoxGeometry(3.2, colHeight, b.width - 2.0);
          const col = new THREE.Mesh(colGeo, concreteMat);
          col.position.set(xPos, b.deckHeight - colHeight * 0.5, 0);
          group.add(col);
        }
      }

      this.landmarksGroup.add(group);
    }
  }

  // 2. Build Solis Harbor Metropolis with 4 Distinct Architectural Typologies & Rooftops
  _buildSolisMetropolis() {
    const cityGroup = new THREE.Group();

    // 4 Distinct High-Resolution Architectural Materials
    const matGlass = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      map: this.texGlass,
      emissive: 0xffe4a0,
      emissiveMap: this.texGlassEmissive,
      emissiveIntensity: 0.35,
      roughness: 0.12,
      metalness: 0.85
    });
    const matBronze = new THREE.MeshStandardMaterial({
      color: 0xead9c8,
      map: this.texBronze,
      emissive: 0xffb74d,
      emissiveMap: this.texBronzeEmissive,
      emissiveIntensity: 0.35,
      roughness: 0.22,
      metalness: 0.78
    });
    const matStone = new THREE.MeshStandardMaterial({
      color: 0xe7e5e4,
      map: this.texArtDeco,
      emissive: 0xfef08a,
      emissiveMap: this.texArtDecoEmissive,
      emissiveIntensity: 0.28,
      roughness: 0.65,
      metalness: 0.15
    });
    const matRes = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      map: this.texRes,
      emissive: 0xfde047,
      emissiveMap: this.texResEmissive,
      emissiveIntensity: 0.32,
      roughness: 0.35,
      metalness: 0.38
    });

    this.cityTowerMaterials = [matGlass, matBronze, matStone, matRes];
    this.cityTowerMaterial = matGlass;

    const basePodiumMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7, metalness: 0.25 });
    const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.45, metalness: 0.8 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.15, metalness: 0.95 });
    const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.8 });
    const lobbyGlassMat = new THREE.MeshStandardMaterial({ color: 0x14303f, roughness: 0.04, metalness: 0.55 });
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.8 });
    const lampGlowMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const umbrellaMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.6 });
    const helipadMat = new THREE.MeshStandardMaterial({ map: this.texHelipad, roughness: 0.65, metalness: 0.15 });

    const gridSpacing = CITY_GRID_SPACING;

    for (let gx = -3; gx <= 3; gx++) {
      for (let gz = -4; gz <= 3; gz++) {
        const bx = (gx + 0.5) * gridSpacing;
        const bz = (gz + 0.5) * gridSpacing;
        const distFromCenter = Math.hypot(bx, bz);
        if (distFromCenter > 345) continue;

        const terrainY = this.worldGen.getHeight(bx, bz);
        if (terrainY < WATER_LEVEL + 4.0) continue;

        const blockGroup = new THREE.Group();
        blockGroup.position.set(bx, terrainY, bz);

        // Raised Concrete City Block Sidewalk Slab (52m x 52m x 0.28m curb height)
        const sidewalk = new THREE.Mesh(new THREE.BoxGeometry(52.0, 0.28, 52.0), sidewalkMat);
        sidewalk.position.y = 0.14;
        sidewalk.receiveShadow = true;
        blockGroup.add(sidewalk);

        // Streetlamps at the 4 curb corners of every block
        for (const [cx, cz] of [[-25.2, -25.2], [25.2, -25.2], [-25.2, 25.2], [25.2, 25.2]]) {
          const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 6.8, 6), poleMat);
          pole.position.set(cx, 3.4, cz);
          blockGroup.add(pole);

          const arm = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.1, 0.1), poleMat);
          arm.position.set(cx + (cx > 0 ? 0.6 : -0.6), 6.7, cz);
          blockGroup.add(arm);

          const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.12, 0.25), lampGlowMat);
          bulb.position.set(cx + (cx > 0 ? 1.1 : -1.1), 6.62, cz);
          blockGroup.add(bulb);
        }

        // Central Harbor Park & Waterfront Cafe Plaza on Block (0, 2)
        if (gx === 0 && (gz === 1 || gz === 2)) {
          const grassPatch = new THREE.Mesh(
            new THREE.BoxGeometry(40, 0.34, 40),
            new THREE.MeshStandardMaterial({ color: 0x2e6f40, roughness: 0.9 })
          );
          grassPatch.position.y = 0.18;
          blockGroup.add(grassPatch);

          for (const [tx, tz] of [[-11, -11], [11, -11], [-11, 11], [11, 11]]) {
            const table = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.1, 10), sidewalkMat);
            table.position.set(tx, 1.0, tz);
            const umbrella = new THREE.Mesh(new THREE.ConeGeometry(2.2, 0.9, 8), umbrellaMat);
            umbrella.position.set(tx, 2.5, tz);
            blockGroup.add(table, umbrella);
          }

          cityGroup.add(blockGroup);
          continue;
        }

        // Procedural Skyscraper Typology Selection
        const seed = Math.abs(Math.sin(gx * 127.1 + gz * 311.7));
        const heightFactor = Math.max(0.30, 1.0 - distFromCenter / 370.0);
        const towerHeight = 32.0 + Math.pow(heightFactor, 1.35) * 160.0 * (0.55 + seed * 0.70);
        const width = 22.0 + seed * 8.0;
        const depth = 22.0 + (((seed * 19.0) % 1.0) * 8.0);
        const typo = Math.abs(gx * 3 + gz * 7) % 4;

        if (typo === 0) {
          // ==================================================================
          // TYPOLOGY 0: PRISMATIC GLASS CURTAIN WALL HEADQUARTERS
          // ==================================================================
          // Double-height glass lobby with perimeter concrete columns
          const lobby = new THREE.Mesh(new THREE.BoxGeometry(width + 2, 8.0, depth + 2), lobbyGlassMat);
          lobby.position.y = 4.0;
          blockGroup.add(lobby);

          for (const [colX, colZ] of [
            [-(width * 0.48), -(depth * 0.48)], [(width * 0.48), -(depth * 0.48)],
            [-(width * 0.48), (depth * 0.48)], [(width * 0.48), (depth * 0.48)]
          ]) {
            const col = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 8.0, 8), basePodiumMat);
            col.position.set(colX, 4.0, colZ);
            blockGroup.add(col);
          }

          // Main Glass Shaft
          const main = new THREE.Mesh(new THREE.BoxGeometry(width, towerHeight, depth), matGlass);
          main.position.y = towerHeight * 0.5 + 8.0;
          main.castShadow = true;
          main.receiveShadow = true;
          blockGroup.add(main);

          // Vertical Aluminum Chamfer Fins on corners
          for (const sideX of [-1, 1]) {
            for (const sideZ of [-1, 1]) {
              const fin = new THREE.Mesh(new THREE.BoxGeometry(0.85, towerHeight, 0.85), darkMetalMat);
              fin.position.set(sideX * (width * 0.5), towerHeight * 0.5 + 8.0, sideZ * (depth * 0.5));
              blockGroup.add(fin);
            }
          }

          // Rooftop Parapet & Elevator Penthouse
          const parapet = new THREE.Mesh(new THREE.BoxGeometry(width + 0.4, 1.2, depth + 0.4), darkMetalMat);
          parapet.position.y = towerHeight + 8.0 + 0.6;
          blockGroup.add(parapet);

          const ph = new THREE.Mesh(new THREE.BoxGeometry(width * 0.42, 5.2, depth * 0.42), basePodiumMat);
          ph.position.y = towerHeight + 8.0 + 2.6;
          blockGroup.add(ph);

          // Twin HVAC Chiller Units
          for (const sx of [-1, 1]) {
            const chiller = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.8, 2.4), darkMetalMat);
            chiller.position.set(sx * (width * 0.28), towerHeight + 8.0 + 0.9, 0);
            const fan = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.2, 12), chromeMat);
            fan.position.set(sx * (width * 0.28), towerHeight + 8.0 + 1.9, 0);
            blockGroup.add(chiller, fan);
          }

          // Tall Spire with Pulsing Red Aviation Hazard Beacon
          if (towerHeight > 65.0) {
            const spireH = 26.0;
            const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.55, spireH, 8), chromeMat);
            spire.position.y = towerHeight + 8.0 + 5.2 + spireH * 0.5;
            blockGroup.add(spire);

            const beaconGeo = new THREE.SphereGeometry(0.55, 8, 8);
            const beaconMat = new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 1.0 });
            const beacon = new THREE.Mesh(beaconGeo, beaconMat);
            beacon.position.y = towerHeight + 8.0 + 5.2 + spireH;
            blockGroup.add(beacon);
            this.aviationBeacons.push(beacon);
          }
        } else if (typo === 1) {
          // ==================================================================
          // TYPOLOGY 1: STEPPED ART-DECO HIGH-RISE (TIERED PINNACLE)
          // ==================================================================
          // Brass Marquee Portal Base
          const baseH = 8.0;
          const basePod = new THREE.Mesh(new THREE.BoxGeometry(width + 4, baseH, depth + 4), matStone);
          basePod.position.y = baseH * 0.5;
          blockGroup.add(basePod);

          const marquee = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.6, 3.2), darkMetalMat);
          marquee.position.set(0, 4.2, (depth + 4) * 0.5 + 1.5);
          blockGroup.add(marquee);

          // Tier 1: Base to 45% height
          const h1 = towerHeight * 0.45;
          const t1 = new THREE.Mesh(new THREE.BoxGeometry(width, h1, depth), matStone);
          t1.position.y = baseH + h1 * 0.5;
          t1.castShadow = true;
          blockGroup.add(t1);

          // Tier 2: 45% to 75% height (Setback 18%)
          const h2 = towerHeight * 0.30;
          const w2 = width * 0.82;
          const d2 = depth * 0.82;
          const t2 = new THREE.Mesh(new THREE.BoxGeometry(w2, h2, d2), matStone);
          t2.position.y = baseH + h1 + h2 * 0.5;
          t2.castShadow = true;
          blockGroup.add(t2);

          // Tier 3: 75% to 92% height (Setback 36%)
          const h3 = towerHeight * 0.17;
          const w3 = width * 0.64;
          const d3 = depth * 0.64;
          const t3 = new THREE.Mesh(new THREE.BoxGeometry(w3, h3, d3), matStone);
          t3.position.y = baseH + h1 + h2 + h3 * 0.5;
          t3.castShadow = true;
          blockGroup.add(t3);

          // Stepped Pyramidal Art-Deco Crown
          const crownH = 14.0;
          const crown = new THREE.Mesh(new THREE.ConeGeometry(w3 * 0.45, crownH, 4), matStone);
          crown.position.y = baseH + h1 + h2 + h3 + crownH * 0.5;
          crown.rotation.y = Math.PI * 0.25;
          blockGroup.add(crown);

          // Spire & Beacon
          const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.45, 18.0, 8), chromeMat);
          spire.position.y = baseH + h1 + h2 + h3 + crownH + 9.0;
          blockGroup.add(spire);

          const beacon = new THREE.Mesh(
            new THREE.SphereGeometry(0.55, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 1.0 })
          );
          beacon.position.y = baseH + h1 + h2 + h3 + crownH + 18.0;
          blockGroup.add(beacon);
          this.aviationBeacons.push(beacon);
        } else if (typo === 2) {
          // ==================================================================
          // TYPOLOGY 2: CYLINDRICAL BALCONY TOWER WITH ROOFTOP HELIPAD
          // ==================================================================
          const radius = width * 0.46;
          const lobbyRotunda = new THREE.Mesh(new THREE.CylinderGeometry(radius + 2, radius + 2, 7.5, 24), lobbyGlassMat);
          lobbyRotunda.position.y = 3.75;
          blockGroup.add(lobbyRotunda);

          // Cylindrical Tower Shaft
          const cylinderShaft = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, towerHeight, 28), matRes);
          cylinderShaft.position.y = towerHeight * 0.5 + 7.5;
          cylinderShaft.castShadow = true;
          cylinderShaft.receiveShadow = true;
          blockGroup.add(cylinderShaft);

          // Cantilevered Wrap-Around Balcony Rings
          const ringSpacing = 12.0;
          const ringCount = Math.floor(towerHeight / ringSpacing);
          for (let r = 1; r < ringCount; r++) {
            const ring = new THREE.Mesh(new THREE.CylinderGeometry(radius + 0.65, radius + 0.65, 0.35, 28), basePodiumMat);
            ring.position.y = 7.5 + r * ringSpacing;
            blockGroup.add(ring);
          }

          // Rooftop Helipad Pad & Perimeter Green Hazard Lights
          const padY = towerHeight + 7.5 + 0.3;
          const helipad = new THREE.Mesh(new THREE.CylinderGeometry(radius + 0.8, radius + 0.8, 0.6, 28), helipadMat);
          helipad.position.y = padY;
          blockGroup.add(helipad);

          const greenLedMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });
          for (let a = 0; a < 8; a++) {
            const angle = (a / 8) * Math.PI * 2;
            const led = new THREE.Mesh(new THREE.SphereGeometry(0.25, 6, 6), greenLedMat);
            led.position.set(Math.cos(angle) * (radius + 0.7), padY + 0.35, Math.sin(angle) * (radius + 0.7));
            blockGroup.add(led);
          }
        } else {
          // ==================================================================
          // TYPOLOGY 3: PRESTIGE BRONZE COMMERCIAL BLOCK & SATELLITE SUITE
          // ==================================================================
          const podH = 9.5;
          const podium = new THREE.Mesh(new THREE.BoxGeometry(width + 4.5, podH, depth + 4.5), basePodiumMat);
          podium.position.y = podH * 0.5;
          podium.castShadow = true;
          blockGroup.add(podium);

          // Streetfront Retail Window Display
          const retailWin = new THREE.Mesh(new THREE.BoxGeometry(width + 4.8, 4.2, depth * 0.75), lobbyGlassMat);
          retailWin.position.y = 2.4;
          blockGroup.add(retailWin);

          // Bronze High-Rise Shaft
          const main = new THREE.Mesh(new THREE.BoxGeometry(width, towerHeight, depth), matBronze);
          main.position.y = towerHeight * 0.5 + podH;
          main.castShadow = true;
          main.receiveShadow = true;
          blockGroup.add(main);

          // Central Recessed Vertical Glass Atrium Slot
          const atriumSlot = new THREE.Mesh(new THREE.BoxGeometry(width * 0.28, towerHeight, depth + 0.4), lobbyGlassMat);
          atriumSlot.position.y = towerHeight * 0.5 + podH;
          blockGroup.add(atriumSlot);

          // Parapet & Rooftop Industrial Satellite Dish
          const parapet = new THREE.Mesh(new THREE.BoxGeometry(width + 0.2, 1.4, depth + 0.2), darkMetalMat);
          parapet.position.y = towerHeight + podH + 0.7;
          blockGroup.add(parapet);

          const dishBase = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 2.5, 8), darkMetalMat);
          dishBase.position.set(0, towerHeight + podH + 1.25, 0);
          const dishBowl = new THREE.Mesh(new THREE.SphereGeometry(2.4, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.38), chromeMat);
          dishBowl.position.set(0, towerHeight + podH + 3.2, 0);
          dishBowl.rotation.x = 0.55;
          dishBowl.rotation.z = -0.35;
          blockGroup.add(dishBase, dishBowl);

          if (towerHeight > 60.0) {
            const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.42, 22.0, 8), chromeMat);
            mast.position.set(width * 0.32, towerHeight + podH + 11.0, depth * 0.32);
            const beacon = new THREE.Mesh(
              new THREE.SphereGeometry(0.55, 8, 8),
              new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 1.0 })
            );
            beacon.position.set(width * 0.32, towerHeight + podH + 22.0, depth * 0.32);
            blockGroup.add(mast, beacon);
            this.aviationBeacons.push(beacon);
          }
        }

        cityGroup.add(blockGroup);
        this.buildingColliders.push({ x: bx, z: bz, radius: Math.max(width, depth) * 0.55, topY: terrainY + towerHeight });
        this.worldGen.registerCollider(bx, bz, (width + 4) * 0.5, (depth + 4) * 0.5, terrainY + towerHeight + 12);
      }
    }

    this.landmarksGroup.add(cityGroup);
  }

  // 3. Build Solis Coastal Airport (ATC Control Tower, Hangars, Windsock & Beacon)
  _buildSolisAirport() {
    const airportGroup = new THREE.Group();
    const baseY = this.worldGen.getHeight(620, 165);
    airportGroup.position.set(620, baseY, 165);

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4, metalness: 0.3 });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.6 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0f3a55, roughness: 0.05, metalness: 0.55 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 });

    // Air Traffic Control Tower
    const towerShaft = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 5.6, 38, 12), whiteMat);
    towerShaft.position.set(0, 19, 0);
    towerShaft.castShadow = true;
    airportGroup.add(towerShaft);
    this.worldGen.registerCollider(620, 165, 6.0, 6.0, baseY + 46);

    const cabGlass = new THREE.Mesh(new THREE.CylinderGeometry(7.2, 5.5, 5.5, 16), glassMat);
    cabGlass.position.set(0, 40.5, 0);
    airportGroup.add(cabGlass);

    const cabRoof = new THREE.Mesh(new THREE.CylinderGeometry(7.8, 7.2, 1.2, 16), steelMat);
    cabRoof.position.set(0, 43.8, 0);
    airportGroup.add(cabRoof);

    // 2 Aircraft Hangars alongside the apron
    for (let i = 0; i < 2; i++) {
      const hx = 52 + i * 48;
      const hangar = new THREE.Group();
      hangar.position.set(hx, 0, 0);

      const box = new THREE.Mesh(new THREE.BoxGeometry(34, 11, 28), whiteMat);
      box.position.y = 5.5;
      box.castShadow = true;
      hangar.add(box);
      this.worldGen.registerCollider(620 + hx, 165, 17.5, 14.5, baseY + 18);

      const archRoof = new THREE.Mesh(
        new THREE.CylinderGeometry(17, 17, 28, 16, 1, false, 0, Math.PI),
        steelMat
      );
      archRoof.rotation.z = Math.PI * 0.5;
      archRoof.rotation.y = Math.PI * 0.5;
      archRoof.scale.set(1, 0.35, 1);
      archRoof.position.y = 11;
      hangar.add(archRoof);

      // Open hangar bay door facing the runway (+Z)
      const door = new THREE.Mesh(new THREE.BoxGeometry(26, 8.5, 0.4), steelMat);
      door.position.set(0, 4.25, 14.1);
      hangar.add(door);

      airportGroup.add(hangar);
    }

    // Orange/White Windsock near runway threshold
    const sockPole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 8, 8), steelMat);
    sockPole.position.set(-120, 4, 24);
    const sockCone = new THREE.Mesh(new THREE.ConeGeometry(0.65, 3.2, 10), redMat);
    sockCone.rotation.z = Math.PI * 0.5;
    sockCone.position.set(-118.4, 7.6, 24);
    airportGroup.add(sockPole, sockCone);

    this.landmarksGroup.add(airportGroup);
  }

  // 4. Build Oakhaven Alpine Village (Chalets, Church Spire, Market Stalls)
  _buildOakhavenVillage() {
    const villageGroup = new THREE.Group();
    const vx = 1750;
    const vz = -1400;

    const wallMat = new THREE.MeshStandardMaterial({ color: 0xe7dcc8, roughness: 0.85 });
    const timberMat = new THREE.MeshStandardMaterial({ color: 0x4a2f1d, roughness: 0.8 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x7c2d12, roughness: 0.75 });
    const windowGlowMat = new THREE.MeshStandardMaterial({
      color: 0xffd166,
      emissive: 0xffae34,
      emissiveIntensity: 1.4
    });

    const churchY = this.worldGen.getHeight(vx, vz - 36);
    const church = new THREE.Group();
    church.position.set(vx, churchY, vz - 36);
    this.worldGen.registerCollider(vx, vz - 36, 7.5, 13.5, churchY + 50);

    const nave = new THREE.Mesh(new THREE.BoxGeometry(14, 12, 26), wallMat);
    nave.position.y = 6;
    nave.castShadow = true;
    church.add(nave);

    const bellTower = new THREE.Mesh(new THREE.BoxGeometry(8, 32, 8), wallMat);
    bellTower.position.set(0, 16, 11);
    bellTower.castShadow = true;
    church.add(bellTower);

    const spire = new THREE.Mesh(new THREE.ConeGeometry(6.2, 16, 4), roofMat);
    spire.position.set(0, 40, 11);
    spire.rotation.y = Math.PI * 0.25;
    church.add(spire);
    villageGroup.add(church);

    for (let i = 0; i < 26; i++) {
      const ring = i < 10 ? 68.0 : 132.0;
      const angle = (i / (i < 10 ? 10 : 16)) * Math.PI * 2.0 + (i * 0.3);
      const cx = vx + Math.cos(angle) * ring;
      const cz = vz + Math.sin(angle) * ring;

      if (this.worldGen.getRoadInfo(cx, cz).isRoad) continue;
      const cy = this.worldGen.getHeight(cx, cz);

      const chalet = new THREE.Group();
      chalet.position.set(cx, cy, cz);
      chalet.rotation.y = -angle + Math.PI * 0.5;
      this.worldGen.registerCollider(cx, cz, 6.2, 6.2, cy + 12);

      const body = new THREE.Mesh(new THREE.BoxGeometry(10, 6.5, 13), wallMat);
      body.position.y = 3.25;
      body.castShadow = true;
      chalet.add(body);

      const roof = new THREE.Mesh(new THREE.ConeGeometry(9.6, 5.5, 4), roofMat);
      roof.position.y = 9.0;
      roof.rotation.y = Math.PI * 0.25;
      roof.scale.set(1.0, 1.0, 1.25);
      roof.castShadow = true;
      chalet.add(roof);

      const win = new THREE.Mesh(new THREE.BoxGeometry(10.3, 1.6, 4.0), windowGlowMat);
      win.position.y = 3.4;
      chalet.add(win);

      const beam = new THREE.Mesh(new THREE.BoxGeometry(10.4, 0.5, 13.4), timberMat);
      beam.position.y = 5.8;
      chalet.add(beam);

      villageGroup.add(chalet);
    }

    this.landmarksGroup.add(villageGroup);
  }

  // 5. Build Cape Stormwatch Lighthouse with Rotating Volumetric Beam
  _buildStormwatchLighthouse() {
    const lx = 1550;
    const lz = 1950;
    const ly = this.worldGen.getHeight(lx, lz);
    this.worldGen.registerCollider(lx, lz, 5.8, 5.8, ly + 46);

    const group = new THREE.Group();
    group.position.set(lx, ly, lz);

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.7 });
    const lanternMat = new THREE.MeshBasicMaterial({ color: 0xfffbeb });

    for (let i = 0; i < 6; i++) {
      const rBottom = 5.4 - i * 0.35;
      const rTop = 5.4 - (i + 1) * 0.35;
      const seg = new THREE.Mesh(
        new THREE.CylinderGeometry(rTop, rBottom, 6.0, 20),
        i % 2 === 0 ? whiteMat : redMat
      );
      seg.position.y = i * 6.0 + 3.0;
      seg.castShadow = true;
      group.add(seg);
    }

    const gallery = new THREE.Mesh(new THREE.CylinderGeometry(4.4, 4.4, 1.2, 24), darkMat);
    gallery.position.y = 36.5;
    group.add(gallery);

    const lantern = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.8, 4.5, 16), lanternMat);
    lantern.position.y = 39.2;
    group.add(lantern);

    const cupola = new THREE.Mesh(new THREE.ConeGeometry(3.4, 3.8, 20), redMat);
    cupola.position.y = 43.0;
    group.add(cupola);

    this.lighthousePivot = new THREE.Group();
    this.lighthousePivot.position.y = 39.2;

    const coneGeo = new THREE.ConeGeometry(28, 240, 24, 1, true);
    coneGeo.translate(0, -120, 0);
    coneGeo.rotateX(-Math.PI * 0.5);

    const coneMat = new THREE.MeshBasicMaterial({
      color: 0xfff3b0,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const beam1 = new THREE.Mesh(coneGeo, coneMat);
    const beam2 = new THREE.Mesh(coneGeo, coneMat);
    beam2.rotation.y = Math.PI;
    this.lighthousePivot.add(beam1, beam2);
    group.add(this.lighthousePivot);

    this.landmarksGroup.add(group);
  }

  // 6. Build Helios Ancient Desert Temple Ruins & Obelisk
  _buildHeliosRuins() {
    const rx = -2950;
    const rz = 2300;
    const ry = this.worldGen.getHeight(rx, rz);

    const ruinsGroup = new THREE.Group();
    ruinsGroup.position.set(rx, ry, rz);

    const sandstoneMat = new THREE.MeshStandardMaterial({ color: 0xe6ccb2, roughness: 0.85 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.25, metalness: 0.85 });
    const fireMat = new THREE.MeshBasicMaterial({ color: 0xff6b00 });

    const pod1 = new THREE.Mesh(new THREE.BoxGeometry(58, 2.5, 42), sandstoneMat);
    pod1.position.y = 1.25;
    pod1.receiveShadow = true;
    ruinsGroup.add(pod1);

    const pod2 = new THREE.Mesh(new THREE.BoxGeometry(52, 2.0, 36), sandstoneMat);
    pod2.position.y = 3.2;
    pod2.receiveShadow = true;
    ruinsGroup.add(pod2);

    for (let ix = -22; ix <= 22; ix += 8.8) {
      for (let iz = -14; iz <= 14; iz += 7.0) {
        if (Math.abs(ix) < 20 && Math.abs(iz) < 12) continue;
        const intact = Math.sin(ix * 13.7 + iz * 29.3) > -0.35;
        const colH = intact ? 14.0 : 5.5 + Math.abs(Math.cos(ix * iz)) * 5.0;
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.15, colH, 14), sandstoneMat);
        col.position.set(ix, 4.2 + colH * 0.5, iz);
        col.castShadow = true;
        ruinsGroup.add(col);
      }
    }

    const lintelN = new THREE.Mesh(new THREE.BoxGeometry(46, 2.2, 2.8), sandstoneMat);
    lintelN.position.set(0, 19.2, -14);
    ruinsGroup.add(lintelN);

    const obeliskShaft = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 2.2, 32, 4), sandstoneMat);
    obeliskShaft.position.set(38, 16, 0);
    obeliskShaft.rotation.y = Math.PI * 0.25;
    obeliskShaft.castShadow = true;
    ruinsGroup.add(obeliskShaft);

    const pyramidion = new THREE.Mesh(new THREE.ConeGeometry(1.55, 3.6, 4), goldMat);
    pyramidion.position.set(38, 33.8, 0);
    pyramidion.rotation.y = Math.PI * 0.25;
    ruinsGroup.add(pyramidion);

    for (const side of [-8, 8]) {
      const brazier = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 0.8, 3.2, 10), sandstoneMat);
      brazier.position.set(28, 2.5, side);
      ruinsGroup.add(brazier);

      const flame = new THREE.Mesh(new THREE.SphereGeometry(1.1, 10, 10), fireMat);
      flame.position.set(28, 4.5, side);
      ruinsGroup.add(flame);
    }

    this.landmarksGroup.add(ruinsGroup);
  }

  // 7. Build Valkyrie Summit Astronomical Observatory (y = 1120m)
  _buildValkyrieObservatory() {
    const ox = 3600;
    const oz = -3400;
    const oy = this.worldGen.getHeight(ox, oz);
    this.worldGen.registerCollider(ox, oz, 15.5, 15.5, oy + 30);

    const obsGroup = new THREE.Group();
    obsGroup.position.set(ox, oy, oz);

    const whiteMetal = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3, metalness: 0.5 });
    const darkSteel = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4, metalness: 0.7 });
    const solarMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.2, metalness: 0.8 });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(14, 15, 14, 28), whiteMetal);
    base.position.y = 7;
    base.castShadow = true;
    obsGroup.add(base);

    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(14.2, 28, 16, 0, Math.PI * 2, 0, Math.PI * 0.52),
      whiteMetal
    );
    dome.position.y = 14;
    dome.castShadow = true;
    obsGroup.add(dome);

    const slot = new THREE.Mesh(new THREE.BoxGeometry(4.2, 14, 15), darkSteel);
    slot.position.set(0, 19, 4);
    slot.rotation.x = -0.35;
    obsGroup.add(slot);

    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 3.2, 12, 12), darkSteel);
    pedestal.position.set(-28, 6, -14);
    obsGroup.add(pedestal);

    const dish = new THREE.Mesh(
      new THREE.SphereGeometry(11, 20, 12, 0, Math.PI * 2, 0, 0.9),
      whiteMetal
    );
    dish.position.set(-28, 16, -14);
    dish.rotation.x = Math.PI - 0.5;
    obsGroup.add(dish);

    for (let i = -2; i <= 2; i++) {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(8, 0.3, 4.5), solarMat);
      panel.position.set(24, 3.5, i * 7);
      panel.rotation.z = 0.35;
      obsGroup.add(panel);
    }

    this.landmarksGroup.add(obsGroup);
  }

  // 8. Initialize Streaming GPU InstancedMesh Pools with Natural Organic Silhouettes & High Performance
  _initStreamingFoliagePools() {
    // 1. Organic Conifer Pine / Spruce (natural 3-tier branch whorls, height ~26m)
    const pineTrunk = new THREE.CylinderGeometry(0.48, 0.95, 14.0, 7).toNonIndexed();
    pineTrunk.translate(0, 5.5, 0);
    const tier1 = new THREE.ConeGeometry(5.2, 7.5, 8).toNonIndexed();
    tier1.translate(0, 11.0, 0);
    const tier2 = new THREE.ConeGeometry(3.8, 6.2, 8).toNonIndexed();
    tier2.translate(0, 15.5, 0);
    const tier3 = new THREE.ConeGeometry(2.1, 5.0, 7).toNonIndexed();
    tier3.translate(0, 19.5, 0);
    const pineGeo = BufferGeometryUtils.mergeGeometries([pineTrunk, tier1, tier2, tier3]);
    const pineMat = new THREE.MeshStandardMaterial({ color: 0x1a4522, roughness: 0.82 });

    // 2. Mature Broadleaf Oak (natural boughs + unified continuous organic canopy dome)
    const oakTrunk = new THREE.CylinderGeometry(0.72, 1.35, 8.5, 8).toNonIndexed();
    oakTrunk.translate(0, 3.8, 0);
    const bough1 = new THREE.CylinderGeometry(0.35, 0.55, 4.8, 6).toNonIndexed();
    bough1.rotateZ(0.42);
    bough1.translate(1.6, 7.0, 0.3);
    const bough2 = new THREE.CylinderGeometry(0.32, 0.50, 4.5, 6).toNonIndexed();
    bough2.rotateZ(-0.40);
    bough2.translate(-1.5, 6.8, -0.3);
    const crownDome = new THREE.IcosahedronGeometry(6.4, 2).toNonIndexed();
    crownDome.scale(1.35, 0.92, 1.28);
    crownDome.translate(0, 12.0, 0);
    const oakGeo = BufferGeometryUtils.mergeGeometries([oakTrunk, bough1, bough2, crownDome]);
    const oakMat = new THREE.MeshStandardMaterial({ color: 0x2d6824, roughness: 0.78 });

    // 3. Savanna Umbrella Acacia (slender angled branches with horizontal flat-table canopy)
    const dryTrunk = new THREE.CylinderGeometry(0.44, 0.72, 7.5, 6).toNonIndexed();
    dryTrunk.translate(0, 3.0, 0);
    const dryLimb = new THREE.CylinderGeometry(0.25, 0.38, 5.2, 6).toNonIndexed();
    dryLimb.rotateZ(0.55);
    dryLimb.translate(1.8, 7.2, 0.2);
    const dryTable = new THREE.CylinderGeometry(5.2, 3.8, 1.2, 8).toNonIndexed();
    dryTable.translate(1.2, 10.2, 0.2);
    const dryGeo = BufferGeometryUtils.mergeGeometries([dryTrunk, dryLimb, dryTable]);
    const dryMat = new THREE.MeshStandardMaterial({ color: 0x6e7839, roughness: 0.85 });

    // 4. Dead Snag / Lightning-Struck Leafless Tree (bare gnarled timber)
    const deadTrunk = new THREE.CylinderGeometry(0.36, 0.75, 12.0, 6).toNonIndexed();
    deadTrunk.translate(0, 4.5, 0);
    const deadBranch1 = new THREE.CylinderGeometry(0.14, 0.28, 4.8, 5).toNonIndexed();
    deadBranch1.rotateZ(0.68);
    deadBranch1.translate(1.8, 8.0, 0.3);
    const deadBranch2 = new THREE.CylinderGeometry(0.12, 0.24, 4.2, 5).toNonIndexed();
    deadBranch2.rotateZ(-0.72);
    deadBranch2.translate(-1.6, 8.8, -0.4);
    const deadGeo = BufferGeometryUtils.mergeGeometries([deadTrunk, deadBranch1, deadBranch2]);
    const deadMat = new THREE.MeshStandardMaterial({ color: 0x5a5650, roughness: 0.92 });

    // 5. Young Birch / Sapling
    const babyTrunk = new THREE.CylinderGeometry(0.15, 0.26, 3.6, 6).toNonIndexed();
    babyTrunk.translate(0, 1.4, 0);
    const babyCrown = new THREE.IcosahedronGeometry(1.6, 1).toNonIndexed();
    babyCrown.scale(0.9, 1.3, 0.9);
    babyCrown.translate(0, 3.8, 0);
    const babyGeo = BufferGeometryUtils.mergeGeometries([babyTrunk, babyCrown]);
    const babyMat = new THREE.MeshStandardMaterial({ color: 0x48a83e, roughness: 0.74 });

    // 6. Natural Low-Profile Flowering Shrub / Bush
    const bushGeo = new THREE.IcosahedronGeometry(1.8, 1).toNonIndexed();
    bushGeo.scale(1.4, 0.75, 1.25);
    bushGeo.translate(0, 0.9, 0);
    const bushMat = new THREE.MeshStandardMaterial({ color: 0x265e34, roughness: 0.8 });

    // 7. Lightweight 3D Instanced Grass Tufts (crossed double-sided quads)
    const blade1 = new THREE.PlaneGeometry(1.8, 1.2).toNonIndexed();
    blade1.translate(0, 0.6, 0);
    const blade2 = new THREE.PlaneGeometry(1.8, 1.2).toNonIndexed();
    blade2.rotateY(Math.PI * 0.5);
    blade2.translate(0, 0.6, 0);
    const grassGeo = BufferGeometryUtils.mergeGeometries([blade1, blade2]);
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x3aa655,
      roughness: 0.72,
      side: THREE.DoubleSide
    });

    // 8. Desert Saguaro Cacti
    const cactMain = new THREE.CylinderGeometry(0.38, 0.50, 7.0, 7).toNonIndexed();
    cactMain.translate(0, 2.8, 0);
    const cactArm = new THREE.CylinderGeometry(0.26, 0.32, 2.5, 6).toNonIndexed();
    cactArm.translate(0.95, 4.0, 0);
    const desertGeo = BufferGeometryUtils.mergeGeometries([cactMain, cactArm]);
    const desertMat = new THREE.MeshStandardMaterial({ color: 0x477030, roughness: 0.76 });

    // 9. Weathered Boulders & Outcrops
    const rockGeo = new THREE.IcosahedronGeometry(1.6, 1);
    rockGeo.scale(1.35, 0.8, 1.15);
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x686c72, roughness: 0.9 });

    // Right-sized GPU instance pools: fast, smooth 60 FPS streaming without VRAM bloat
    this.maxPines = 1600;
    this.maxOaks = 1200;
    this.maxDry = 500;
    this.maxDead = 200;
    this.maxBaby = 600;
    this.maxBushes = 1500;
    this.maxGrass = 3500;
    this.maxDesert = 350;
    this.maxRocks = 800;

    this.pineInstanced = new THREE.InstancedMesh(pineGeo, pineMat, this.maxPines);
    this.oakInstanced = new THREE.InstancedMesh(oakGeo, oakMat, this.maxOaks);
    this.dryInstanced = new THREE.InstancedMesh(dryGeo, dryMat, this.maxDry);
    this.deadInstanced = new THREE.InstancedMesh(deadGeo, deadMat, this.maxDead);
    this.babyInstanced = new THREE.InstancedMesh(babyGeo, babyMat, this.maxBaby);
    this.bushInstanced = new THREE.InstancedMesh(bushGeo, bushMat, this.maxBushes);
    this.grassInstanced = new THREE.InstancedMesh(grassGeo, grassMat, this.maxGrass);
    this.desertInstanced = new THREE.InstancedMesh(desertGeo, desertMat, this.maxDesert);
    this.rockInstanced = new THREE.InstancedMesh(rockGeo, rockMat, this.maxRocks);

    this.foliageMeshes = [
      this.pineInstanced,
      this.oakInstanced,
      this.dryInstanced,
      this.deadInstanced,
      this.babyInstanced,
      this.bushInstanced,
      this.grassInstanced,
      this.desertInstanced,
      this.rockInstanced
    ];

    for (const im of this.foliageMeshes) {
      // ONLY major trees cast shadows — saves massive shadow render time!
      im.castShadow = (im === this.pineInstanced || im === this.oakInstanced);
      im.receiveShadow = true;
      im.frustumCulled = false;
      this.foliageGroup.add(im);
    }
  }

  _rebuildFoliageWindow(centerX, centerZ) {
    this.lastFoliageCenter.set(centerX, centerZ);

    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    const noise = this.worldGen.noise;

    let pineIdx = 0;
    let oakIdx = 0;
    let dryIdx = 0;
    let deadIdx = 0;
    let babyIdx = 0;
    let bushIdx = 0;
    let grassIdx = 0;
    let desertIdx = 0;
    let rockIdx = 0;

    const radius = 820 * Math.sqrt(this.densityMultiplier);
    const step = 28.0; // Natural organic spacing with clearings & meadows

    const minGx = Math.floor((centerX - radius) / step) * step;
    const maxGx = Math.ceil((centerX + radius) / step) * step;
    const minGz = Math.floor((centerZ - radius) / step) * step;
    const maxGz = Math.ceil((centerZ + radius) / step) * step;

    for (let gz = minGz; gz <= maxGz; gz += step) {
      for (let gx = minGx; gx <= maxGx; gx += step) {
        const distSq = (gx - centerX) * (gx - centerX) + (gz - centerZ) * (gz - centerZ);
        if (distSq > radius * radius) continue;

        const h1 = noise.hash2D(gx * 0.13, gz * 0.13);
        const h2 = noise.hash2D(gx * 0.29 + 19.1, gz * 0.29 + 47.3);
        const h3 = noise.hash2D(gx * 0.47 + 73.5, gz * 0.47 + 109.2);

        const wx = gx + (h1 - 0.5) * step * 0.85;
        const wz = gz + (h2 - 0.5) * step * 0.85;

        const distFromCam = Math.hypot(wx - centerX, wz - centerZ);
        if (distFromCam > radius) continue;
        const edgeFade = 1.0 - smoothstep(radius * 0.84, radius, distFromCam);
        if (edgeFade < 0.05) continue;

        const data = this.worldGen.getTerrainData(wx, wz);
        if (data.height < WATER_LEVEL + 1.8) continue;
        if (data.cityWeight > 0.15) continue;

        // Keep Airport Runway & Apron and SpaceX Starbase clear of all foliage
        if (wx > 330 && wx < 1200 && Math.abs(wz - 205) < 95) continue;
        if (Math.hypot(wx - 1750, wz + 1400) < 165) continue;
        if (Math.hypot(wx + 2950, wz - 2300) < 85) continue;
        if (Math.hypot(wx - 1050, wz - 880) < 260) continue;

        // Slope calculation: prevent trees on steep vertical rock cliffs
        const hDx = Math.abs(this.worldGen.getHeight(wx + 4.0, wz) - data.height);
        const hDz = Math.abs(this.worldGen.getHeight(wx, wz + 4.0) - data.height);
        const isSteep = (hDx > 2.2 || hDz > 2.2);

        // Road Handling: No trees on asphalt. Soft grass tufts along gravel road shoulder (roadMask 0.05..0.35)
        if (data.roadMask > 0.35) {
          continue;
        } else if (data.roadMask > 0.05) {
          if (grassIdx < this.maxGrass && h3 > 0.25) {
            const gScale = (0.8 + h2 * 0.4) * edgeFade;
            dummy.position.set(wx, data.height - 0.12, wz);
            dummy.rotation.set(0, h1 * Math.PI * 2.0, 0);
            dummy.scale.set(gScale, gScale * (0.8 + h3 * 0.3), gScale);
            dummy.updateMatrix();
            this.grassInstanced.setMatrixAt(grassIdx, dummy.matrix);
            color.setHSL(0.28 + (h1 - 0.5) * 0.04, 0.60, 0.30 + h2 * 0.08);
            this.grassInstanced.setColorAt(grassIdx, color);
            grassIdx++;
          }
          continue;
        }

        // 1. Rock / Boulder Placement
        if (rockIdx < this.maxRocks && (h1 > 0.90 || (data.canyonZone > 0.4 && h1 > 0.75) || (data.volcanicWeight > 0.3 && h1 > 0.70) || (isSteep && h1 > 0.72))) {
          const rScale = (0.75 + h2 * 1.3) * edgeFade;
          dummy.position.set(wx, data.height - 0.4 * rScale, wz);
          dummy.rotation.set(h1 * 0.4, h2 * Math.PI * 2.0, h3 * 0.4);
          dummy.scale.set(rScale, rScale * (0.75 + h1 * 0.4), rScale);
          dummy.updateMatrix();
          this.rockInstanced.setMatrixAt(rockIdx, dummy.matrix);

          if (data.canyonZone > 0.4) {
            color.setRGB(0.68, 0.29, 0.16);
          } else if (data.volcanicWeight > 0.3) {
            color.setRGB(0.18, 0.16, 0.17);
          } else {
            const g = 0.42 + h1 * 0.16;
            color.setRGB(g, g, g + 0.02);
          }
          this.rockInstanced.setColorAt(rockIdx, color);
          rockIdx++;
          continue;
        }

        // 2. Desert Cacti Placement
        if (data.desertZone > 0.38 || data.canyonZone > 0.38) {
          const oasisDist = Math.hypot(wx + 2780, wz - 2180);
          const nearOasis = oasisDist > 42 && oasisDist < 175;
          if (desertIdx < this.maxDesert && (nearOasis || h1 > 0.80)) {
            const cScale = (nearOasis ? 1.3 : 0.95) * (0.75 + h2 * 0.4) * edgeFade;
            dummy.position.set(wx, data.height - 0.35, wz);
            dummy.rotation.set(0, h2 * Math.PI * 2.0, 0);
            dummy.scale.set(cScale, cScale, cScale);
            dummy.updateMatrix();
            this.desertInstanced.setMatrixAt(desertIdx, dummy.matrix);
            desertIdx++;
          }
          continue;
        }

        // 3. Natural Organic Tree & Meadow Distribution in Vegetation Biomes
        if (data.height < 480.0 && data.moisture > 0.16 && !isSteep) {
          const rotY = h2 * Math.PI * 2.0;
          const treeBaseScale = (0.85 + h1 * 0.5) * edgeFade;

          // Tree Grove Condition: Tree placed when h1 indicates grove; leaves breathing room/meadows otherwise
          if (h1 > 0.38 || data.moisture > 0.42) {
            // A. Dead Snag (~2% of trees)
            if (h1 > 0.95 && deadIdx < this.maxDead) {
              dummy.position.set(wx, data.height - 0.45, wz);
              dummy.rotation.set(h3 * 0.12 - 0.06, rotY, h1 * 0.12 - 0.06);
              dummy.scale.set(treeBaseScale * 0.95, treeBaseScale * (0.9 + h2 * 0.25), treeBaseScale * 0.95);
              dummy.updateMatrix();
              this.deadInstanced.setMatrixAt(deadIdx, dummy.matrix);
              color.setHSL(0.08, 0.06, 0.38 + h3 * 0.10);
              this.deadInstanced.setColorAt(deadIdx, color);
              deadIdx++;
            }
            // B. Savanna Umbrella Acacia (savanna margins & lower moisture)
            else if ((data.moisture < 0.36 || data.desertZone > 0.18 || data.canyonZone > 0.18) && dryIdx < this.maxDry) {
              dummy.position.set(wx, data.height - 0.4, wz);
              dummy.rotation.set(0, rotY, 0);
              dummy.scale.set(treeBaseScale * 1.05, treeBaseScale * (0.92 + h2 * 0.25), treeBaseScale * 1.05);
              dummy.updateMatrix();
              this.dryInstanced.setMatrixAt(dryIdx, dummy.matrix);
              color.setHSL(0.20 + (h1 - 0.5) * 0.04, 0.40, 0.30 + h3 * 0.08);
              this.dryInstanced.setColorAt(dryIdx, color);
              dryIdx++;
            }
            // C. Young Birch / Sapling
            else if (h3 < 0.18 && data.moisture > 0.32 && babyIdx < this.maxBaby) {
              dummy.position.set(wx, data.height - 0.22, wz);
              dummy.rotation.set(0, rotY, 0);
              const babyScale = (0.7 + h2 * 0.35) * edgeFade;
              dummy.scale.set(babyScale, babyScale, babyScale);
              dummy.updateMatrix();
              this.babyInstanced.setMatrixAt(babyIdx, dummy.matrix);
              color.setHSL(0.32 + (h1 - 0.5) * 0.04, 0.60, 0.36 + h2 * 0.08);
              this.babyInstanced.setColorAt(babyIdx, color);
              babyIdx++;
            }
            // D. Tall Conifer Pine / Spruce (highlands, alpine slopes or moist hills)
            else if ((data.height > 95.0 || (data.moisture > 0.46 && h2 > 0.50)) && pineIdx < this.maxPines) {
              dummy.position.set(wx, data.height - 0.5, wz);
              dummy.rotation.set(0, rotY, 0);
              dummy.scale.set(treeBaseScale * 1.1, treeBaseScale * (1.05 + h3 * 0.4), treeBaseScale * 1.1);
              dummy.updateMatrix();
              this.pineInstanced.setMatrixAt(pineIdx, dummy.matrix);
              color.setHSL(0.35 + (h1 - 0.5) * 0.03, 0.52, 0.20 + h3 * 0.07);
              this.pineInstanced.setColorAt(pineIdx, color);
              pineIdx++;
            }
            // E. Mature Broadleaf Oak (temperate valleys, lowlands & plains)
            else if (oakIdx < this.maxOaks && data.moisture > 0.28) {
              dummy.position.set(wx, data.height - 0.45, wz);
              dummy.rotation.set(0, rotY, 0);
              dummy.scale.set(treeBaseScale * 1.15, treeBaseScale * (0.95 + h3 * 0.3), treeBaseScale * 1.15);
              dummy.updateMatrix();
              this.oakInstanced.setMatrixAt(oakIdx, dummy.matrix);
              color.setHSL(0.28 + (h1 - 0.5) * 0.05, 0.56, 0.24 + h2 * 0.08);
              this.oakInstanced.setColorAt(oakIdx, color);
              oakIdx++;
            }
          }
          // Meadow Clearing Undergrowth: Shrub or Grass (only one per clearing cell)
          else if (h2 > 0.54 && bushIdx < this.maxBushes) {
            const bScale = (0.75 + h3 * 0.5) * edgeFade;
            dummy.position.set(wx, data.height - 0.2, wz);
            dummy.rotation.set(0, h3 * Math.PI * 2.0, 0);
            dummy.scale.set(bScale * 1.15, bScale * 0.85, bScale * 1.1);
            dummy.updateMatrix();
            this.bushInstanced.setMatrixAt(bushIdx, dummy.matrix);
            color.setHSL(0.30 + (h2 - 0.5) * 0.04, 0.55, 0.24 + h3 * 0.07);
            this.bushInstanced.setColorAt(bushIdx, color);
            bushIdx++;
          }
          else if (grassIdx < this.maxGrass && h3 > 0.38) {
            const gScale = (0.8 + h1 * 0.4) * edgeFade;
            dummy.position.set(wx, data.height - 0.12, wz);
            dummy.rotation.set(0, h2 * Math.PI * 2.0, 0);
            dummy.scale.set(gScale, gScale * (0.85 + h3 * 0.3), gScale);
            dummy.updateMatrix();
            this.grassInstanced.setMatrixAt(grassIdx, dummy.matrix);
            color.setHSL(0.29 + (h1 - 0.5) * 0.05, 0.60, 0.28 + h2 * 0.08);
            this.grassInstanced.setColorAt(grassIdx, color);
            grassIdx++;
          }
        }
      }
    }

    this.pineInstanced.count = pineIdx;
    this.oakInstanced.count = oakIdx;
    this.dryInstanced.count = dryIdx;
    this.deadInstanced.count = deadIdx;
    this.babyInstanced.count = babyIdx;
    this.bushInstanced.count = bushIdx;
    this.grassInstanced.count = grassIdx;
    this.desertInstanced.count = desertIdx;
    this.rockInstanced.count = rockIdx;

    for (const im of this.foliageMeshes) {
      im.instanceMatrix.needsUpdate = true;
      if (im.instanceColor) im.instanceColor.needsUpdate = true;
    }

    this.totalInstancesRendered = pineIdx + oakIdx + dryIdx + deadIdx + babyIdx + bushIdx + grassIdx + desertIdx + rockIdx;
  }

  update(dt, cameraPos) {
    if (this.lighthousePivot) {
      this.lighthousePivot.rotation.y += dt * 0.85;
    }

    if (this.cityTowerMaterials && this.cityTowerMaterials.length > 0) {
      const nightGlow = smoothstep(0.22, -0.1, this.atmosphere.sunDirection.y);
      for (const mat of this.cityTowerMaterials) {
        mat.emissiveIntensity = 0.15 + nightGlow * 1.45;
      }
    } else if (this.cityTowerMaterial) {
      const nightGlow = smoothstep(0.22, -0.1, this.atmosphere.sunDirection.y);
      this.cityTowerMaterial.emissiveIntensity = 0.15 + nightGlow * 1.35;
    }

    if (this.aviationBeacons && this.aviationBeacons.length > 0) {
      this.beaconTimer = (this.beaconTimer || 0) + dt;
      const flash = (Math.sin(this.beaconTimer * 4.5) > 0.15) ? 1.0 : 0.12;
      for (const b of this.aviationBeacons) {
        b.material.opacity = flash;
      }
    }

    if (this.starbase) {
      this.starbase.update(dt);
    }
    if (this.spaceExploration) {
      this.spaceExploration.update(dt, cameraPos);
    }

    const dist = Math.hypot(cameraPos.x - this.lastFoliageCenter.x, cameraPos.z - this.lastFoliageCenter.y);
    if (dist > 100.0) {
      this._rebuildFoliageWindow(cameraPos.x, cameraPos.z);
    }
  }

  forceRefreshFoliage(cameraPos) {
    this.lastFoliageCenter.set(999999, 999999);
    this._rebuildFoliageWindow(cameraPos.x, cameraPos.z);
  }
}
