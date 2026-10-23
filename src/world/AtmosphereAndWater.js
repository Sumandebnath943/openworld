// ============================================================================
// AETHERIA OPEN WORLD ENGINE - Dynamic Sky, Volumetric Clouds & Ocean Shader
// Rayleigh/Mie Atmospheric Scattering, Raymarched Clouds, Starfield, Aurora,
// and Gerstner Wave Ocean with Fresnel Reflections & Shoreline Foam
// ============================================================================

import * as THREE from 'three';
import { WATER_LEVEL } from './WorldGenerator.js';

export class AtmosphereAndWater {
  constructor(scene, worldGen, renderer = null) {
    this.scene = scene;
    this.worldGen = worldGen;
    this.renderer = renderer;

    // Environment state controlled by Studio HUD
    this.state = {
      timeOfDay: 10.2,      // 0..24 hours (10.2 = crisp morning light, 17.6 = golden hour)
      timeSpeed: 0.08,      // hours per real second (can be 0 for paused or fast-forward)
      cloudCoverage: 0.46,  // 0..1
      cloudDensity: 0.72,   // 0..1
      waveHeight: 1.0,      // 0..2.5 multiplier
      fogDensity: 0.00009,
      weatherPreset: 'clear',
      stormFactor: 0.0,
      wetness: 0.0,
      snowLineOffset: 0.0
    };

    this.sunDirection = new THREE.Vector3(0.5, 0.7, 0.3).normalize();
    this.skyColorHorizon = new THREE.Color(0x9ec5e8);
    this.skyColorZenith = new THREE.Color(0x1e5799);
    this.sunColor = new THREE.Color(0xfff4e0);

    this._initLights();
    this._initSkyDome();
    this._initOceanMesh();
    this._initEnvironmentAndFog();
  }

  _initLights() {
    // Primary Sun / Moon directional light with high-res shadow map
    this.dirLight = new THREE.DirectionalLight(0xfff6eb, 2.6);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.mapSize.width = 4096;
    this.dirLight.shadow.mapSize.height = 4096;
    this.dirLight.shadow.camera.near = 10;
    this.dirLight.shadow.camera.far = 1400;
    const d = 340;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;
    this.dirLight.shadow.bias = -0.00006;
    this.dirLight.shadow.normalBias = 0.035;
    this.dirLight.shadow.radius = 2.0;
    this.scene.add(this.dirLight);
    this.scene.add(this.dirLight.target);

    // Hemisphere ambient fill light (sky zenith -> ground bounce)
    this.hemiLight = new THREE.HemisphereLight(0xb4d8f8, 0x3d382e, 0.85);
    this.scene.add(this.hemiLight);
  }

  // Bakes the live procedural sky into a prefiltered (PMREM) environment so every PBR surface
  // (car paint, chrome, glass, steel, hulls) reflects the real sky instead of reading as flat black,
  // and adds exponential aerial-perspective fog so PBR meshes blend into the horizon like the terrain does.
  _initEnvironmentAndFog() {
    this.scene.fog = new THREE.FogExp2(this.skyColorHorizon.clone(), this.state.fogDensity);

    this.envTarget = null;
    this.envTimer = 999.0;
    if (!this.renderer) return;

    this.pmrem = new THREE.PMREMGenerator(this.renderer);
    this.envScene = new THREE.Scene();
    // Re-uses the sky ShaderMaterial (shared uniforms) on a small sphere for the cube capture
    const envSkyMesh = new THREE.Mesh(new THREE.SphereGeometry(1000, 32, 20), this.skyMesh.material);
    envSkyMesh.frustumCulled = false;
    this.envScene.add(envSkyMesh);
  }

  _refreshEnvironment() {
    if (!this.pmrem) return;
    const prevTarget = this.envTarget;
    const nextTarget = this.pmrem.fromScene(this.envScene, 0, 1, 5000);
    this.envTarget = nextTarget;
    this.scene.environment = nextTarget.texture;
    if (prevTarget) prevTarget.dispose();
  }


