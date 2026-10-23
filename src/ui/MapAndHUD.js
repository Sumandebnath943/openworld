// ============================================================================
// AETHERIA OPEN WORLD ENGINE - Interactive World Map, Minimap, NPC HUD & Studio
// Real-time Topographic Radar with Live NPC & Traffic Dots, Vehicle/Aircraft
// Telemetry, Proximity NPC Daily Schedule Inspector & Continent Fast-Travel
// ============================================================================

import { LANDMARKS, BRIDGES, WATER_LEVEL, WORLD_HALF_EXTENT } from '../world/WorldGenerator.js';
import { MODES } from '../world/TraversalController.js';
import { clamp } from '../world/Noise.js';

export class MapAndHUD {
  constructor(worldGen, atmosphere, terrainManager, worldElements, traversal, weatherAudio, lifeSim) {
    this.worldGen = worldGen;
    this.atmosphere = atmosphere;
    this.terrainManager = terrainManager;
    this.worldElements = worldElements;
    this.traversal = traversal;
    this.weatherAudio = weatherAudio;
    this.lifeSim = lifeSim;

    this.mapOpen = false;
    this.hudVisible = true;

    this.mapCenter = { x: 0, z: 0 };
    this.mapHalfSpan = 5200;
    this.isPanningMap = false;
    this.panStart = { x: 0, y: 0, cx: 0, cz: 0 };
    this.mapDragMoved = false;

    this.fpsFrames = 0;
    this.fpsTime = performance.now();
    this.currentFps = 60;
    this.frameTimeMs = 16.6;

    this.minimapCanvas = document.getElementById('minimap-canvas');
    this.minimapCtx = this.minimapCanvas.getContext('2d');
    this.minimapBuffer = document.createElement('canvas');
    this.minimapBuffer.width = 140;
    this.minimapBuffer.height = 140;
    this.minimapBufCtx = this.minimapBuffer.getContext('2d');
    this.lastMinimapSnap = { x: 999999, z: 999999 };

    this.worldMapCanvas = document.getElementById('worldmap-canvas');
    this.worldMapCtx = this.worldMapCanvas.getContext('2d');
    this.worldMapBuffer = document.createElement('canvas');
    this.worldMapBuffer.width = 512;
    this.worldMapBuffer.height = 458;
    this.worldMapBufCtx = this.worldMapBuffer.getContext('2d');
    this.worldMapDirty = true;

    this._bindUIEvents();
    this._populateLandmarkLists();
  }

