// ============================================================================
// AETHERIA: CONTINENT-SCALE 65,536 KM² HYPER-REALISTIC 3D OPEN WORLD ENGINE
// Main Application Bootstrap & Render Loop
// ============================================================================

import * as THREE from 'three';
import { WorldGenerator } from './world/WorldGenerator.js';
import { AtmosphereAndWater } from './world/AtmosphereAndWater.js';
import { TerrainManager } from './world/TerrainManager.js';
import { WorldElements } from './world/WorldElements.js';
import { TraversalController } from './world/TraversalController.js';
import { LifeSimulation } from './world/LifeSimulation.js';
import { WeatherAndAudio } from './world/WeatherAndAudio.js';
import { MapAndHUD } from './ui/MapAndHUD.js';

class AetheriaEngine {
  constructor() {
    this.canvas = document.getElementById('world-canvas');

    // WebGL2 Renderer with unified depth buffer across custom ShaderMaterials and PBR materials
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
      logarithmicDepthBuffer: false
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.8, 60000);

    // Initialize World Systems
    this.worldGen = new WorldGenerator(20261017);
    this.atmosphere = new AtmosphereAndWater(this.scene, this.worldGen, this.renderer);
    this.terrainManager = new TerrainManager(this.scene, this.worldGen, this.atmosphere);
    this.worldElements = new WorldElements(this.scene, this.worldGen, this.atmosphere);
    this.traversal = new TraversalController(this.camera, this.scene, this.worldGen, this.canvas);
    this.lifeSim = new LifeSimulation(this.scene, this.worldGen, this.atmosphere);
    this.weatherAudio = new WeatherAndAudio(this.scene, this.atmosphere);
    this.mapAndHUD = new MapAndHUD(
      this.worldGen,
      this.atmosphere,
      this.terrainManager,
      this.worldElements,
      this.traversal,
      this.weatherAudio,
      this.lifeSim
    );

    // Pre-build initial terrain LOD quadtree & instanced flora around spawn
    this.terrainManager.primeAround(this.traversal.position.x, this.traversal.position.z);
    this.worldElements.forceRefreshFoliage(this.traversal.position);

