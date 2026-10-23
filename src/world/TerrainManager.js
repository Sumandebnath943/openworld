// ============================================================================
// AETHERIA OPEN WORLD ENGINE - Hyper-Realistic Terrain & Urban Surface Shader
// Multi-Octave Derivative Bump Normals, Triplanar Cliff Strata, Talus Scree,
// Urban Sidewalks, Crosswalks, Airport Runway Markings & Biome Blending
// ============================================================================

import * as THREE from 'three';

export class TerrainManager {
  constructor(scene, worldGen, atmosphere) {
    this.scene = scene;
    this.worldGen = worldGen;
    this.atmosphere = atmosphere;

    this.terrainGroup = new THREE.Group();
    this.scene.add(this.terrainGroup);

    this.chunkCache = new Map();
    this.activeKeys = new Set();
    this.buildQueue = [];
    this.maxCacheSize = 400;
    this.chunksPerFrame = 3;
    this.currentRequired = null;

    this.baseChunkSize = 128;
    this.maxLodLevel = 5;
    this.gridSegments = 32;

    this._initTerrainMaterial();
    this.lastUpdatePos = new THREE.Vector3(999999, 999999, 999999);
  }

  _initTerrainMaterial() {
    this.uniforms = {
      uTime: { value: 0 },
      uSunDir: { value: new THREE.Vector3(0.5, 0.7, 0.3) },
      uSunColor: { value: new THREE.Color(0xfff5e4) },
      uSkyHorizon: { value: new THREE.Color(0x9bc7eb) },
      uSkyZenith: { value: new THREE.Color(0x164e8f) },
      uCameraPos: { value: new THREE.Vector3() },
      uFogDensity: { value: 0.00008 },
      uWetness: { value: 0.0 },
      uSnowLineOffset: { value: 0.0 },
      uCloudCoverage: { value: 0.45 },
      uHeadlightPos: { value: new THREE.Vector3() },
      uHeadlightDir: { value: new THREE.Vector3(0, 0, -1) },
      uHeadlightPower: { value: 0.0 }
    };

    // Merge in three.js light + shadow uniforms so the custom terrain shader can sample the sun shadow map
    this.uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.lights, this.uniforms]);

    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      lights: true,
      vertexShader: /* glsl */ `
        precision highp float;
        #include <common>
        #include <shadowmap_pars_vertex>

        attribute vec4 aBiomeWeights; // x: canyon, y: desert, z: volcanic, w: roadMask
        attribute vec2 aClimate;      // x: moisture, y: cityWeight

        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec4 vBiomeWeights;
        varying vec2 vClimate;

        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormal = normalize(mat3(modelMatrix) * normal);
          vBiomeWeights = aBiomeWeights;
          vClimate = aClimate;

          // Inputs expected by the shadowmap_vertex chunk
          vec4 worldPosition = wp;
          vec3 transformedNormal = normalize(normalMatrix * normal);
          #include <shadowmap_vertex>

          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        #include <common>
        #include <packing>
        #include <lights_pars_begin>
        #include <shadowmap_pars_fragment>

        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec4 vBiomeWeights;
        varying vec2 vClimate;

        uniform float uTime;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        uniform vec3 uSkyHorizon;
        uniform vec3 uSkyZenith;
        uniform vec3 uCameraPos;
        uniform float uFogDensity;
        uniform float uWetness;
        uniform float uSnowLineOffset;
        uniform float uCloudCoverage;
        uniform vec3 uHeadlightPos;
        uniform vec3 uHeadlightDir;
        uniform float uHeadlightPower;

        float hash21(vec2 p) {
          p = fract(p * vec2(234.34, 435.345));
          p += dot(p, p + 34.23);
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

        float fbm4(vec2 p) {
          float v = 0.0;
          v += 0.5000 * noise2(p); p = p * 2.03 + vec2(17.1, 9.2);
          v += 0.2500 * noise2(p); p = p * 2.02 + vec2(5.4, 23.7);
          v += 0.1250 * noise2(p); p = p * 2.04 + vec2(11.8, 3.1);
          v += 0.0625 * noise2(p);
          return v / 0.9375;
        }

        void main() {
          vec3 viewVec = uCameraPos - vWorldPos;
          float dist = length(viewVec);
          vec3 V = viewVec / max(dist, 0.001);

          float h = vWorldPos.y;
          vec3 N = normalize(vNormal);
          float slope = 1.0 - clamp(N.y, 0.0, 1.0);

          // Multi-scale procedural surface detail (macro, meso, micro)
          float macroTex = fbm4(vWorldPos.xz * 0.015);
          float mesoTex = fbm4(vWorldPos.xz * 0.12);
          float microTex = mix(0.5, noise2(vWorldPos.xz * 1.45), 1.0 - smoothstep(60.0, 420.0, dist));
          float ultraMicro = mix(0.5, noise2(vWorldPos.xz * 6.5), 1.0 - smoothstep(18.0, 130.0, dist));

          // High-resolution micro-normal perturbation for realistic rock/soil/grass relief
          float detailFade = 1.0 - smoothstep(45.0, 900.0, dist);
          if (detailFade > 0.01) {
            vec2 mp = vWorldPos.xz * (slope > 0.18 ? 0.65 : 1.15);
            float h0 = fbm4(mp) + 0.25 * ultraMicro;
            float hx = fbm4(mp + vec2(0.12, 0.0)) + 0.25 * noise2((vWorldPos.xz + vec2(0.05, 0.0)) * 6.5);
            float hz = fbm4(mp + vec2(0.0, 0.12)) + 0.25 * noise2((vWorldPos.xz + vec2(0.0, 0.05)) * 6.5);
            float bumpAmp = mix(1.6, 3.2, clamp(slope * 2.5, 0.0, 1.0)) * (1.0 - vBiomeWeights.w * 0.88);
            vec3 microPerturb = vec3(h0 - hx, 0.0, h0 - hz) * bumpAmp * detailFade;
            N = normalize(N + microPerturb);
          }

          // 1. Realistic Organic Botanical Grass, Fescue, & Forest Humus
          vec3 lushGrass = mix(vec3(0.12, 0.22, 0.08), vec3(0.18, 0.28, 0.11), macroTex);
          vec3 dryPatch = vec3(0.29, 0.27, 0.16);
          lushGrass = mix(lushGrass, dryPatch, smoothstep(0.58, 0.88, mesoTex) * 0.40);
          lushGrass *= (0.86 + 0.22 * microTex);

          vec3 forestFloor = mix(vec3(0.09, 0.16, 0.07), vec3(0.19, 0.15, 0.10), mesoTex);
          vec3 grassCol = mix(lushGrass, forestFloor, smoothstep(0.40, 0.72, vClimate.x));

          // Talus & fertile loam scree on moderate slopes (0.06 .. 0.19)
          float dirtSlope = smoothstep(0.06, 0.19, slope);
          vec3 soilCol = mix(vec3(0.22, 0.18, 0.13), vec3(0.33, 0.28, 0.20), mesoTex);
          grassCol = mix(grassCol, soilCol, dirtSlope * 0.78);

          // 2. Coastal Sand, Pebble Shore & Wet Surf Zone
          float beachWeight = 1.0 - smoothstep(1.2, 6.2, h);
          vec3 drySand = mix(vec3(0.74, 0.67, 0.51), vec3(0.83, 0.76, 0.59), mesoTex * 0.7 + microTex * 0.3);
          vec3 wetSand = vec3(0.32, 0.28, 0.21);
          float shoreWet = 1.0 - smoothstep(-0.5, 2.1, h);
          vec3 coastCol = mix(drySand, wetSand, shoreWet);
          vec3 albedo = mix(grassCol, coastCol, beachWeight);

          // 3. Desert Golden Rippled Sand Dunes
          if (vBiomeWeights.y > 0.01) {
            float ripple = sin(vWorldPos.x * 2.2 + vWorldPos.z * 1.1 + mesoTex * 3.0) * 0.5 + 0.5;
            ripple = mix(0.5, ripple, 1.0 - smoothstep(30.0, 200.0, dist));
            vec3 duneSand = mix(vec3(0.79, 0.58, 0.30), vec3(0.91, 0.73, 0.43), ripple * 0.65 + macroTex * 0.35);
            albedo = mix(albedo, duneSand, vBiomeWeights.y * (1.0 - shoreWet * 0.6));
          }

          // 4. Stratified Redstone Grand Canyon Terraces
          if (vBiomeWeights.x > 0.01) {
            float strata = sin(h * 0.58 + macroTex * 5.0) * 0.5 + 0.5;
            float fineStrata = sin(h * 2.8 + mesoTex * 2.5) * 0.5 + 0.5;
            fineStrata = mix(0.5, fineStrata, 1.0 - smoothstep(50.0, 280.0, dist));
            vec3 canyonRed = vec3(0.64, 0.25, 0.13);
            vec3 canyonOchre = vec3(0.81, 0.47, 0.24);
            vec3 canyonDark = vec3(0.38, 0.15, 0.10);
            vec3 mesaCol = mix(canyonRed, canyonOchre, strata);
            mesaCol = mix(mesaCol, canyonDark, fineStrata * 0.42);
            albedo = mix(albedo, mesaCol, vBiomeWeights.x);
          }

          // 5. Volcanic Obsidian & Glowing Magma Caldera
          float lavaEmission = 0.0;
          if (vBiomeWeights.z > 0.01) {
            vec3 basalt = mix(vec3(0.09, 0.09, 0.10), vec3(0.18, 0.15, 0.14), mesoTex);
            albedo = mix(albedo, basalt, vBiomeWeights.z);

            float craterDist = length(vWorldPos.xz - vec2(5200.0, 3800.0));
            if (craterDist < 380.0) {
              float crackNoise = abs(noise2(vWorldPos.xz * 0.06 + vec2(uTime * 0.02)) - 0.5);
              float magma = (1.0 - smoothstep(0.0, 0.065, crackNoise)) * (1.0 - smoothstep(160.0, 360.0, craterDist));
              lavaEmission = magma * vBiomeWeights.z;
              albedo = mix(albedo, vec3(1.0, 0.32, 0.04), lavaEmission);
            }
          }

          // 6. Triplanar Stratified Cliff Granite, Slate & Crevice Shadows
          float cliffMask = smoothstep(0.13, 0.35, slope);
          float rockBands = fbm4(vec2(vWorldPos.x * 0.08 + vWorldPos.z * 0.08, h * 0.20));
          vec3 granite = mix(vec3(0.24, 0.24, 0.26), vec3(0.40, 0.39, 0.37), rockBands);
          granite *= (0.80 + 0.35 * microTex) * (0.85 + 0.15 * mesoTex);
          if (vBiomeWeights.x > 0.3) {
            granite = mix(granite, vec3(0.54, 0.21, 0.11), vBiomeWeights.x * 0.82);
          }
          albedo = mix(albedo, granite, cliffMask);

          // 7. High-Altitude Alpine Snow & Glacial Ice with Blue Subsurface Shadows
          float snowThreshold = 230.0 + uSnowLineOffset + macroTex * 42.0;
          float altSnow = smoothstep(snowThreshold, snowThreshold + 85.0, h);
          float snowSlope = 1.0 - smoothstep(0.28, 0.55, slope);
          float snowWeight = altSnow * snowSlope * (1.0 - vBiomeWeights.z * 0.85);
          vec3 snowSunlit = mix(vec3(0.92, 0.95, 0.98), vec3(0.98, 0.99, 1.0), mesoTex);
          vec3 snowShadow = vec3(0.74, 0.82, 0.92);
          vec3 snowColor = mix(snowShadow, snowSunlit, clamp(N.y * 0.7 + 0.3, 0.0, 1.0));
          albedo = mix(albedo, snowColor, clamp(snowWeight, 0.0, 1.0));

          // 8. Solis Metropolis Sidewalks, Curbs & Architectural Plazas
          if (vClimate.y > 0.05) {
            vec2 pavUV = vWorldPos.xz * 0.5;
            vec2 pavF = fract(pavUV);
            vec2 pavW = fwidth(pavUV) * 1.25 + 0.0005;
            vec2 pavTile = smoothstep(vec2(0.05) - pavW, vec2(0.05) + pavW, pavF) *
                           (1.0 - smoothstep(vec2(1.0) - pavW, vec2(1.0), pavF));
            float paver = pavTile.x * pavTile.y;
            // Grid collapses to its average coverage once it is sub-pixel (kills moire / shimmer)
            float paverDetail = 1.0 - smoothstep(0.18, 0.5, max(pavW.x, pavW.y));
            paver = mix(0.9, paver, paverDetail);
            vec3 sidewalkCol = mix(vec3(0.48, 0.50, 0.53), vec3(0.58, 0.60, 0.63), paver * 0.6 + microTex * 0.4);
            albedo = mix(albedo, sidewalkCol, vClimate.y * 0.88);
          }

          // 9. Paved Highway Asphalt, Crushed Gravel Shoulder & Reflective Markings
          float roadMask = vBiomeWeights.w;
          if (roadMask > 0.04) {
            // High-grade stone-mastic asphalt with aggregate mineral specks
            vec3 asphalt = mix(vec3(0.12, 0.13, 0.15), vec3(0.18, 0.19, 0.21), microTex * 0.6 + ultraMicro * 0.4);

            // Subtle polished rubber tire wear sheen in wheel tracks
            float tireWear = smoothstep(0.38, 0.62, roadMask) * (1.0 - smoothstep(0.78, 0.94, roadMask));
            asphalt = mix(asphalt, asphalt * 0.78, tireWear * 0.42);

            // Natural graded crushed stone / gravel road shoulder transition
            vec3 gravelShoulder = mix(vec3(0.32, 0.30, 0.26), vec3(0.24, 0.22, 0.19), mesoTex);
            albedo = mix(albedo, gravelShoulder, smoothstep(0.04, 0.16, roadMask));

            // Check if on Solis Coastal Airport Runway (x: 430..1110, z: 204..236)
            bool isRunway = (vWorldPos.x > 430.0 && vWorldPos.x < 1110.0 && abs(vWorldPos.z - 220.0) < 16.5);
            vec3 roadColor = asphalt;

            if (isRunway) {
              float rz = abs(vWorldPos.z - 220.0);
              float edgeLine = smoothstep(14.2, 14.6, rz) * (1.0 - smoothstep(15.2, 15.6, rz));
              float rwyCenter = (1.0 - smoothstep(0.35, 0.55, rz)) * step(0.4, fract(vWorldPos.x * 0.04));
              float endDist = min(abs(vWorldPos.x - 455.0), abs(vWorldPos.x - 1085.0));
              float pianoKeys = (1.0 - smoothstep(12.0, 14.0, endDist)) * step(0.45, fract(rz * 0.55)) * step(rz, 13.5);
              float mark = clamp(edgeLine + rwyCenter + pianoKeys, 0.0, 1.0);
              roadColor = mix(asphalt, vec3(0.92, 0.94, 0.96), mark * 0.92);
            } else {
              // Solid reflective white shoulder lines
              float shoulderLine = smoothstep(0.26, 0.29, roadMask) * (1.0 - smoothstep(0.32, 0.36, roadMask));

              // Compute screen-space gradient to automatically align dashed yellow lines with road curve
              vec2 roadGrad = vec2(dFdx(roadMask), dFdy(roadMask));
              float gradLen = length(roadGrad);
              vec2 roadTangent = gradLen > 0.0001 ? vec2(-roadGrad.y, roadGrad.x) / gradLen : vec2(0.7071, 0.7071);
              float alongRoad = dot(vWorldPos.xz, roadTangent);
              float dashPattern = step(0.42, fract(alongRoad * 0.08));
              float centerLine = smoothstep(0.95, 0.985, roadMask) * dashPattern;

              // Zebra crosswalks near city intersections (every 73.3333m in Solis Metropolis)
              float zebra = 0.0;
              if (vClimate.y > 0.35 && vWorldPos.x > -255.0 && vWorldPos.x < 310.0) {
                float gx = abs(vWorldPos.x - round(vWorldPos.x / 73.333333) * 73.333333);
                float gz = abs(vWorldPos.z - round(vWorldPos.z / 73.333333) * 73.333333);
                bool crossBand = (gx > 8.5 && gx < 12.5 && gz < 6.5) || (gz > 8.5 && gz < 12.5 && gx < 6.5);
                if (crossBand) {
                  zebra = step(0.45, fract((vWorldPos.x + vWorldPos.z) * 0.65));
                }
              }

              roadColor = mix(asphalt, vec3(0.92, 0.94, 0.96), clamp(shoulderLine + zebra, 0.0, 1.0) * 0.92);
              roadColor = mix(roadColor, vec3(0.98, 0.78, 0.12), centerLine * (1.0 - zebra) * 0.95);
            }

            albedo = mix(albedo, roadColor, smoothstep(0.14, 0.24, roadMask));
          }

          // Shoreline breaking surf foam right at water level (0.0m .. 0.85m)
          float foamBand = smoothstep(-0.3, 0.15, h) * (1.0 - smoothstep(0.15, 0.95, h));
          float foamAnim = sin(h * 10.0 - uTime * 3.2 + macroTex * 6.0) * 0.5 + 0.5;
          albedo = mix(albedo, vec3(0.92, 0.96, 1.0), foamBand * foamAnim * 0.72);

          // Rain wetness darkening
          albedo *= (1.0 - uWetness * 0.26 * (1.0 - snowWeight));

          // Direct Sun & Moon Lighting + Gentle Large-Scale Cloud Shadows
          float sunVis = smoothstep(-0.04, 0.14, uSunDir.y);
          float nightFactor = 1.0 - sunVis;

          // Realistic Moon vector (opposite sun, elevated above horizon at night)
          vec3 moonDir = normalize(vec3(-uSunDir.x, max(0.24, -uSunDir.y), -uSunDir.z));
          float NoL_sun = max(dot(N, uSunDir), 0.0);
          float NoL_moon = max(dot(N, moonDir), 0.0);

          float cloudShadowNoise = noise2(vWorldPos.xz * 0.00018 + vec2(uTime * 0.0018, uTime * 0.0011));
          float cloudShadow = 1.0 - smoothstep(0.45, 0.72, cloudShadowNoise) * uCloudCoverage * 0.38;

          // Real-time sun shadows from buildings, vehicles, flora and characters
          float sunShadow = 1.0;
          #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
            DirectionalLightShadow dShadow = directionalLightShadows[ 0 ];
            float rawShadow = getShadow( directionalShadowMap[ 0 ], dShadow.shadowMapSize, dShadow.shadowIntensity, dShadow.shadowBias, dShadow.shadowRadius, vDirectionalShadowCoord[ 0 ] );
            float shadowRange = 1.0 - smoothstep(230.0, 320.0, dist);
            sunShadow = mix(1.0, rawShadow, shadowRange);
          #endif

          // Daylight vs Luminous Moonlight direct illumination
          vec3 sunDirect = uSunColor * NoL_sun * cloudShadow * sunShadow * 1.62;
          vec3 moonDirect = vec3(0.38, 0.50, 0.72) * (NoL_moon * 0.65 + 0.35) * 0.88;
          vec3 directLight = mix(moonDirect, sunDirect, sunVis);

          // Atmospheric Ambient Light (Daylight sky vs Soft luminous starlight & city bounce at night)
          float hemiFactor = N.y * 0.5 + 0.5;
          vec3 dayAmbient = mix(vec3(0.18, 0.20, 0.22), uSkyHorizon * 0.65 + uSkyZenith * 0.35, hemiFactor);
          vec3 nightAmbient = mix(vec3(0.16, 0.21, 0.32), vec3(0.26, 0.34, 0.48), hemiFactor);
          vec3 ambientLight = mix(nightAmbient, dayAmbient, sunVis);
          // Sky + bounce fill so cast shadows stay soft and readable rather than crushing to black
          ambientLight += (uSkyHorizon * 0.16 + vec3(0.05, 0.055, 0.06)) * (1.0 - sunShadow) * sunVis * NoL_sun;
          ambientLight *= 1.0 + (1.0 - sunShadow) * sunVis * 0.45;

          // City Night Glow & Warm Streetlamp Radiance in Metropolis
          if (vClimate.y > 0.02) {
            vec3 citySpill = vec3(0.48, 0.40, 0.26) * vClimate.y * nightFactor * 1.25;
            ambientLight += citySpill;
          }

          // Specular highlight on snow, wet roads, and wet rock
          vec3 activeLightDir = sunVis > 0.5 ? uSunDir : moonDir;
          vec3 H = normalize(activeLightDir + V);
          float specPower = mix(24.0, 110.0, max(snowWeight, max(uWetness, roadMask * 0.55)));
          float specStrength = max(snowWeight * 0.35, (uWetness + roadMask * 0.28) * 0.55);
          float specNoL = sunVis > 0.5 ? NoL_sun : NoL_moon;
          vec3 specular = mix(vec3(0.35, 0.45, 0.65), uSunColor, sunVis) * pow(max(dot(N, H), 0.0), specPower) * specStrength * specNoL;

          vec3 finalColor = albedo * (directLight + ambientLight) + specular;

          // Vehicle Projector Headlights & Flashlight High-Beam on Terrain & Roads
          if (uHeadlightPower > 0.01) {
            vec3 toFrag = vWorldPos - uHeadlightPos;
            float lightDist = length(toFrag);
            if (lightDist < 140.0) {
              vec3 lightRay = toFrag / max(0.001, lightDist);
              float coneDot = dot(lightRay, uHeadlightDir);
              // High-tech projector beam (wide 45-degree beam angle with soft perimeter falloff)
              float cone = smoothstep(0.70, 0.94, coneDot);
              // Inverse-square physical attenuation
              float atten = 1.0 / (1.0 + lightDist * 0.035 + lightDist * lightDist * 0.0006);
              float spotNoL = max(dot(N, -lightRay), 0.0);
              vec3 beamColor = vec3(1.0, 0.97, 0.92) * 3.6;
              float surfaceBoost = 1.0 + roadMask * 0.9;
              finalColor += albedo * beamColor * cone * atten * (spotNoL * 0.75 + 0.25) * surfaceBoost * uHeadlightPower;
            }
          }

          if (lavaEmission > 0.001) {
            finalColor += vec3(1.8, 0.45, 0.05) * lavaEmission;
          }

          // Physical atmospheric aerial perspective with forward solar Mie inscattering
          float fogFactor = 1.0 - exp(-pow(dist * uFogDensity, 1.55));
          vec3 fogCol = mix(uSkyHorizon, uSkyZenith, clamp(V.y * -0.5 + 0.2, 0.0, 0.65));
          float VoL = max(dot(-V, uSunDir), 0.0);
          float sunGlare = pow(VoL, 8.0) * sunVis;
          vec3 inscatterCol = mix(fogCol, uSunColor, sunGlare * 0.45);
          finalColor = mix(finalColor, inscatterCol, clamp(fogFactor, 0.0, 1.0));

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });
  }

  _createChunkMesh(cx, cz, lod) {
    const chunkSize = this.baseChunkSize * Math.pow(2, lod);
    const segs = lod === 0 ? 36 : lod === 1 ? 32 : 24;
    const step = chunkSize / segs;
    const startX = cx * chunkSize;
    const startZ = cz * chunkSize;

    const ringCount = segs + 3;
    const vertCount = ringCount * ringCount;

    const positions = new Float32Array(vertCount * 3);
    const normals = new Float32Array(vertCount * 3);
    const biomeWeights = new Float32Array(vertCount * 4);
    const climate = new Float32Array(vertCount * 2);

    const skirtDepth = Math.max(18.0, chunkSize * 0.12);

    // Pass 1: Sample heights and terrain data once per vertex
    const heightGrid = new Float32Array(vertCount);
    let vIdx = 0;
    for (let iz = -1; iz <= segs + 1; iz++) {
      const clampedZ = Math.max(0, Math.min(segs, iz));
      const wz = startZ + clampedZ * step;
      const isSkirtZ = iz === -1 || iz === segs + 1;

      for (let ix = -1; ix <= segs + 1; ix++) {
        const clampedX = Math.max(0, Math.min(segs, ix));
        const wx = startX + clampedX * step;
        const isSkirt = isSkirtZ || ix === -1 || ix === segs + 1;

        const data = this.worldGen.getTerrainData(wx, wz);
        const wy = isSkirt ? data.height - skirtDepth : data.height;
        heightGrid[vIdx] = data.height;

        const p3 = vIdx * 3;
        positions[p3] = wx;
        positions[p3 + 1] = wy;
        positions[p3 + 2] = wz;

        const p4 = vIdx * 4;
        biomeWeights[p4] = data.canyonZone;
        biomeWeights[p4 + 1] = data.desertZone;
        biomeWeights[p4 + 2] = data.volcanicWeight;
        biomeWeights[p4 + 3] = data.roadMask;

        const p2 = vIdx * 2;
        climate[p2] = data.moisture;
        climate[p2 + 1] = data.cityWeight;

        vIdx++;
      }
    }

    // Pass 2: Smooth normal computation directly from heightGrid (0 extra noise calls!)
    for (let iz = 0; iz < ringCount; iz++) {
      const zPrev = Math.max(0, iz - 1) * ringCount;
      const zNext = Math.min(ringCount - 1, iz + 1) * ringCount;
      const zCurr = iz * ringCount;

      for (let ix = 0; ix < ringCount; ix++) {
        const xPrev = Math.max(0, ix - 1);
        const xNext = Math.min(ringCount - 1, ix + 1);

        const hL = heightGrid[zCurr + xPrev];
        const hR = heightGrid[zCurr + xNext];
        const hD = heightGrid[zPrev + ix];
        const hU = heightGrid[zNext + ix];

        const scaleX = (xNext === xPrev) ? 1.0 : (xNext - xPrev);
        const scaleZ = (zNext === zPrev) ? 1.0 : (Math.max(1, (zNext - zPrev) / ringCount));

        const dx = (hL - hR) / (step * scaleX);
        const dz = (hD - hU) / (step * scaleZ);
        const invLen = 1.0 / Math.hypot(dx, 1.0, dz);

        const p3 = (zCurr + ix) * 3;
        normals[p3] = dx * invLen;
        normals[p3 + 1] = invLen;
        normals[p3 + 2] = dz * invLen;
      }
    }

    const quadCount = (ringCount - 1) * (ringCount - 1);
    const indices = new Uint32Array(quadCount * 6);
    let iIdx = 0;

    for (let z = 0; z < ringCount - 1; z++) {
      for (let x = 0; x < ringCount - 1; x++) {
        const a = z * ringCount + x;
        const b = a + 1;
        const c = (z + 1) * ringCount + x;
        const d = c + 1;

        indices[iIdx++] = a;
        indices[iIdx++] = c;
        indices[iIdx++] = b;

        indices[iIdx++] = b;
        indices[iIdx++] = c;
        indices[iIdx++] = d;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geo.setAttribute('aBiomeWeights', new THREE.BufferAttribute(biomeWeights, 4));
    geo.setAttribute('aClimate', new THREE.BufferAttribute(climate, 2));
    geo.setIndex(new THREE.BufferAttribute(indices, 1));
    geo.computeBoundingSphere();

    const mesh = new THREE.Mesh(geo, this.material);
    mesh.receiveShadow = lod <= 2;
    return mesh;
  }

  _collectRequiredChunks(camX, camZ) {
    const required = new Map();
    const topSize = this.baseChunkSize * Math.pow(2, this.maxLodLevel);

    const centerTopX = Math.floor(camX / topSize);
    const centerTopZ = Math.floor(camZ / topSize);
    const topRadius = 2; // Optimal 5x5 top grid (70-80 chunks) for buttery 60 FPS while keeping 25km horizon

    const subdivide = (cx, cz, lod) => {
      const size = this.baseChunkSize * Math.pow(2, lod);
      const centerX = (cx + 0.5) * size;
      const centerZ = (cz + 0.5) * size;
      const dist = Math.hypot(camX - centerX, camZ - centerZ);

      // Hysteresis deadband: if already split into children, stay split up to 2.18*size
      // If currently a merged parent, don't split until 1.82*size
      const childKey0 = `${lod - 1}:${cx * 2}:${cz * 2}`;
      const isCurrentlySplit = lod > 0 && this.activeKeys.has(childKey0);
      const splitDist = isCurrentlySplit ? size * 2.18 : size * 1.82;

      if (lod > 0 && dist < splitDist) {
        const childLod = lod - 1;
        const bx = cx * 2;
        const bz = cz * 2;
        subdivide(bx, bz, childLod);
        subdivide(bx + 1, bz, childLod);
        subdivide(bx, bz + 1, childLod);
        subdivide(bx + 1, bz + 1, childLod);
      } else {
        const key = `${lod}:${cx}:${cz}`;
        required.set(key, { cx, cz, lod, dist, key });
      }
    };

    for (let tz = centerTopZ - topRadius; tz <= centerTopZ + topRadius; tz++) {
      for (let tx = centerTopX - topRadius; tx <= centerTopX + topRadius; tx++) {
        subdivide(tx, tz, this.maxLodLevel);
      }
    }

    return required;
  }

  update(cameraPos, traversal = null) {
    const atm = this.atmosphere;
    this.uniforms.uTime.value = performance.now() * 0.001;
    this.uniforms.uSunDir.value.copy(atm.sunDirection);
    this.uniforms.uSunColor.value.copy(atm.sunColor);
    this.uniforms.uSkyHorizon.value.copy(atm.skyColorHorizon);
    this.uniforms.uSkyZenith.value.copy(atm.skyColorZenith);
    this.uniforms.uCameraPos.value.copy(cameraPos);
    this.uniforms.uFogDensity.value = atm.state.fogDensity;
    this.uniforms.uWetness.value = atm.state.wetness;
    this.uniforms.uSnowLineOffset.value = atm.state.snowLineOffset;
    this.uniforms.uCloudCoverage.value = atm.state.cloudCoverage;

    // Sync vehicle & player headlights to terrain shader
    if (traversal) {
      if (traversal.mode === 'rover') {
        const fwdX = -Math.sin(traversal.yaw);
        const fwdZ = -Math.cos(traversal.yaw);
        this.uniforms.uHeadlightPos.value.set(
          traversal.position.x + fwdX * 2.2,
          traversal.position.y + 0.85,
          traversal.position.z + fwdZ * 2.2
        );
        this.uniforms.uHeadlightDir.value.set(fwdX, -0.06, fwdZ).normalize();
        this.uniforms.uHeadlightPower.value = traversal.flashlightOn ? 1.0 : (atm.sunDirection.y < 0.1 ? 1.0 : 0.0);
      } else if (traversal.mode === 'explorer') {
        this.uniforms.uHeadlightPos.value.copy(cameraPos);
        const camDir = new THREE.Vector3();
        traversal.camera.getWorldDirection(camDir);
        this.uniforms.uHeadlightDir.value.copy(camDir);
        this.uniforms.uHeadlightPower.value = traversal.flashlightOn ? 1.0 : (atm.sunDirection.y < -0.05 ? 0.75 : 0.0);
      } else {
        this.uniforms.uHeadlightPower.value = 0.0;
      }
    }

    const movedDist = Math.hypot(cameraPos.x - this.lastUpdatePos.x, cameraPos.z - this.lastUpdatePos.z);
    if (movedDist > 36.0) {
      this.lastUpdatePos.copy(cameraPos);
      const required = this._collectRequiredChunks(cameraPos.x, cameraPos.z);
      this.currentRequired = required;

      // Add all cached chunks immediately
      const missing = [];
      const now = performance.now();
      for (const [key, req] of required.entries()) {
        const cached = this.chunkCache.get(key);
        if (cached) {
          cached.lastUsed = now;
          if (!cached.mesh.parent) {
            this.terrainGroup.add(cached.mesh);
          }
          this.activeKeys.add(key);
        } else {
          missing.push(req);
        }
      }

      // Prioritize closest missing chunks
      missing.sort((a, b) => a.dist - b.dist);
      this.buildQueue = missing;

      // Immediately purge only chunks that are far beyond the horizon
      const maxKeepDist = this.baseChunkSize * Math.pow(2, this.maxLodLevel) * 3.6;
      for (const key of this.activeKeys) {
        if (!required.has(key)) {
          const entry = this.chunkCache.get(key);
          if (entry) {
            const parts = key.split(':');
            const cLod = parseInt(parts[0], 10);
            const cx = parseInt(parts[1], 10);
            const cz = parseInt(parts[2], 10);
            const cSize = this.baseChunkSize * Math.pow(2, cLod);
            const cDist = Math.hypot(cameraPos.x - (cx + 0.5) * cSize, cameraPos.z - (cz + 0.5) * cSize);
            if (cDist > maxKeepDist) {
              if (entry.mesh.parent) this.terrainGroup.remove(entry.mesh);
              this.activeKeys.delete(key);
            }
          }
        }
      }
    }

    // Process missing chunk builds up to 8 per frame with a generous 9ms budget
    let built = 0;
    const startTime = performance.now();
    while (this.buildQueue.length > 0 && built < this.chunksPerFrame) {
      if (built >= 2 && performance.now() - startTime > 9.0) break;
      const req = this.buildQueue.shift();
      if (this.chunkCache.has(req.key)) {
        const cached = this.chunkCache.get(req.key);
        if (!cached.mesh.parent) this.terrainGroup.add(cached.mesh);
        this.activeKeys.add(req.key);
        continue;
      }

      const mesh = this._createChunkMesh(req.cx, req.cz, req.lod);
      this.chunkCache.set(req.key, { mesh, lastUsed: startTime, key: req.key });
      this.terrainGroup.add(mesh);
      this.activeKeys.add(req.key);
      built++;
    }

    // Zero-hole seamless transition: Only remove obsolete active chunks when all required chunks are built!
    if (this.buildQueue.length === 0 && this.currentRequired) {
      for (const key of this.activeKeys) {
        if (!this.currentRequired.has(key)) {
          const entry = this.chunkCache.get(key);
          if (entry && entry.mesh.parent) {
            this.terrainGroup.remove(entry.mesh);
          }
          this.activeKeys.delete(key);
        }
      }
    }

    // Evict least-recently used inactive chunks if cache exceeds maxCacheSize
    if (this.chunkCache.size > this.maxCacheSize) {
      const inactive = [];
      for (const [key, val] of this.chunkCache.entries()) {
        if (!this.activeKeys.has(key)) inactive.push(val);
      }
      inactive.sort((a, b) => a.lastUsed - b.lastUsed);
      const toRemove = Math.min(inactive.length, this.chunkCache.size - this.maxCacheSize);
      for (let i = 0; i < toRemove; i++) {
        const item = inactive[i];
        item.mesh.geometry.dispose();
        this.chunkCache.delete(item.key);
      }
    }
  }

  primeAround(x, z) {
    this.lastUpdatePos.set(999999, 999999, 999999);
    const savedRate = this.chunksPerFrame;
    this.chunksPerFrame = 64;
    this.update(new THREE.Vector3(x, 0, z));
    this.chunksPerFrame = savedRate;
  }

  getActiveChunkCount() {
    return this.activeKeys.size;
  }
}