  _bindUIEvents() {
    document.querySelectorAll('[data-mode-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode-btn');
        this.traversal.setMode(mode);
        this.updateModeButtons();
      });
    });

    const camBtn = document.getElementById('btn-toggle-cam');
    if (camBtn) {
      camBtn.addEventListener('click', () => {
        this.traversal.thirdPerson = !this.traversal.thirdPerson;
        this.traversal._syncModeMeshes();
        camBtn.textContent = this.traversal.thirdPerson ? 'Cam: 3rd Person [C]' : 'Cam: 1st Person [C]';
      });
    }

    const lightBtn = document.getElementById('btn-toggle-light');
    if (lightBtn) {
      lightBtn.addEventListener('click', () => {
        this.traversal.flashlightOn = !this.traversal.flashlightOn;
        lightBtn.classList.toggle('active', this.traversal.flashlightOn);
      });
    }

    const talkBtn = document.getElementById('btn-npc-talk');
    if (talkBtn) {
      talkBtn.addEventListener('click', () => {
        if (this.lifeSim) this.lifeSim.interactWithNearestNpc();
      });
    }

    document.getElementById('btn-open-map').addEventListener('click', () => this.toggleWorldMap(true));
    document.getElementById('btn-close-map').addEventListener('click', () => this.toggleWorldMap(false));

    document.getElementById('btn-map-zoom-in').addEventListener('click', () => {
      this.mapHalfSpan = clamp(this.mapHalfSpan * 0.6, 1000, WORLD_HALF_EXTENT);
      this.worldMapDirty = true;
      this.renderWorldMap();
    });
    document.getElementById('btn-map-zoom-out').addEventListener('click', () => {
      this.mapHalfSpan = clamp(this.mapHalfSpan * 1.65, 1000, WORLD_HALF_EXTENT);
      this.worldMapDirty = true;
      this.renderWorldMap();
    });
    document.getElementById('btn-map-reset').addEventListener('click', () => {
      this.mapCenter.x = 0;
      this.mapCenter.z = 0;
      this.mapHalfSpan = 5200;
      this.worldMapDirty = true;
      this.renderWorldMap();
    });
    document.getElementById('btn-map-continent').addEventListener('click', () => {
      this.mapCenter.x = 0;
      this.mapCenter.z = 0;
      this.mapHalfSpan = 64000;
      this.worldMapDirty = true;
      this.renderWorldMap();
    });

    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      if (e.code === 'KeyM') {
        this.toggleWorldMap(!this.mapOpen);
      } else if (e.code === 'KeyH') {
        const studio = document.getElementById('studio-panel');
        studio.classList.toggle('collapsed');
      } else if (e.code === 'KeyE') {
        if (this.worldElements && this.worldElements.starbase && this.worldElements.starbase.isPlayerNearPad(this.traversal.position)) {
          this.traversal.setMode(MODES.ROCKET);
        } else if (this.lifeSim) {
          this.lifeSim.interactWithNearestNpc();
        }
      } else if (e.code === 'Escape' && this.mapOpen) {
        this.toggleWorldMap(false);
      }
      this.updateModeButtons();
    });

    const timeSlider = document.getElementById('slider-time');
    timeSlider.addEventListener('input', (e) => {
      this.atmosphere.state.timeOfDay = parseFloat(e.target.value);
    });

    const speedSlider = document.getElementById('slider-timespeed');
    speedSlider.addEventListener('input', (e) => {
      this.atmosphere.state.timeSpeed = parseFloat(e.target.value);
      document.getElementById('val-timespeed').textContent = `${parseFloat(e.target.value).toFixed(2)}x`;
    });

    const cloudSlider = document.getElementById('slider-clouds');
    cloudSlider.addEventListener('input', (e) => {
      this.atmosphere.state.cloudCoverage = parseFloat(e.target.value);
      document.getElementById('val-clouds').textContent = `${Math.round(parseFloat(e.target.value) * 100)}%`;
    });

    const waveSlider = document.getElementById('slider-waves');
    waveSlider.addEventListener('input', (e) => {
      this.atmosphere.state.waveHeight = parseFloat(e.target.value);
      document.getElementById('val-waves').textContent = `${parseFloat(e.target.value).toFixed(1)}x`;
    });

    const lodSlider = document.getElementById('slider-lod');
    lodSlider.addEventListener('input', (e) => {
      this.terrainManager.maxLodLevel = parseInt(e.target.value, 10);
      this.terrainManager.lastUpdatePos.set(999999, 999999, 999999);
      const kmSpan = Math.round((128 * Math.pow(2, this.terrainManager.maxLodLevel) * 7) / 1000);
      document.getElementById('val-lod').textContent = `${kmSpan} km`;
    });

    const foliageSlider = document.getElementById('slider-foliage');
    foliageSlider.addEventListener('input', (e) => {
      this.worldElements.densityMultiplier = parseFloat(e.target.value);
      this.worldElements.forceRefreshFoliage(this.traversal.position);
      document.getElementById('val-foliage').textContent = `${Math.round(parseFloat(e.target.value) * 100)}%`;
    });

    const audioSlider = document.getElementById('slider-audio');
    audioSlider.addEventListener('input', (e) => {
      this.weatherAudio.setVolume(parseFloat(e.target.value));
      document.getElementById('val-audio').textContent = `${Math.round(parseFloat(e.target.value) * 100)}%`;
    });

    document.querySelectorAll('[data-weather-preset]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-weather-preset');
        this.atmosphere.applyWeatherPreset(preset);
        document.querySelectorAll('[data-weather-preset]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        cloudSlider.value = this.atmosphere.state.cloudCoverage;
        document.getElementById('val-clouds').textContent = `${Math.round(this.atmosphere.state.cloudCoverage * 100)}%`;
        waveSlider.value = this.atmosphere.state.waveHeight;
        document.getElementById('val-waves').textContent = `${this.atmosphere.state.waveHeight.toFixed(1)}x`;
      });
    });

    this.worldMapCanvas.addEventListener('mousedown', (e) => {
      this.isPanningMap = true;
      this.mapDragMoved = false;
      this.panStart = { x: e.clientX, y: e.clientY, cx: this.mapCenter.x, cz: this.mapCenter.z };
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.mapOpen) return;
      const rect = this.worldMapCanvas.getBoundingClientRect();
      if (this.isPanningMap) {
        const dx = e.clientX - this.panStart.x;
        const dy = e.clientY - this.panStart.y;
        if (Math.hypot(dx, dy) > 5) this.mapDragMoved = true;

        const worldPerPixelX = (this.mapHalfSpan * 2) / rect.width;
        const worldPerPixelZ = (this.mapHalfSpan * 2) / rect.height;
        this.mapCenter.x = clamp(this.panStart.cx - dx * worldPerPixelX, -WORLD_HALF_EXTENT, WORLD_HALF_EXTENT);
        this.mapCenter.z = clamp(this.panStart.cz - dy * worldPerPixelZ, -WORLD_HALF_EXTENT, WORLD_HALF_EXTENT);
        this.worldMapDirty = true;
        this.renderWorldMap();
      } else if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const u = (e.clientX - rect.left) / rect.width;
        const v = (e.clientY - rect.top) / rect.height;
        const wx = this.mapCenter.x + (u - 0.5) * this.mapHalfSpan * 2;
        const wz = this.mapCenter.z + (v - 0.5) * this.mapHalfSpan * 2;
        const tData = this.worldGen.getTerrainData(wx, wz);
        const inspectEl = document.getElementById('map-hover-readout');
        if (inspectEl) {
          inspectEl.textContent = `Cursor: X ${(wx / 1000).toFixed(2)} km, Z ${(wz / 1000).toFixed(2)} km | Elev: ${Math.round(tData.height)}m | ${tData.biome.name} (Click to Fast-Travel)`;
        }
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (!this.mapOpen || !this.isPanningMap) return;
      this.isPanningMap = false;
      if (!this.mapDragMoved) {
        const rect = this.worldMapCanvas.getBoundingClientRect();
        const u = (e.clientX - rect.left) / rect.width;
        const v = (e.clientY - rect.top) / rect.height;
        const wx = this.mapCenter.x + (u - 0.5) * this.mapHalfSpan * 2;
        const wz = this.mapCenter.z + (v - 0.5) * this.mapHalfSpan * 2;
        this.fastTravelTo(wx, wz);
      }
    });

    this.worldMapCanvas.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 0.75 : 1.35;
        this.mapHalfSpan = clamp(this.mapHalfSpan * factor, 900, WORLD_HALF_EXTENT);
        this.worldMapDirty = true;
        this.renderWorldMap();
      },
      { passive: false }
    );
  }

  _populateLandmarkLists() {
    const quickBar = document.getElementById('landmark-quickbar');
    const mapList = document.getElementById('worldmap-landmark-list');

    quickBar.innerHTML = '';
    mapList.innerHTML = '';

    LANDMARKS.forEach((lm, idx) => {
      if (idx < 9) {
        const chip = document.createElement('button');
        chip.className = 'landmark-chip';
        chip.textContent = lm.name
          .replace('Solis Harbor ', '')
          .replace('Solis Coastal ', '')
          .replace('Summit ', '');
        chip.title = `${lm.name} (${lm.biome}) - Click to Fast-Travel`;
        chip.addEventListener('click', () => this.fastTravelTo(lm.x, lm.z, lm.heading));
        quickBar.appendChild(chip);
      }

      const card = document.createElement('div');
      card.className = 'map-landmark-card';
      card.innerHTML = `
        <div class="lm-card-header">
          <span class="lm-card-title">${lm.name}</span>
          <span class="lm-card-tag">${lm.category}</span>
        </div>
        <div class="lm-card-meta">X: ${(lm.x / 1000).toFixed(1)} km, Z: ${(lm.z / 1000).toFixed(1)} km • Elev: ${Math.round(lm.baseElevation)}m</div>
        <div class="lm-card-desc">${lm.description}</div>
      `;
      card.addEventListener('click', () => this.fastTravelTo(lm.x, lm.z, lm.heading));
      mapList.appendChild(card);
    });
  }

  fastTravelTo(x, z, heading = null) {
    const isSpaceDest = (Math.abs(x - 800) < 500 && Math.abs(z - 1200) < 500) ||
                        (Math.abs(x - 14000) < 2500 && Math.abs(z + 12000) < 2500) ||
                        (Math.abs(x + 22000) < 3500 && Math.abs(z - 24000) < 3500);
    if (isSpaceDest && this.traversal.mode !== MODES.ROCKET) {
      this.traversal.setMode(MODES.ROCKET);
    }
    this.traversal.teleportTo(x, z, heading);
    this.terrainManager.primeAround(x, z);
    this.worldElements.forceRefreshFoliage(this.traversal.position);
    this.lastMinimapSnap = { x: 999999, z: 999999 };
    if (this.mapOpen) {
      this.toggleWorldMap(false);
    }
  }

  toggleWorldMap(open) {
    this.mapOpen = open;
    const modal = document.getElementById('worldmap-modal');
    modal.classList.toggle('hidden', !open);
    if (open) {
      if (document.pointerLockElement) document.exitPointerLock();
      this.worldMapDirty = true;
      this.renderWorldMap();
    }
  }

  updateModeButtons() {
    document.querySelectorAll('[data-mode-btn]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-mode-btn') === this.traversal.mode);
    });
  }

  _sampleMapPixelRGB(wx, wz) {
    const data = this.worldGen.getTerrainData(wx, wz);
    const h = data.height;

    // 1. Water Bathymetry & Coastal Shallows
    if (h < WATER_LEVEL) {
      const depth = clamp(-h / 65.0, 0.0, 1.0);
      const coastalShallows = 1.0 - clamp(-h / 6.0, 0.0, 1.0);
      // Deep ocean navy -> shelf turquoise -> surf cyan
      const r = Math.round(10 * (1 - depth) + 6 * depth + coastalShallows * 35);
      const g = Math.round(82 * (1 - depth) + 24 * depth + coastalShallows * 78);
      const b = Math.round(142 * (1 - depth) + 54 * depth + coastalShallows * 68);
      return [clamp(r, 0, 255), clamp(g, 0, 255), clamp(b, 0, 255)];
    }

    // 2. Multidirectional 2.5D Shaded Relief (Sun at 315° NW, 45° elevation)
    const eps = 22.0;
    const hE = this.worldGen.getHeight(wx + eps, wz);
    const hS = this.worldGen.getHeight(wx, wz + eps);
    const dx = (h - hE) / eps;
    const dz = (h - hS) / eps;
    const relief = 1.0 + (dx + dz) * 0.52;
    const shade = clamp(relief, 0.56, 1.44);

    // 3. Photorealistic Hypsometric Elevation & Biome Base Color
    const beachWeight = 1.0 - clamp((h - 0.5) / 4.0, 0.0, 1.0);

    // Base lowland valley & plains green (#487d3a)
    let r = 72, g = 125, b = 58;

    // Forest moisture blend
    if (data.moisture > 0.40) {
      const fb = clamp((data.moisture - 0.40) / 0.30, 0.0, 1.0);
      r = Math.round(r * (1 - fb) + 32 * fb);
      g = Math.round(g * (1 - fb) + 84 * fb);
      b = Math.round(b * (1 - fb) + 40 * fb);
    }

    // Canyon ochre & terracotta sandstone
    if (data.canyonZone > 0.12) {
      const cz = clamp((data.canyonZone - 0.12) / 0.50, 0.0, 1.0);
      r = Math.round(r * (1 - cz) + 188 * cz);
      g = Math.round(g * (1 - cz) + 86 * cz);
      b = Math.round(b * (1 - cz) + 48 * cz);
    }

    // Desert dunes golden sand
    if (data.desertZone > 0.12) {
      const dz = clamp((data.desertZone - 0.12) / 0.50, 0.0, 1.0);
      r = Math.round(r * (1 - dz) + 218 * dz);
      g = Math.round(g * (1 - dz) + 165 * dz);
      b = Math.round(b * (1 - dz) + 74 * dz);
    }

    // Volcanic basalt & glowing crater
    if (data.volcanicWeight > 0.12) {
      const vz = clamp((data.volcanicWeight - 0.12) / 0.50, 0.0, 1.0);
      const craterDist = Math.hypot(wx - 5200, wz - 3800);
      if (craterDist < 320) {
        const magma = 1.0 - clamp((craterDist - 110) / 200, 0.0, 1.0);
        r = Math.round(r * (1 - vz) + (235 * magma + 46 * (1 - magma)) * vz);
        g = Math.round(g * (1 - vz) + (72 * magma + 42 * (1 - magma)) * vz);
        b = Math.round(b * (1 - vz) + (24 * magma + 44 * (1 - magma)) * vz);
      } else {
        r = Math.round(r * (1 - vz) + 46 * vz);
        g = Math.round(g * (1 - vz) + 42 * vz);
        b = Math.round(b * (1 - vz) + 44 * vz);
      }
    }

    // Montane rock strata (elevation 140m .. 380m)
    if (h > 140.0) {
      const rockBlend = clamp((h - 140.0) / 240.0, 0.0, 1.0);
      r = Math.round(r * (1 - rockBlend) + 116 * rockBlend);
      g = Math.round(g * (1 - rockBlend) + 120 * rockBlend);
      b = Math.round(b * (1 - rockBlend) + 126 * rockBlend);
    }

    // Alpine snow & glacier peaks (> 280m)
    if (h > 280.0) {
      const snowBlend = clamp((h - 280.0) / 200.0, 0.0, 1.0) * (1.0 - data.volcanicWeight * 0.75);
      r = Math.round(r * (1 - snowBlend) + 242 * snowBlend);
      g = Math.round(g * (1 - snowBlend) + 246 * snowBlend);
      b = Math.round(b * (1 - snowBlend) + 252 * snowBlend);
    }

    // Beach sand overlay along coastline
    if (beachWeight > 0.01) {
      r = Math.round(r * (1 - beachWeight) + 214 * beachWeight);
      g = Math.round(g * (1 - beachWeight) + 196 * beachWeight);
      b = Math.round(b * (1 - beachWeight) + 148 * beachWeight);
    }

    // Metropolis urban pavement (cityWeight)
    if (data.cityWeight > 0.15) {
      const cw = clamp((data.cityWeight - 0.15) / 0.50, 0.0, 1.0);
      r = Math.round(r * (1 - cw) + 104 * cw);
      g = Math.round(g * (1 - cw) + 114 * cw);
      b = Math.round(b * (1 - cw) + 126 * cw);
    }

    // Paved highways / roads in map pixel
    if (data.roadMask > 0.28) {
      const rw = clamp((data.roadMask - 0.28) / 0.45, 0.0, 1.0);
      r = Math.round(r * (1 - rw) + 238 * rw);
      g = Math.round(g * (1 - rw) + 188 * rw);
      b = Math.round(b * (1 - rw) + 64 * rw);
    }

    // Subtle 80m topographic contour shading
    const contour = Math.abs((h % 80.0) - 40.0) < 1.8 ? 0.91 : 1.0;
    const finalShade = shade * contour;

    return [
      clamp(Math.round(r * finalShade), 0, 255),
      clamp(Math.round(g * finalShade), 0, 255),
      clamp(Math.round(b * finalShade), 0, 255)
    ];
  }

  _updateMinimap() {
    const pos = this.traversal.position;
    const radarRadius = 260.0; // View radius in meters (diameter 520m)
    const cw = this.minimapCanvas.width;
    const ch = this.minimapCanvas.height;
    const pxPerMeter = (cw * 0.5) / radarRadius;
    const bufferRadius = radarRadius * 1.5; // 390m radius buffer coverage

    const distFromSnap = Math.hypot(pos.x - this.lastMinimapSnap.x, pos.z - this.lastMinimapSnap.z);
    if (distFromSnap > 120.0) {
      this.lastMinimapSnap = { x: pos.x, z: pos.z };
      const w = this.minimapBuffer.width;
      const h = this.minimapBuffer.height;
      const img = this.minimapBufCtx.createImageData(w, h);
      const d = img.data;

      let p = 0;
      for (let py = 0; py < h; py++) {
        const wz = pos.z + ((py / h) - 0.5) * (bufferRadius * 2.0);
        for (let px = 0; px < w; px++) {
          const wx = pos.x + ((px / w) - 0.5) * (bufferRadius * 2.0);
          const [r, g, b] = this._sampleMapPixelRGB(wx, wz);
          d[p++] = r;
          d[p++] = g;
          d[p++] = b;
          d[p++] = 255;
        }
      }
      this.minimapBufCtx.putImageData(img, 0, 0);
    }

    const ctx = this.minimapCtx;
    ctx.clearRect(0, 0, cw, ch);

    // Circular radar clipping mask
    ctx.save();
    ctx.beginPath();
    ctx.arc(cw * 0.5, ch * 0.5, cw * 0.48, 0, Math.PI * 2);
    ctx.clip();

    // Draw terrain buffer smoothly offset by current player position relative to snap
    const bufferDrawSize = bufferRadius * 2.0 * pxPerMeter;
    const offsetX = (pos.x - this.lastMinimapSnap.x) * pxPerMeter;
    const offsetZ = (pos.z - this.lastMinimapSnap.z) * pxPerMeter;
    const drawX = cw * 0.5 - bufferDrawSize * 0.5 - offsetX;
    const drawY = ch * 0.5 - bufferDrawSize * 0.5 - offsetZ;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(this.minimapBuffer, drawX, drawY, bufferDrawSize, bufferDrawSize);

    // Subtle radar range ring
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.16)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cw * 0.5, ch * 0.5, cw * 0.25, 0, Math.PI * 2);
    ctx.stroke();

    // Draw Live Moving NPC Citizens on Minimap (Emerald Dots)
    if (this.lifeSim) {
      ctx.fillStyle = '#4ade80';
      for (const npc of this.lifeSim.npcs) {
        const np = npc.rig.root.position;
        const screenX = cw * 0.5 + (np.x - pos.x) * pxPerMeter;
        const screenY = ch * 0.5 + (np.z - pos.z) * pxPerMeter;
        const distSq = (screenX - cw * 0.5) ** 2 + (screenY - ch * 0.5) ** 2;
        if (distSq < (cw * 0.46) ** 2) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw Live AI Traffic Vehicles on Minimap (Amber Dots)
      ctx.fillStyle = '#fbbf24';
      for (const veh of this.lifeSim.vehicles) {
        const vp = veh.mesh.position;
        const screenX = cw * 0.5 + (vp.x - pos.x) * pxPerMeter;
        const screenY = ch * 0.5 + (vp.z - pos.z) * pxPerMeter;
        const distSq = (screenX - cw * 0.5) ** 2 + (screenY - ch * 0.5) ** 2;
        if (distSq < (cw * 0.46) ** 2) {
          ctx.fillRect(screenX - 2, screenY - 2, 4, 4);
        }
      }
    }

    // Draw Landmark Pins
    for (const lm of LANDMARKS) {
      const screenX = cw * 0.5 + (lm.x - pos.x) * pxPerMeter;
      const screenY = ch * 0.5 + (lm.z - pos.z) * pxPerMeter;
      const distSq = (screenX - cw * 0.5) ** 2 + (screenY - ch * 0.5) ** 2;
      if (distSq < (cw * 0.46) ** 2) {
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.arc(screenX, screenY, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(screenX, screenY, 2.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw Player Position at Center with Direction FOV Cone
    const heading = -this.traversal.yaw - Math.PI * 0.5;

    ctx.save();
    ctx.translate(cw * 0.5, ch * 0.5);
    ctx.rotate(heading);

    ctx.fillStyle = 'rgba(56, 189, 248, 0.28)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 36, -0.55, 0.55);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(9, 0);
    ctx.lineTo(-6, -5.5);
    ctx.lineTo(-3, 0);
    ctx.lineTo(-6, 5.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.restore(); // Exit circular radar clipping mask
  }

  renderWorldMap() {
    if (!this.mapOpen) return;

    const w = this.worldMapBuffer.width;
    const h = this.worldMapBuffer.height;
    if (this.worldMapDirty) {
      const img = this.worldMapBufCtx.createImageData(w, h);
      const d = img.data;
      let p = 0;

      for (let py = 0; py < h; py++) {
        const wz = this.mapCenter.z + ((py / h) - 0.5) * this.mapHalfSpan * 2.0;
        for (let px = 0; px < w; px++) {
          const wx = this.mapCenter.x + ((px / w) - 0.5) * this.mapHalfSpan * 2.0;
          const [r, g, b] = this._sampleMapPixelRGB(wx, wz);
          d[p++] = r;
          d[p++] = g;
          d[p++] = b;
          d[p++] = 255;
        }
      }
      this.worldMapBufCtx.putImageData(img, 0, 0);
      this.worldMapDirty = false;
    }

    const ctx = this.worldMapCtx;
    const cw = this.worldMapCanvas.width;
    const ch = this.worldMapCanvas.height;
    ctx.clearRect(0, 0, cw, ch);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(this.worldMapBuffer, 0, 0, cw, ch);

    const worldToScreen = (wx, wz) => [
      (0.5 + (wx - this.mapCenter.x) / (this.mapHalfSpan * 2.0)) * cw,
      (0.5 + (wz - this.mapCenter.z) / (this.mapHalfSpan * 2.0)) * ch
    ];

    // Coordinate grid overlay
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    const gridStep = this.mapHalfSpan > 20000 ? 10000 : this.mapHalfSpan > 5000 ? 2000 : 1000;
    const startX = Math.floor((this.mapCenter.x - this.mapHalfSpan) / gridStep) * gridStep;
    const startZ = Math.floor((this.mapCenter.z - this.mapHalfSpan) / gridStep) * gridStep;

    for (let gx = startX; gx <= this.mapCenter.x + this.mapHalfSpan; gx += gridStep) {
      const [sx] = worldToScreen(gx, 0);
      ctx.beginPath();
      ctx.moveTo(sx, 0);
      ctx.lineTo(sx, ch);
      ctx.stroke();
    }
    for (let gz = startZ; gz <= this.mapCenter.z + this.mapHalfSpan; gz += gridStep) {
      const [, sz] = worldToScreen(0, gz);
      ctx.beginPath();
      ctx.moveTo(0, sz);
      ctx.lineTo(cw, sz);
      ctx.stroke();
    }

    // Airport Runway Cartographic Layer (x: 430..1110, z: 204..236)
    const [r1x, r1y] = worldToScreen(430, 204);
    const [r2x, r2y] = worldToScreen(1110, 236);
    const rwLeft = Math.min(r1x, r2x);
    const rwTop = Math.min(r1y, r2y);
    const rwW = Math.abs(r2x - r1x);
    const rwH = Math.max(3, Math.abs(r2y - r1y));
    if (rwW > 2) {
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(rwLeft - 1, rwTop - 1, rwW + 2, rwH + 2);
      ctx.fillStyle = '#334155';
      ctx.fillRect(rwLeft, rwTop, rwW, rwH);
      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(rwLeft + 2, rwTop + rwH * 0.5);
      ctx.lineTo(rwLeft + rwW - 2, rwTop + rwH * 0.5);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Cartographic Dual-Cased Highways (Pass 1: Charcoal Casing)
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 4.0;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const poly of this.worldGen.roadPolylines) {
      ctx.beginPath();
      poly.forEach(([rx, rz], idx) => {
        const [sx, sz] = worldToScreen(rx, rz);
        if (idx === 0) ctx.moveTo(sx, sz);
        else ctx.lineTo(sx, sz);
      });
      ctx.stroke();
    }

    // Cartographic Dual-Cased Highways (Pass 2: Amber Core)
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2.2;
    for (const poly of this.worldGen.roadPolylines) {
      ctx.beginPath();
      poly.forEach(([rx, rz], idx) => {
        const [sx, sz] = worldToScreen(rx, rz);
        if (idx === 0) ctx.moveTo(sx, sz);
        else ctx.lineTo(sx, sz);
      });
      ctx.stroke();
    }

    // Bridges (Pass 1: Shadow)
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 5.5;
    for (const b of BRIDGES) {
      const [x1, y1] = worldToScreen(b.x1, b.z1);
      const [x2, y2] = worldToScreen(b.x2, b.z2);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Bridges (Pass 2: Red Suspension Deck)
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3.2;
    for (const b of BRIDGES) {
      const [x1, y1] = worldToScreen(b.x1, b.z1);
      const [x2, y2] = worldToScreen(b.x2, b.z2);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Landmark Pins
    ctx.font = '600 12px Inter, system-ui, sans-serif';
    for (const lm of LANDMARKS) {
      const [sx, sz] = worldToScreen(lm.x, lm.z);
      if (sx < -40 || sx > cw + 40 || sz < -20 || sz > ch + 20) continue;

      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(sx, sz, 7.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(sx, sz, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
      const textW = ctx.measureText(lm.name).width;
      const labelBelow = lm.id === 'golden_bridge' || lm.id === 'solis_airport';
      const boxY = labelBelow ? sz + 9 : sz - 24;
      const textY = labelBelow ? sz + 21 : sz - 12;
      ctx.fillRect(sx - textW * 0.5 - 5, boxY, textW + 10, 16);

      ctx.fillStyle = '#f8fafc';
      ctx.fillText(lm.name, sx - textW * 0.5, textY);
    }

    // Player Position with Direction Indicator
    const [px, py] = worldToScreen(this.traversal.position.x, this.traversal.position.z);
    const heading = -this.traversal.yaw - Math.PI * 0.5;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(heading);

    ctx.fillStyle = '#22c55e';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(11, 0);
    ctx.lineTo(-7, -6);
    ctx.lineTo(-4, 0);
    ctx.lineTo(-7, 6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  _updateCompassAndTelemetry() {
    const pos = this.traversal.position;
    const tData = this.worldGen.getTerrainData(pos.x, pos.z);
    const norm = this.worldGen.getNormalAndSlope(pos.x, pos.z);

    let deg = ((-this.traversal.yaw * 180) / Math.PI) % 360;
    if (deg < 0) deg += 360;

    const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const cardinal = dirs[Math.round(deg / 45) % 8];
    document.getElementById('compass-heading').textContent = `${String(Math.round(deg)).padStart(3, '0')}° ${cardinal}`;

    let nearestLm = LANDMARKS[0];
    let nearestDist = Infinity;
    for (const lm of LANDMARKS) {
      const d = Math.hypot(lm.x - pos.x, lm.z - pos.z);
      if (d < nearestDist) {
        nearestDist = d;
        nearestLm = lm;
      }
    }
    const distStr = nearestDist >= 1000 ? `${(nearestDist / 1000).toFixed(2)} km` : `${Math.round(nearestDist)} m`;
    document.getElementById('compass-landmark').textContent = `Nearest: ${nearestLm.name} (${distStr})`;

    const biomeBadge = document.getElementById('hud-biome-name');
    if (pos.y > 6000) {
      const celestial = this.worldElements && this.worldElements.spaceExploration ? this.worldElements.spaceExploration.getNearestCelestialBody(pos) : null;
      if (celestial) {
        biomeBadge.textContent = `${celestial.name} (${celestial.dist}m)`;
        biomeBadge.style.color = '#38bdf8';
      } else {
        biomeBadge.textContent = 'Low Earth Orbit (LEO)';
        biomeBadge.style.color = '#38bdf8';
      }
      document.getElementById('hud-altitude').textContent = `${(pos.y / 1000).toFixed(1)} km ASL (Outer Space)`;
    } else {
      biomeBadge.textContent = tData.biome.name;
      biomeBadge.style.color = tData.biome.badge;
      document.getElementById('hud-altitude').textContent = `${Math.round(pos.y)} m ASL (Slope ${Math.round(norm.slopeDeg)}°)`;
    }

    document.getElementById('hud-coords').textContent = `X: ${(pos.x / 1000).toFixed(2)} km | Z: ${(pos.z / 1000).toFixed(2)} km`;

    const kmh = Math.round(this.traversal.speedMs * 3.6);
    if (this.traversal.mode === MODES.ROVER) {
      document.getElementById('hud-speed').textContent = `${kmh} km/h | Gear ${this.traversal.currentGear} (${this.traversal.engineRpm} RPM)`;
    } else if (this.traversal.mode === MODES.DRONE) {
      const thr = Math.round(this.traversal.airThrottle * 100);
      const gearState = this.traversal.gearDeployed ? 'GEAR DN' : 'GEAR UP';
      document.getElementById('hud-speed').textContent = `${kmh} km/h | Thr ${thr}% | ${this.traversal.gForce.toFixed(1)}G (${gearState})`;
    } else if (this.traversal.mode === MODES.ROCKET) {
      const thr = Math.round(this.traversal.rocketThrottle * 100);
      const stageName = this.traversal.rocketStage === 1 ? 'BOOSTER 9 + SHIP 25' : 'ORBITAL STARSHIP';
      const warpText = this.traversal.warpBoost ? ' [WARP SPEED]' : '';
      const rSpeedKmh = Math.round(this.traversal.rocketSpeed * 3.6);
      document.getElementById('hud-speed').textContent = `${rSpeedKmh} km/h | Thrust ${thr}% | ${stageName}${warpText}`;
    } else {
      const gait = this.traversal.isSwimming
        ? 'Swimming'
        : this.traversal.speedMs > 4.0
        ? 'Running'
        : this.traversal.speedMs > 0.2
        ? 'Walking'
        : 'Standing';
      document.getElementById('hud-speed').textContent = `${kmh} km/h (${gait})`;
    }

    document.getElementById('hud-fps').textContent = `${this.currentFps} FPS (${this.frameTimeMs.toFixed(1)} ms)`;
    const npcCount = this.lifeSim ? this.lifeSim.npcs.length + this.lifeSim.vehicles.length : 0;
    document.getElementById('hud-chunks').textContent = `${this.terrainManager.getActiveChunkCount()} Chunks | ${npcCount} NPCs & Cars`;

    // Format Time of Day (HH:MM)
    const tod = this.atmosphere.state.timeOfDay;
    const hrs = Math.floor(tod);
    const mins = Math.floor((tod - hrs) * 60);
    const timeStr = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    document.getElementById('val-time').textContent = timeStr;
    const timeSlider = document.getElementById('slider-time');
    if (document.activeElement !== timeSlider) {
      timeSlider.value = tod;
    }

    // Update Proximity NPC Inspector Banner & Dialogue Box
    const npcCard = document.getElementById('npc-proximity-card');
    if (this.worldElements && this.worldElements.starbase && this.worldElements.starbase.isPlayerNearPad(pos) && this.traversal.mode === MODES.EXPLORER) {
      if (npcCard) {
        npcCard.classList.remove('hidden');
        document.getElementById('npc-card-name').textContent = 'SpaceX Starbase — Orbital Launch Mount';
        document.getElementById('npc-card-routine').textContent = 'Starship S25 & Super Heavy B9 ready on pad! Press [E] or [4] to Board & Launch';
        document.getElementById('npc-card-dialogue').classList.add('hidden');
      }
    } else if (this.lifeSim && npcCard) {
      if (this.lifeSim.activeDialogue) {
        const d = this.lifeSim.activeDialogue;
        npcCard.classList.remove('hidden');
        document.getElementById('npc-card-name').textContent = d.speaker;
        document.getElementById('npc-card-routine').textContent = d.status;
        document.getElementById('npc-card-dialogue').textContent = d.text;
        document.getElementById('npc-card-dialogue').classList.remove('hidden');
      } else if (this.lifeSim.nearestNpc && this.lifeSim.nearestNpcDist < 15.0) {
        const npc = this.lifeSim.nearestNpc;
        const status = this.lifeSim.getNpcActivityStatus(npc, tod);
        npcCard.classList.remove('hidden');
        document.getElementById('npc-card-name').textContent = `${npc.name} — ${npc.title} (${Math.round(this.lifeSim.nearestNpcDist)}m)`;
        document.getElementById('npc-card-routine').textContent = `Routine [${timeStr}]: ${status}`;
        document.getElementById('npc-card-dialogue').classList.add('hidden');
      } else {
        npcCard.classList.add('hidden');
      }
    }
  }

  update(dt) {
    this.fpsFrames++;
    const now = performance.now();
    if (now - this.fpsTime >= 400) {
      this.currentFps = Math.min(144, Math.round((this.fpsFrames * 1000) / (now - this.fpsTime)));
      this.frameTimeMs = (now - this.fpsTime) / this.fpsFrames;
      this.fpsFrames = 0;
      this.fpsTime = now;
    }

    this.updateModeButtons();
    this._updateCompassAndTelemetry();
    this._updateMinimap();
  }
}