    this._bindWindowEvents();
    this._runPlaytestScenarioIfRequested();
    this.lastTime = performance.now();
    this._animate();
  }

  _runPlaytestScenarioIfRequested() {
    const params = new URLSearchParams(window.location.search);
    const scn = params.get('scn');
    if (!scn) return;

    const stepSim = (frames, dt = 0.033) => {
      for (let i = 0; i < frames; i++) {
        this.traversal.update(dt);
        this.atmosphere.update(dt, this.camera.position);
        this.lifeSim.update(dt, this.traversal.position);
        this.weatherAudio.update(dt, this.traversal);
        this.mapAndHUD.update(dt);
      }
      this.terrainManager.primeAround(this.traversal.position.x, this.traversal.position.z);
      this.terrainManager.update(this.camera.position);
      this.worldElements.forceRefreshFoliage(this.traversal.position);
      this.worldElements.update(0.033, this.camera.position);
      this.mapAndHUD.update(0.25);
    };

    if (scn === 'walk_npc') {
      // Walk along Solis Boulevard sidewalk & talk to nearest NPC
      this.traversal.setMode('explorer');
      this.traversal.teleportTo(-73.33, 207.8, 1.57);
      this.traversal.keys['KeyW'] = true;
      stepSim(25);
      this.traversal.keys['KeyW'] = false;
      // Move right next to the closest city NPC so we can test live dialogue & proximity banner
      if (this.lifeSim.nearestNpc) {
        const npcPos = this.lifeSim.nearestNpc.rig.root.position;
        this.traversal.position.set(npcPos.x + 1.8, npcPos.y, npcPos.z - 1.6);
        this.traversal.yaw = Math.atan2(this.traversal.position.x - npcPos.x, this.traversal.position.z - npcPos.z);
      }
      stepSim(10);
      this.lifeSim.interactWithNearestNpc();
      stepSim(5);
    } else if (scn === 'car_bridge') {
      // Drive 4x4 Grand Tourer onto Golden Bay Suspension Bridge
      this.traversal.setMode('rover');
      this.traversal.teleportTo(-235, 217.0, 1.57);
      this.traversal.keys['KeyW'] = true;
      this.traversal.keys['ShiftLeft'] = true;
      stepSim(72);
      this.traversal.keys['KeyW'] = false;
      this.traversal.keys['ShiftLeft'] = false;
    } else if (scn === 'plane_takeoff') {
      // Roll down Solis Coastal Airport Runway and take off in Twin-Jet Airplane
      this.traversal.setMode('drone');
      this.traversal.teleportTo(495, 220.0, -1.57);
      this.traversal.keys['ShiftLeft'] = true;
      this.traversal.keys['Space'] = true;
      stepSim(68);
      this.traversal.keys['KeyA'] = true;
      stepSim(18);
      this.traversal.keys['ShiftLeft'] = false;
      this.traversal.keys['Space'] = false;
      this.traversal.keys['KeyA'] = false;
    } else if (scn === 'hike_village') {
      // Hike Oakhaven Alpine Village Trail alongside mountaineer NPCs
      this.traversal.setMode('explorer');
      this.traversal.teleportTo(1820, -1460, 0.72);
      this.traversal.keys['KeyW'] = true;
      stepSim(45);
      this.traversal.keys['KeyW'] = false;
      if (this.lifeSim.nearestNpc && this.lifeSim.nearestNpcDist < 14) {
        this.lifeSim.interactWithNearestNpc();
      }
      stepSim(5);
    } else if (scn === 'golden_canyon') {
      // Drive across Redstone Canyon Arch Viaduct at Golden Hour
      this.atmosphere.applyWeatherPreset('golden');
      this.traversal.setMode('rover');
      this.traversal.teleportTo(-2600, -1575, 0.0);
      this.traversal.keys['KeyW'] = true;
      stepSim(60);
      this.traversal.keys['KeyW'] = false;
    } else if (scn === 'worldmap') {
      stepSim(10);
      this.mapAndHUD.toggleWorldMap(true);
      this.mapAndHUD.renderWorldMap();
    } else if (scn === 'spacex_launch') {
      // Board Starship at SpaceX Starbase OLM Pad and launch into Low Earth Orbit
      this.traversal.setMode('rocket');
      this.traversal.teleportTo(1050, 880, 0.0);
      this.traversal.keys['ShiftLeft'] = true;
      this.traversal.keys['Space'] = true;
      stepSim(60);
      this.traversal.keys['KeyW'] = true;
      stepSim(40);
      this.traversal.keys['ShiftLeft'] = false;
      this.traversal.keys['Space'] = false;
      this.traversal.keys['KeyW'] = false;
    } else if (scn === 'space_moon') {
      // Fast travel to Moon / Artemis Lunar Base
      this.traversal.setMode('rocket');
      this.traversal.teleportTo(14000, -12000, 0.0);
      this.traversal.position.y = 16400;
      stepSim(25);
    }

    console.log(
      'PLAYTEST_STATE:',
      JSON.stringify({
        scn,
        mode: this.traversal.mode,
        pos: {
          x: Math.round(this.traversal.position.x * 10) / 10,
          y: Math.round(this.traversal.position.y * 10) / 10,
          z: Math.round(this.traversal.position.z * 10) / 10
        },
        speedKmh: Math.round(this.traversal.speedMs * 3.6),
        gear: this.traversal.currentGear,
        rpm: this.traversal.engineRpm,
        nearestNpc: this.lifeSim.nearestNpc ? this.lifeSim.nearestNpc.name : null,
        nearestNpcDist: Math.round(this.lifeSim.nearestNpcDist * 10) / 10,
        dialogueActive: Boolean(this.lifeSim.activeDialogue)
      })
    );
  }

  _bindWindowEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const enterBtn = document.getElementById('btn-enter-world');
    const welcomeOverlay = document.getElementById('welcome-overlay');
    if (enterBtn && welcomeOverlay) {
      enterBtn.addEventListener('click', () => {
        welcomeOverlay.classList.add('hidden');
        this.weatherAudio.initAudio();
        try {
          this.canvas.requestPointerLock();
        } catch (err) {
          // Fallback to drag look if pointer lock is unavailable
        }
      });
    }

    this.canvas.addEventListener('dblclick', () => {
      this.weatherAudio.initAudio();
      if (!document.pointerLockElement && !this.mapAndHUD.mapOpen) {
        try {
          this.canvas.requestPointerLock();
        } catch (err) {
          // Ignore
        }
      }
    });
  }

  _animate() {
    requestAnimationFrame(() => this._animate());

    const now = performance.now();
    const dt = Math.min((now - this.lastTime) * 0.001, 0.1);
    this.lastTime = now;

    // Dynamic camera far plane in outer space so all celestial bodies remain crisp and visible
    const inSpace = this.camera.position.y > 6000.0;
    const desiredFar = inSpace ? 120000.0 : 60000.0;
    if (this.camera.far !== desiredFar) {
      this.camera.far = desiredFar;
      this.camera.updateProjectionMatrix();
    }

    this.traversal.update(dt);
    this.atmosphere.update(dt, this.camera.position);
    this.terrainManager.update(this.camera.position, this.traversal);
    this.worldElements.update(dt, this.camera.position);
    this.lifeSim.update(dt, this.traversal.position);
    this.weatherAudio.update(dt, this.traversal);
    this.mapAndHUD.update(dt);

    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.aetheria = new AetheriaEngine();
});