  _initSkyDome() {
    const skyGeo = new THREE.SphereGeometry(36000, 64, 40);

    this.skyUniforms = {
      uTime: { value: 0 },
      uAltitude: { value: 12.0 },
      uSunDir: { value: this.sunDirection.clone() },
      uCloudCoverage: { value: this.state.cloudCoverage },
      uCloudDensity: { value: this.state.cloudDensity },
      uStormFactor: { value: 0.0 },
      uHorizonColor: { value: this.skyColorHorizon },
      uZenithColor: { value: this.skyColorZenith },
      uSunColor: { value: this.sunColor }
    };

    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: this.skyUniforms,
      vertexShader: /* glsl */ `
        varying vec3 vWorldPos;
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        varying vec3 vWorldPos;
        varying vec3 vDir;

        uniform float uTime;
        uniform float uAltitude;
        uniform vec3 uSunDir;
        uniform float uCloudCoverage;
        uniform float uCloudDensity;
        uniform float uStormFactor;
        uniform vec3 uHorizonColor;
        uniform vec3 uZenithColor;
        uniform vec3 uSunColor;

        // Fast 3D hash & value noise for clouds and stars
        float hash31(vec3 p) {
          p = fract(p * vec3(443.897, 441.423, 437.195));
          p += dot(p, p.yzx + 19.19);
          return fract((p.x + p.y) * p.z);
        }

        float noise3D(vec3 x) {
          vec3 i = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), f.x),
                mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
            mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
                mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y),
            f.z
          );
        }

        float cloudFBM(vec3 p) {
          float v = 0.0;
          float a = 0.52;
          for (int i = 0; i < 5; i++) {
            v += a * noise3D(p);
            p = p * 2.07 + vec3(13.1, 7.7, 19.3);
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec3 dir = normalize(vDir);
          float elevation = max(dir.y, 0.0);
          float spaceWeight = smoothstep(1400.0, 9500.0, uAltitude);

          // 1. Base Rayleigh + Mie atmospheric gradient (fades to cosmic vacuum in space)
          float horizonPow = pow(1.0 - elevation, 2.8);
          vec3 skyCol = mix(uZenithColor, uHorizonColor, horizonPow);
          skyCol = mix(skyCol, vec3(0.003, 0.005, 0.010), spaceWeight * 0.98);

          // 2. Solar / Mie forward scatter glow
          float sunDot = dot(dir, uSunDir);
          float mie = pow(clamp(sunDot, 0.0, 1.0), 8.0) * 0.45 + pow(clamp(sunDot, 0.0, 1.0), 64.0) * 0.6;
          skyCol += uSunColor * mie * (1.0 - uStormFactor * 0.75) * (1.0 - spaceWeight * 0.7);

          // Crispy solar disc (blazing diamond in space)
          float sunDisc = smoothstep(0.99935, 0.99975, sunDot);
          skyCol += uSunColor * sunDisc * 3.8 * (1.0 - uStormFactor * 0.85);

          // 3. Starfield in Space and at Night
          float nightWeight = smoothstep(0.12, -0.15, uSunDir.y);
          float starFactor = max(nightWeight, spaceWeight);
          if (starFactor > 0.01 && dir.y > -0.2) {
            vec3 starGrid = floor(dir * 520.0);
            float sh = hash31(starGrid);
            float star = smoothstep(0.992, 0.9995, sh);
            float twinkle = 0.75 + 0.25 * sin(uTime * 3.0 + sh * 100.0);
            skyCol += vec3(0.9, 0.95, 1.0) * star * twinkle * starFactor * (1.0 - uStormFactor * (1.0 - spaceWeight));

            // Photorealistic Procedural Moon in the Night Sky (Real Maria, Tycho Craters & Retroreflective Regolith)
            vec3 moonCenterDir = -uSunDir;
            float dForward = dot(dir, moonCenterDir);

            // Construct 2D disk tangent frame
            vec3 moonUp = abs(moonCenterDir.y) > 0.95 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
            vec3 moonRight = normalize(cross(moonCenterDir, moonUp));
            moonUp = cross(moonRight, moonCenterDir);

            // Apparent angular radius on the sky: ~1.1 degrees (prominent, majestic, authentic)
            float lunarRadius = 0.022;
            vec2 moonUV = vec2(dot(dir, moonRight), dot(dir, moonUp)) / lunarRadius;
            float distToMoonCenter = length(moonUV);

            // Atmospheric lunar corona & soft halo surrounding the moon
            float corona = pow(clamp(dForward, 0.0, 1.0), 400.0) * 0.45 +
                           pow(clamp(dForward, 0.0, 1.0), 65.0) * 0.18;
            skyCol += vec3(0.75, 0.86, 1.0) * corona * nightWeight * (1.0 - uStormFactor * 0.7);

            if (distToMoonCenter < 1.02) {
              float discMask = smoothstep(1.0, 0.96, distToMoonCenter);

              // 1. Lunar Highlands: Silver-gray anorthosite regolith
              float highlandFBM = noise3D(vec3(moonUV * 14.0, 1.5)) * 0.55 +
                                  noise3D(vec3(moonUV * 36.0, 4.2)) * 0.32 +
                                  noise3D(vec3(moonUV * 88.0, 8.7)) * 0.13;
              vec3 highlandCol = mix(vec3(0.75, 0.78, 0.82), vec3(0.92, 0.94, 0.96), highlandFBM);

              // 2. Basaltic Dark Maria ("The Man in the Moon" Seas)
              // Oceanus Procellarum, Mare Imbrium, Mare Serenitatis, Tranquillitatis, Crisium, Fecunditatis
              float maria = 0.0;
              maria += smoothstep(0.48, 0.0, length(moonUV - vec2(-0.28, 0.26))) * 0.88;  // Mare Imbrium
              maria += smoothstep(0.55, 0.0, length(moonUV - vec2(-0.46, 0.04))) * 0.82;  // Oceanus Procellarum
              maria += smoothstep(0.35, 0.0, length(moonUV - vec2(0.12, 0.28))) * 0.85;   // Mare Serenitatis
              maria += smoothstep(0.38, 0.0, length(moonUV - vec2(0.28, 0.08))) * 0.88;   // Mare Tranquillitatis
              maria += smoothstep(0.19, 0.0, length(moonUV - vec2(0.60, 0.18))) * 0.95;   // Mare Crisium (isolated sea)
              maria += smoothstep(0.32, 0.0, length(moonUV - vec2(0.34, -0.25))) * 0.75;  // Mare Fecunditatis
              maria += smoothstep(0.38, 0.0, length(moonUV - vec2(-0.24, -0.32))) * 0.78; // Mare Nubium & Humorum

              // Fractal shoreline turbulence
              float mariaNoise = noise3D(vec3(moonUV * 9.0, 2.7)) * 0.65 + noise3D(vec3(moonUV * 26.0, 5.1)) * 0.35;
              maria = clamp(maria * (0.65 + 0.7 * mariaNoise), 0.0, 1.0);
              vec3 mariaCol = mix(vec3(0.24, 0.26, 0.28), vec3(0.34, 0.36, 0.39), mariaNoise);

              vec3 moonSurf = mix(highlandCol, mariaCol, maria * 0.88);

              // 3. Impact Craters with Brilliant Ejecta Ray Systems
              // Tycho Crater at South Pole with radial rays streaming across the southern hemisphere
              vec2 tychoPos = vec2(-0.06, -0.66);
              float dTycho = length(moonUV - tychoPos);
              float tychoAngle = atan(moonUV.y - tychoPos.y, moonUV.x - tychoPos.x);
              float tychoRays = pow(abs(sin(tychoAngle * 7.0 + sin(tychoAngle * 14.0) * 0.6)), 5.0) *
                                smoothstep(0.9, 0.05, dTycho);
              float tychoRim = smoothstep(0.045, 0.0, abs(dTycho - 0.038));
              moonSurf = mix(moonSurf, vec3(0.98, 0.99, 1.0), (tychoRays * 0.45 + tychoRim * 0.75));

              // Copernicus & Kepler Craters with bright ejecta halos
              float dCopernicus = length(moonUV - vec2(-0.22, 0.10));
              float copernicus = smoothstep(0.08, 0.0, dCopernicus) * 0.45 + smoothstep(0.025, 0.0, abs(dCopernicus - 0.025)) * 0.65;
              moonSurf = mix(moonSurf, vec3(0.96, 0.98, 1.0), copernicus);

              // 4. Lommel-Seeliger retroreflective regolith limb shading (crisp, luminous full moon disk)
              float retroLimb = mix(0.92, 1.06, pow(distToMoonCenter, 3.5));
              moonSurf *= retroLimb;

              // Composite Moon onto sky dome
              skyCol = mix(skyCol, moonSurf * 1.85, discMask * nightWeight * (1.0 - uStormFactor * 0.85));
            }

            // Northern Aurora Borealis ribbon (only in upper atmosphere)
            if (spaceWeight < 0.5) {
              float auroraCurtain = sin(dir.x * 8.0 + uTime * 0.15 + noise3D(dir * 4.0) * 3.0) * 0.5 + 0.5;
              float auroraMask = smoothstep(0.15, 0.55, dir.y) * (1.0 - smoothstep(0.55, 0.88, dir.y)) * smoothstep(0.0, -0.7, dir.z);
              vec3 auroraCol = mix(vec3(0.05, 0.85, 0.45), vec3(0.35, 0.2, 0.9), dir.y);
              skyCol += auroraCol * pow(auroraCurtain, 3.0) * auroraMask * nightWeight * 0.38 * (1.0 - uStormFactor);
            }
          }

          // 4. Raymarched Multi-Sample Volumetric Cloud Dome
          if (dir.y > 0.015 && uCloudCoverage > 0.01) {
            vec3 wind = vec3(uTime * 0.014, 0.0, uTime * 0.008);
            // Project ray onto curved cloud shell
            float cloudPlaneDist = 2.4 / (dir.y + 0.08);
            vec3 cloudPos = dir * cloudPlaneDist + wind;

            float density = 0.0;
            float lightAccum = 0.0;
            const int STEPS = 4;
            for (int s = 0; s < STEPS; s++) {
              float fi = float(s) / float(STEPS);
              vec3 samplePos = cloudPos * 0.85 + dir * (fi * 0.35) + wind * (1.0 + fi * 0.2);
              float n = cloudFBM(samplePos);
              float thresh = 1.0 - uCloudCoverage * 0.82;
              float d = smoothstep(thresh, thresh + 0.32, n);
              density += d * (1.0 / float(STEPS));

              // Sample toward sun for volumetric self-shadowing
              float sunSample = cloudFBM(samplePos + uSunDir * 0.22);
              float shadow = smoothstep(thresh - 0.05, thresh + 0.35, sunSample);
              lightAccum += (1.0 - shadow * 0.72) * (1.0 / float(STEPS));
            }

            density = clamp(density * uCloudDensity * 1.45, 0.0, 1.0);
            // Fade clouds smoothly near the very flat horizon
            float horizonFade = smoothstep(0.015, 0.14, dir.y);
            density *= horizonFade;

            // Cloud illumination: sunlit top + silver lining + atmospheric base shadow
            float silverLining = pow(clamp(sunDot, 0.0, 1.0), 10.0) * 0.65;
            vec3 cloudBaseColor = mix(uZenithColor * 0.45 + vec3(0.08), uHorizonColor * 0.72, 0.5);
            cloudBaseColor = mix(cloudBaseColor, vec3(0.14, 0.16, 0.20), uStormFactor * 0.85);
            vec3 cloudLitColor = uSunColor * (0.85 + silverLining);
            vec3 finalCloudColor = mix(cloudBaseColor, cloudLitColor, clamp(lightAccum + silverLining * 0.5, 0.12, 1.0));

            skyCol = mix(skyCol, finalCloudColor, density * 0.94);
          }

          // Below horizon bounce (blended smoothly across the horizon line instead of a hard snap)
          float belowHorizon = smoothstep(0.012, -0.012, dir.y);
          vec3 groundBounce = mix(uHorizonColor, vec3(0.04, 0.09, 0.15), clamp(-dir.y * 4.0, 0.0, 1.0));
          skyCol = mix(skyCol, groundBounce, belowHorizon);

          // Per-pixel noise dither to eliminate gradient banding
          float dither = hash31(vec3(gl_FragCoord.xy, fract(uTime) * 64.0)) - 0.5;
          skyCol += dither * (1.5 / 255.0);

          gl_FragColor = vec4(skyCol, 1.0);
        }
      `
    });

    this.skyMesh = new THREE.Mesh(skyGeo, skyMat);
    this.skyMesh.frustumCulled = false;
    this.scene.add(this.skyMesh);
  }

  _initOceanMesh() {
    // High-resolution inner ocean plane + massive outer horizon water
    const waterGeo = new THREE.PlaneGeometry(36000, 36000, 220, 220);
    waterGeo.rotateX(-Math.PI / 2);

    this.waterUniforms = {
      uTime: { value: 0 },
      uWaveHeight: { value: this.state.waveHeight },
      uSunDir: { value: this.sunDirection.clone() },
      uSunColor: { value: this.sunColor },
      uSkyHorizon: { value: this.skyColorHorizon },
      uSkyZenith: { value: this.skyColorZenith },
      uCameraPos: { value: new THREE.Vector3() },
      uFogColor: { value: this.skyColorHorizon },
      uFogDensity: { value: this.state.fogDensity }
    };

    const waterMat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: this.waterUniforms,
      vertexShader: /* glsl */ `
        precision highp float;
        uniform float uTime;
        uniform float uWaveHeight;

        varying vec3 vWorldPos;
        varying float vWaveCrest;

        // Multi-directional Gerstner swell displacement
        vec3 gerstnerWave(vec2 pos, float steepness, float wavelength, vec2 dir, float time) {
          float k = 6.28318 / wavelength;
          float c = sqrt(9.8 / k);
          vec2 d = normalize(dir);
          float f = k * (dot(d, pos) - c * time);
          float a = steepness / k;
          return vec3(d.x * (a * cos(f)), a * sin(f), d.y * (a * cos(f)));
        }

        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vec2 xz = wp.xz;

          // Distance attenuation so distant horizon water stays alias-free
          float camDist = length(position.xz);
          float atten = (1.0 - smoothstep(1200.0, 8500.0, camDist)) * uWaveHeight;

          vec3 disp = vec3(0.0);
          if (atten > 0.001) {
            disp += gerstnerWave(xz, 0.16 * atten, 48.0, vec2(1.0, 0.35), uTime * 1.15);
            disp += gerstnerWave(xz, 0.12 * atten, 24.0, vec2(0.65, -0.75), uTime * 1.35);
            disp += gerstnerWave(xz, 0.09 * atten, 11.5, vec2(-0.4, 0.9), uTime * 1.65);
          }

          wp.xyz += disp;
          vWorldPos = wp.xyz;
          vWaveCrest = disp.y;

          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        varying vec3 vWorldPos;
        varying float vWaveCrest;

        uniform float uTime;
        uniform float uWaveHeight;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        uniform vec3 uSkyHorizon;
        uniform vec3 uSkyZenith;
        uniform vec3 uCameraPos;
        uniform vec3 uFogColor;
        uniform float uFogDensity;

        float hash21(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }

        float noise2(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = hash21(i);
          float b = hash21(i + vec2(1.0, 0.0));
          float c = hash21(i + vec2(0.0, 1.0));
          float d = hash21(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        // Analytical multi-scale wave surface normal
        vec3 getWaterNormal(vec2 xz, float dist) {
          float detailFade = 1.0 - smoothstep(200.0, 4500.0, dist);
          vec2 p1 = xz * 0.14 + vec2(uTime * 0.45, uTime * 0.28);
          vec2 p2 = xz * 0.37 + vec2(-uTime * 0.35, uTime * 0.52);
          vec2 p3 = xz * 1.15 + vec2(uTime * 0.8, -uTime * 0.6);

          float h0 = noise2(p1) * 0.55 + noise2(p2) * 0.3 + noise2(p3) * 0.15 * detailFade;
          float hx = noise2(p1 + vec2(0.08, 0.0)) * 0.55 + noise2(p2 + vec2(0.08, 0.0)) * 0.3;
          float hz = noise2(p1 + vec2(0.0, 0.08)) * 0.55 + noise2(p2 + vec2(0.0, 0.08)) * 0.3;

          float bumpStrength = (0.28 + 0.18 * uWaveHeight) * (0.25 + 0.75 * detailFade);
          vec3 n = normalize(vec3((h0 - hx) * bumpStrength * 12.0, 1.0, (h0 - hz) * bumpStrength * 12.0));
          return n;
        }

        void main() {
          vec3 viewVec = uCameraPos - vWorldPos;
          float dist = length(viewVec);
          vec3 V = viewVec / max(dist, 0.001);

          vec3 N = getWaterNormal(vWorldPos.xz, dist);
          vec3 R = reflect(-V, N);

          // Schlick Fresnel reflection factor (physical water F0 ~ 0.02)
          float NoV = max(dot(N, V), 0.0);
          float fresnel = 0.02 + 0.98 * pow(1.0 - NoV, 5.0);

          // Sky reflection color including the sun's forward-scattered atmospheric glow
          vec3 skyRefl = mix(uSkyHorizon, uSkyZenith, clamp(R.y * 1.4, 0.0, 1.0));
          float sunGlowRefl = pow(clamp(dot(R, uSunDir), 0.0, 1.0), 24.0) * 0.35 + pow(clamp(dot(R, uSunDir), 0.0, 1.0), 220.0) * 1.2;
          skyRefl += uSunColor * sunGlowRefl * smoothstep(-0.05, 0.2, uSunDir.y);

          // Deep ocean vs turquoise subsurface scattering
          float sss = pow(clamp(dot(V, -uSunDir + N * 0.5), 0.0, 1.0), 3.0) * max(uSunDir.y, 0.0);
          vec3 deepWater = vec3(0.018, 0.095, 0.19) * clamp(uSunDir.y * 1.4 + 0.25, 0.08, 1.0);
          vec3 turquoise = vec3(0.04, 0.38, 0.45) * clamp(uSunDir.y * 1.5 + 0.2, 0.08, 1.0);
          vec3 waterBody = mix(deepWater, turquoise, 0.32 + sss * 0.65);

          // Sun specular glitter trail across wave facets
          vec3 H = normalize(uSunDir + V);
          float NoH = max(dot(N, H), 0.0);
          float specTight = pow(NoH, 320.0) * 3.8;
          float specBroad = pow(NoH, 36.0) * 0.35;
          vec3 specular = uSunColor * (specTight + specBroad) * smoothstep(-0.05, 0.15, uSunDir.y);

          // Whitecap foam on high wave crests
          float crestFoam = smoothstep(0.38, 0.85, vWaveCrest) * noise2(vWorldPos.xz * 0.45 + uTime * 0.3);

          vec3 color = mix(waterBody, skyRefl, fresnel * 0.82) + specular;
          color = mix(color, vec3(0.92, 0.96, 1.0) * clamp(uSunDir.y + 0.35, 0.15, 1.0), clamp(crestFoam * 0.65, 0.0, 1.0));

          // Exponential distance fog matching terrain fog
          float fogFactor = 1.0 - exp(-pow(dist * uFogDensity * 0.85, 1.65));
          color = mix(color, uFogColor, clamp(fogFactor, 0.0, 1.0));

          gl_FragColor = vec4(color, 0.93);
        }
      `
    });

    this.waterMesh = new THREE.Mesh(waterGeo, waterMat);
    this.waterMesh.position.y = WATER_LEVEL;
    this.waterMesh.frustumCulled = false;
    this.scene.add(this.waterMesh);
  }

  applyWeatherPreset(preset) {
    this.state.weatherPreset = preset;
    switch (preset) {
      case 'clear':
        this.state.cloudCoverage = 0.35;
        this.state.cloudDensity = 0.65;
        this.state.fogDensity = 0.000075;
        this.state.waveHeight = 0.85;
        this.state.stormFactor = 0.0;
        this.state.wetness = 0.0;
        this.state.snowLineOffset = 0.0;
        break;
      case 'golden':
        this.state.timeOfDay = 17.65;
        this.state.cloudCoverage = 0.52;
        this.state.cloudDensity = 0.78;
        this.state.fogDensity = 0.00011;
        this.state.waveHeight = 0.95;
        this.state.stormFactor = 0.05;
        this.state.wetness = 0.15;
        this.state.snowLineOffset = 0.0;
        break;
      case 'storm':
        this.state.cloudCoverage = 0.92;
        this.state.cloudDensity = 0.95;
        this.state.fogDensity = 0.00028;
        this.state.waveHeight = 2.15;
        this.state.stormFactor = 0.85;
        this.state.wetness = 0.9;
        this.state.snowLineOffset = 0.0;
        break;
      case 'blizzard':
        this.state.cloudCoverage = 0.88;
        this.state.cloudDensity = 0.9;
        this.state.fogDensity = 0.00034;
        this.state.waveHeight = 1.45;
        this.state.stormFactor = 0.65;
        this.state.wetness = 0.3;
        this.state.snowLineOffset = -210.0; // Lower snowline across valleys!
        break;
      case 'mist':
        this.state.cloudCoverage = 0.68;
        this.state.cloudDensity = 0.75;
        this.state.fogDensity = 0.00042;
        this.state.waveHeight = 0.45;
        this.state.stormFactor = 0.35;
        this.state.wetness = 0.45;
        this.state.snowLineOffset = 0.0;
        break;
      case 'night':
        this.state.timeOfDay = 0.8;
        this.state.cloudCoverage = 0.22;
        this.state.cloudDensity = 0.5;
        this.state.fogDensity = 0.00008;
        this.state.waveHeight = 0.75;
        this.state.stormFactor = 0.0;
        this.state.wetness = 0.0;
        this.state.snowLineOffset = 0.0;
        break;
    }
  }

  update(dt, cameraPos) {
    // Advance time of day
    this.state.timeOfDay = (this.state.timeOfDay + dt * this.state.timeSpeed) % 24.0;
    if (this.state.timeOfDay < 0) this.state.timeOfDay += 24.0;

    const elapsed = performance.now() * 0.001;

    // Calculate Sun Azimuth & Elevation from timeOfDay (6:00 sunrise, 12:00 zenith, 18:00 sunset)
    const sunAngle = ((this.state.timeOfDay - 6.0) / 24.0) * Math.PI * 2.0;
    const sunY = Math.sin(sunAngle);
    const sunX = Math.cos(sunAngle) * 0.88;
    const sunZ = Math.sin(sunAngle * 0.5 + 0.6) * 0.48;
    this.sunDirection.set(sunX, sunY, sunZ).normalize();

    // Compute atmospheric colors across Night -> Dawn -> Day -> Sunset
    const dayFactor = THREE.MathUtils.smoothstep(sunY, -0.08, 0.32);
    const twilightFactor = Math.max(0.0, 1.0 - Math.abs(sunY - 0.04) * 5.0);
    const storm = this.state.stormFactor;

    // Zenith sky color
    const nightZenith = new THREE.Color(0x13233e); // Rich luminous indigo night sky with starlight
    const dayZenith = new THREE.Color(0x0f3460); // Deep rich royal blue
    const sunsetZenith = new THREE.Color(0x1e1e44);
    this.skyColorZenith.copy(nightZenith).lerp(dayZenith, dayFactor).lerp(sunsetZenith, twilightFactor * 0.65);
    this.skyColorZenith.lerp(new THREE.Color(0x1a212b), storm * 0.8);

    // Horizon sky color
    const nightHorizon = new THREE.Color(0x2d4668); // Soft luminous atmospheric twilight horizon
    const dayHorizon = new THREE.Color(0x8ec3ea); // Crisp atmospheric haze
    const sunsetHorizon = new THREE.Color(0xfb6d3b); // Warm golden sunset
    this.skyColorHorizon.copy(nightHorizon).lerp(dayHorizon, dayFactor).lerp(sunsetHorizon, twilightFactor * 0.88);
    this.skyColorHorizon.lerp(new THREE.Color(0x353e4a), storm * 0.82);

    // Sun / Moon Light Color & Intensity
    const noonSun = new THREE.Color(0xfff7ee);
    const goldenSun = new THREE.Color(0xff8c42);
    const moonLight = new THREE.Color(0xb0d0f5); // Radiant crisp silver-blue lunar illumination
    this.sunColor.copy(moonLight).lerp(noonSun, dayFactor).lerp(goldenSun, twilightFactor * 0.85);

    // Position directional light following player with true light-space shadow-texel stabilization
    const activeLightDir = sunY >= -0.05 ? this.sunDirection : this.sunDirection.clone().negate();
    const d = 340;
    const texelWorldSize = (d * 2.0) / this.dirLight.shadow.mapSize.width;

    // Build light view matrix at origin looking along activeLightDir
    const lightMatrix = new THREE.Matrix4().lookAt(
      new THREE.Vector3(0, 0, 0),
      activeLightDir.clone().negate(),
      new THREE.Vector3(0, 1, 0)
    );
    const invLightMatrix = lightMatrix.clone().invert();

    // Snap camera target position in light view space to prevent sub-texel shadow shimmering
    const lightSpacePos = cameraPos.clone().applyMatrix4(lightMatrix);
    lightSpacePos.x = Math.floor(lightSpacePos.x / texelWorldSize) * texelWorldSize;
    lightSpacePos.y = Math.floor(lightSpacePos.y / texelWorldSize) * texelWorldSize;
    const shadowCenter = lightSpacePos.applyMatrix4(invLightMatrix);

    this.dirLight.position.copy(shadowCenter).addScaledVector(activeLightDir, 600);
    this.dirLight.target.position.copy(shadowCenter);
    this.dirLight.target.updateMatrixWorld();
    this.dirLight.color.copy(this.sunColor);

    const baseIntensity = sunY >= -0.05 ? THREE.MathUtils.lerp(1.15, 2.65, dayFactor) : 1.35;
    this.dirLight.intensity = baseIntensity * (1.0 - storm * 0.58);

    this.hemiLight.color.copy(this.skyColorHorizon);
    this.hemiLight.groundColor.setHex(0x28231c).lerp(new THREE.Color(0x253347), 1.0 - dayFactor);
    // With the sky-derived environment map supplying physically-based ambient, the analytic hemisphere
    // fill only needs to act as a gentle lift (full strength when no environment is available).
    const hemiScale = this.pmrem ? 0.38 : 1.0;
    this.hemiLight.intensity = THREE.MathUtils.lerp(0.92, 1.05, dayFactor) * (1.0 - storm * 0.35) * hemiScale;

    // Keep sky dome & water centered smoothly around camera (no 64m stepping)
    this.skyMesh.position.copy(cameraPos);
    this.waterMesh.position.x = cameraPos.x;
    this.waterMesh.position.z = cameraPos.z;

    // Update shader uniforms
    this.skyUniforms.uTime.value = elapsed;
    this.skyUniforms.uAltitude.value = cameraPos.y;
    this.skyUniforms.uSunDir.value.copy(this.sunDirection);
    this.skyUniforms.uCloudCoverage.value = this.state.cloudCoverage;
    this.skyUniforms.uCloudDensity.value = this.state.cloudDensity;
    this.skyUniforms.uStormFactor.value = storm;

    this.waterUniforms.uTime.value = elapsed;
    this.waterUniforms.uWaveHeight.value = this.state.waveHeight;
    this.waterUniforms.uSunDir.value.copy(this.sunDirection);
    this.waterUniforms.uCameraPos.value.copy(cameraPos);
    this.waterUniforms.uFogColor.value.copy(this.skyColorHorizon);
    this.waterUniforms.uFogDensity.value = this.state.fogDensity;

    // Aerial-perspective fog for PBR meshes (matches terrain/water fog; fades out toward space)
    if (this.scene.fog) {
      const fogAltitudeFade = 1.0 - THREE.MathUtils.smoothstep(cameraPos.y, 1500.0, 6000.0);
      this.scene.fog.color.copy(this.skyColorHorizon);
      this.scene.fog.density = this.state.fogDensity * fogAltitudeFade;
    }

    // Refresh sky-derived image-based lighting at a throttled cadence
    this.envTimer += dt;
    if (this.pmrem && this.envTimer > 2.5) {
      this.envTimer = 0.0;
      this._refreshEnvironment();
    }
  }
}

