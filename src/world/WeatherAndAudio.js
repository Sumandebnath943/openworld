// ============================================================================
// AETHERIA OPEN WORLD ENGINE - GPU Weather Particles & Procedural Audio
// Camera-Wrapped Rain/Snow Shader + Web Audio API Soundscape & Vehicle Synth
// ============================================================================

import * as THREE from 'three';
import { MODES } from './TraversalController.js';
import { clamp, lerp } from './Noise.js';

export class WeatherAndAudio {
  constructor(scene, atmosphere) {
    this.scene = scene;
    this.atmosphere = atmosphere;

    this.masterVolume = 0.55;
    this.audioInitialized = false;
    this.lastStepPhase = 0;

    this._initWeatherParticles();
  }

  _initWeatherParticles() {
    const count = 8000;
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 140.0;
      positions[i * 3 + 1] = Math.random() * 80.0;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 140.0;
      seeds[i] = Math.random();
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

    this.weatherUniforms = {
      uTime: { value: 0 },
      uCameraPos: { value: new THREE.Vector3() },
      uMode: { value: 0.0 }, // 0 = off, 1 = rain, 2 = snow
      uIntensity: { value: 0.0 }
    };

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: this.weatherUniforms,
      vertexShader: /* glsl */ `
        attribute float aSeed;
        uniform float uTime;
        uniform vec3 uCameraPos;
        uniform float uMode;
        uniform float uIntensity;

        varying float vAlpha;
        varying float vMode;

        void main() {
          vMode = uMode;
          if (uIntensity < 0.01) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            gl_PointSize = 0.0;
            return;
          }

          float fallSpeed = uMode > 1.5 ? 6.5 : 34.0;
          vec3 p = position;
          p.y -= uTime * fallSpeed * (0.8 + aSeed * 0.4);
          if (uMode > 1.5) {
            p.x += sin(uTime * 1.8 + aSeed * 25.0) * 3.0;
            p.z += cos(uTime * 1.5 + aSeed * 19.0) * 3.0;
          } else {
            p.x += uTime * 3.5;
          }

          // Wrap particles continuously in a 140x80x140 volume around camera
          vec3 boxSize = vec3(140.0, 80.0, 140.0);
          vec3 rel = mod(p - uCameraPos + boxSize * 0.5, boxSize) - boxSize * 0.5;
          vec3 worldPos = uCameraPos + rel;

          vec4 mvPos = modelViewMatrix * vec4(worldPos, 1.0);
          gl_Position = projectionMatrix * mvPos;

          float dist = length(rel);
          vAlpha = (1.0 - smoothstep(35.0, 68.0, dist)) * uIntensity;
          gl_PointSize = (uMode > 1.5 ? 4.2 : 2.6) * (60.0 / max(-mvPos.z, 5.0));
        }
      `,
      fragmentShader: /* glsl */ `
        precision mediump float;
        varying float vAlpha;
        varying float vMode;

        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          vec3 col = vMode > 1.5 ? vec3(0.95, 0.98, 1.0) : vec3(0.72, 0.84, 0.96);
          float alpha = (1.0 - d * 2.0) * vAlpha * (vMode > 1.5 ? 0.85 : 0.55);
          gl_FragColor = vec4(col, alpha);
        }
      `
    });

    this.weatherPoints = new THREE.Points(geo, mat);
    this.weatherPoints.frustumCulled = false;
    this.scene.add(this.weatherPoints);
  }

  initAudio() {
    if (this.audioInitialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.masterVolume;
      this.masterGain.connect(this.ctx.destination);

      // Create looping 3-second noise buffer for Wind & Ocean Surf
      const sampleRate = this.ctx.sampleRate;
      const bufLen = sampleRate * 3;
      const noiseBuf = this.ctx.createBuffer(1, bufLen, sampleRate);
      const data = noiseBuf.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufLen; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.997 * b0 + white * 0.029;
        b1 = 0.985 * b1 + white * 0.032;
        b2 = 0.950 * b2 + white * 0.045;
        data[i] = (b0 + b1 + b2 + white * 0.05) * 0.35;
      }

      // 1. Wind Channel
      const windSource = this.ctx.createBufferSource();
      windSource.buffer = noiseBuf;
      windSource.loop = true;
      this.windFilter = this.ctx.createBiquadFilter();
      this.windFilter.type = 'bandpass';
      this.windFilter.frequency.value = 320;
      this.windFilter.Q.value = 1.8;
      this.windGain = this.ctx.createGain();
      this.windGain.gain.value = 0.08;
      windSource.connect(this.windFilter).connect(this.windGain).connect(this.masterGain);
      windSource.start();

      // 2. Ocean Surf Channel
      const oceanSource = this.ctx.createBufferSource();
      oceanSource.buffer = noiseBuf;
      oceanSource.loop = true;
      this.oceanFilter = this.ctx.createBiquadFilter();
      this.oceanFilter.type = 'lowpass';
      this.oceanFilter.frequency.value = 240;
      this.oceanGain = this.ctx.createGain();
      this.oceanGain.gain.value = 0.05;
      oceanSource.connect(this.oceanFilter).connect(this.oceanGain).connect(this.masterGain);
      oceanSource.start();

      // 3. Vehicle / Drone Engine Synth Channel
      this.engineOsc = this.ctx.createOscillator();
      this.engineOsc.type = 'sawtooth';
      this.engineOsc.frequency.value = 55;
      this.engineFilter = this.ctx.createBiquadFilter();
      this.engineFilter.type = 'lowpass';
      this.engineFilter.frequency.value = 180;
      this.engineGain = this.ctx.createGain();
      this.engineGain.gain.value = 0.0;
      this.engineOsc.connect(this.engineFilter).connect(this.engineGain).connect(this.masterGain);
      this.engineOsc.start();

      this.audioInitialized = true;
    } catch (err) {
      // Ignore if browser blocks audio before interaction
    }
  }

  setVolume(val) {
    this.masterVolume = clamp(val, 0, 1);
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.masterVolume, this.ctx.currentTime, 0.05);
    }
  }

  _triggerFootstep() {
    if (!this.audioInitialized || !this.ctx || this.masterVolume < 0.01) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(115, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.07);
    g.gain.setValueAtTime(0.11, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(g).connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.085);
  }

  update(dt, traversal) {
    const elapsed = performance.now() * 0.001;
    const pos = traversal.position;
    const preset = this.atmosphere.state.weatherPreset;

    // Update GPU Weather Particles
    this.weatherUniforms.uTime.value = elapsed;
    this.weatherUniforms.uCameraPos.value.copy(traversal.camera.position);

    if (preset === 'storm') {
      this.weatherUniforms.uMode.value = 1.0; // Rain
      this.weatherUniforms.uIntensity.value = 0.9;
    } else if (preset === 'blizzard' || (pos.y > 380.0 && this.atmosphere.state.cloudCoverage > 0.6)) {
      this.weatherUniforms.uMode.value = 2.0; // Snow
      this.weatherUniforms.uIntensity.value = 0.95;
    } else {
      this.weatherUniforms.uIntensity.value = lerp(this.weatherUniforms.uIntensity.value, 0.0, dt * 3.0);
    }

    // Update Procedural Web Audio
    if (!this.audioInitialized || !this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const speed = traversal.speedMs;

    // Wind scales with altitude, storm, and player speed
    const altFactor = clamp(pos.y / 600.0, 0.0, 1.0);
    const speedFactor = clamp(speed / 120.0, 0.0, 1.0);
    const windLevel = clamp(0.04 + altFactor * 0.16 + speedFactor * 0.25 + this.atmosphere.state.stormFactor * 0.22, 0.02, 0.55);
    this.windGain.gain.setTargetAtTime(windLevel, now, 0.1);
    this.windFilter.frequency.setTargetAtTime(250 + altFactor * 420 + speedFactor * 680, now, 0.1);

    // Ocean wave swell when near sea level
    const nearWater = clamp(1.0 - Math.abs(pos.y) / 48.0, 0.0, 1.0);
    const swell = (Math.sin(elapsed * 0.95) * 0.5 + 0.5) * nearWater * 0.18;
    this.oceanGain.gain.setTargetAtTime(swell, now, 0.15);
    this.oceanFilter.frequency.setTargetAtTime(160 + Math.sin(elapsed * 0.95) * 90, now, 0.15);

    // Vehicle / Drone Engine Synthesis
    if (traversal.mode === MODES.ROVER) {
      const rpmRatio = (speed / 18.0) % 1.0;
      const baseFreq = 46 + speed * 1.85 + rpmRatio * 24.0;
      this.engineOsc.type = 'sawtooth';
      this.engineOsc.frequency.setTargetAtTime(baseFreq, now, 0.06);
      this.engineFilter.frequency.setTargetAtTime(160 + speed * 8.0, now, 0.06);
      this.engineGain.gain.setTargetAtTime(0.05 + clamp(speed / 45.0, 0, 0.12), now, 0.08);
    } else if (traversal.mode === MODES.DRONE) {
      const jetFreq = 110 + clamp(speed * 0.85, 0, 340);
      this.engineOsc.type = 'triangle';
      this.engineOsc.frequency.setTargetAtTime(jetFreq, now, 0.08);
      this.engineFilter.frequency.setTargetAtTime(420 + speed * 4.0, now, 0.08);
      this.engineGain.gain.setTargetAtTime(0.04 + clamp(speed / 300.0, 0, 0.1), now, 0.08);
    } else {
      this.engineGain.gain.setTargetAtTime(0.0, now, 0.1);
      // Trigger footsteps in Explorer mode
      if (traversal.onGround && speed > 0.6) {
        const phase = Math.floor(traversal.walkCycle / Math.PI);
        if (phase !== this.lastStepPhase) {
          this.lastStepPhase = phase;
          this._triggerFootstep();
        }
      }
    }
  }
}
