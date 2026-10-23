// ============================================================================
// AETHERIA OPEN WORLD ENGINE - Outer Space Celestial Simulation
// Orbital Earth with Atmospheric Limb, International Space Station (ISS),
// Starlink Constellation Train, The Moon & Artemis Base, Planet Mars & Base Alpha
// ============================================================================

import * as THREE from 'three';

export class SpaceExploration {
  constructor(scene, atmosphere) {
    this.scene = scene;
    this.atmosphere = atmosphere;

    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Celestial coordinates in space (reachable via Starship flight or fast-travel)
    this.destinations = {
      iss: new THREE.Vector3(800, 8500, 1200),
      moon: new THREE.Vector3(14000, 16200, -12000),
      mars: new THREE.Vector3(-22000, 22400, 24000)
    };

    this.moonRadius = 1800;
    this.marsRadius = 2200;

    this.rotTimer = 0;
    this.solarPanels = [];
    this.starlinkSatellites = [];

    this._createMaterials();
    this._buildOrbitalCurvedEarth();
    this._buildDeepSpaceStarfieldAndNebula();
    this._buildInternationalSpaceStation();
    this._buildStarlinkTrain();
    this._buildTheMoonAndLunarBase();
    this._buildPlanetMarsAndMarsBaseAlpha();
  }

  _createMaterials() {
    this.matStationMetal = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.85,
      roughness: 0.25
    });

    this.matTruss = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.7,
      roughness: 0.5
    });

    // High-Efficiency Photovoltaic Solar Arrays (Deep Blue Silicon with Gold Trim)
    this.matSolarCell = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      metalness: 0.75,
      roughness: 0.15,
      emissive: 0x072768,
      emissiveIntensity: 0.35
    });

    this.matGoldFoil = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.95,
      roughness: 0.2
    });

    this.matRadiator = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.2,
      roughness: 0.8
    });

    this.matCupolaGlass = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.95,
      roughness: 0.05,
      transparent: true,
      opacity: 0.75
    });

    this.matIonGlow = new THREE.MeshBasicMaterial({
      color: 0x38bdf8
    });
  }

  // 1. Orbital Curved Earth Sphere with Atmospheric Fresnel Rim Glow
  _buildOrbitalCurvedEarth() {
    this.earthGroup = new THREE.Group();
    // Centered directly beneath the world
    const earthRadius = 45000.0;
    this.earthGroup.position.set(0, -earthRadius + 80.0, 0);

    const earthGeo = new THREE.SphereGeometry(earthRadius, 64, 48);

    // Procedural Orbital Earth Shader Material: Oceans, Continents, Clouds, City Night Lights & Rim
    this.earthMat = new THREE.ShaderMaterial({
      uniforms: {
        uSunDir: { value: new THREE.Vector3(0.5, 0.7, 0.3).normalize() },
        uTime: { value: 0 }
      },
      vertexShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vViewDir;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vViewDir = normalize(cameraPosition - wp.xyz);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vViewDir;

        uniform vec3 uSunDir;
        uniform float uTime;

        float hash2(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        float noise2D(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash2(i + vec2(0,0)), hash2(i + vec2(1,0)), f.x),
            mix(hash2(i + vec2(0,1)), hash2(i + vec2(1,1)), f.x), f.y
          );
        }

        void main() {
          vec3 n = normalize(vNormal);
          float sunDot = dot(n, uSunDir);
          float day = clamp(sunDot * 1.5 + 0.1, 0.0, 1.0);

          vec2 uv = vec2(
            atan(n.z, n.x) / 6.28318 + 0.5,
            asin(clamp(n.y, -1.0, 1.0)) / 3.14159 + 0.5
          );

          // Continent vs Ocean procedural landmass map
          float land = noise2D(uv * 18.0) * 0.6 + noise2D(uv * 48.0) * 0.4;
          bool isOcean = land < 0.48;

          vec3 dayOcean = vec3(0.04, 0.18, 0.42);
          vec3 dayLand = mix(vec3(0.12, 0.38, 0.18), vec3(0.55, 0.48, 0.32), smoothstep(0.48, 0.75, land));
          vec3 surfColor = isOcean ? dayOcean : dayLand;

          // Swirling White Cloud Weather Bands
          float clouds = noise2D(uv * 26.0 + vec2(uTime * 0.001, 0.0)) * 0.65 +
                         noise2D(uv * 64.0 - vec2(uTime * 0.0015, 0.0)) * 0.35;
          float cloudMask = smoothstep(0.52, 0.78, clouds);
          surfColor = mix(surfColor, vec3(0.95, 0.98, 1.0), cloudMask * 0.85);

          // Night side: glowing golden city lights on land
          vec3 cityLights = vec3(1.0, 0.82, 0.45) * pow(noise2D(uv * 120.0), 3.0) * 2.2;
          if (isOcean) cityLights = vec3(0.0);

          vec3 finalColor = mix(cityLights, surfColor * max(sunDot, 0.04), day);

          // Atmospheric Rayleigh Blue Edge Scattering Limb
          float fresnel = pow(1.0 - clamp(dot(vViewDir, n), 0.0, 1.0), 3.5);
          vec3 atmosLimb = vec3(0.15, 0.65, 1.0) * 2.4;
          finalColor += atmosLimb * fresnel * clamp(sunDot + 0.35, 0.1, 1.0);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });

    this.earthMesh = new THREE.Mesh(earthGeo, this.earthMat);
    this.earthGroup.add(this.earthMesh);
    this.group.add(this.earthGroup);
  }

  // 2. Deep Space Cosmic Starfield & Emission Nebulae
  _buildDeepSpaceStarfieldAndNebula() {
    this.starsGroup = new THREE.Group();

    // 6,000 High-altitude brilliant cosmic stars
    const starCount = 6000;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const starColor = new THREE.Color();
    for (let i = 0; i < starCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 42000.0 + Math.random() * 8000.0;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = Math.abs(r * Math.cos(phi)) + 1200.0; // In upper sky
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      // Realistic stellar spectra: O-type blue, G-type yellow, M-type red
      const type = Math.random();
      if (type < 0.25) {
        starColor.setRGB(0.75, 0.88, 1.0); // Hot blue-white
      } else if (type < 0.65) {
        starColor.setRGB(1.0, 0.98, 0.92); // Sun-like yellow-white
      } else {
        starColor.setRGB(1.0, 0.78, 0.55); // Warm orange-red
      }
      colors[i * 3] = starColor.r;
      colors[i * 3 + 1] = starColor.g;
      colors[i * 3 + 2] = starColor.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 42.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.95
    });

    this.starPoints = new THREE.Points(starGeo, starMat);
    this.starsGroup.add(this.starPoints);
    this.group.add(this.starsGroup);
  }

  // 3. International Space Station (ISS) & Orbital Depot (x: 800, y: 8500, z: 1200)
  _buildInternationalSpaceStation() {
    this.issGroup = new THREE.Group();
    this.issGroup.position.copy(this.destinations.iss);

    // Integrated Truss Structure (Length 108m)
    const truss = new THREE.Mesh(new THREE.BoxGeometry(108, 3.2, 3.2), this.matTruss);
    truss.castShadow = true;
    this.issGroup.add(truss);

    // Pressurized Laboratory & Habitation Modules (Center Cluster)
    // Destiny US Lab
    const destiny = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, 16.0, 16), this.matStationMetal);
    destiny.rotation.x = Math.PI * 0.5;
    destiny.position.set(0, 0, 4.0);
    // Kibo Japanese Module
    const kibo = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 14.5, 16), this.matStationMetal);
    kibo.rotation.x = Math.PI * 0.5;
    kibo.position.set(5.5, 0, 10.0);
    // Columbus European Module
    const columbus = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 11.5, 16), this.matStationMetal);
    columbus.position.set(-6.5, 0, 8.0);
    // Zvezda Service Module
    const zvezda = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.4, 18.0, 16), this.matStationMetal);
    zvezda.rotation.x = Math.PI * 0.5;
    zvezda.position.set(0, 0, -12.0);

    // Cupola Observation Dome (facing Earth downwards)
    const cupola = new THREE.Mesh(new THREE.SphereGeometry(2.0, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.5), this.matCupolaGlass);
    cupola.rotation.x = Math.PI;
    cupola.position.set(0, -2.4, 6.0);

    // International Docking Adapter (IDA) with Green Crosshair Target Ring
    const dockRing = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.25, 8, 16), this.matTruss);
    dockRing.position.set(0, 0, 16.5);
    const dockLight = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.12, 6, 16), new THREE.MeshBasicMaterial({ color: 0x22c55e }));
    dockLight.position.set(0, 0, 16.6);

    this.issGroup.add(destiny, kibo, columbus, zvezda, cupola, dockRing, dockLight);

    // 8 Massive Photovoltaic Solar Array Wings (4 pairs, span 74m)
    for (let side of [-1, 1]) {
      for (let bay = 0; bay < 2; bay++) {
        const wingGroup = new THREE.Group();
        const wingX = side * (26.0 + bay * 22.0);
        wingGroup.position.set(wingX, 0, 0);

        // Mast canister
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 4.0, 8), this.matGoldFoil);
        wingGroup.add(mast);

        // Dual solar wings extending along Z (+Z and -Z)
        for (const dir of [-1, 1]) {
          const panelGeo = new THREE.BoxGeometry(10.5, 0.25, 34.0);
          const panel = new THREE.Mesh(panelGeo, this.matSolarCell);
          panel.position.set(0, 0, dir * 18.5);
          wingGroup.add(panel);
        }

        this.solarPanels.push(wingGroup);
        this.issGroup.add(wingGroup);
      }
    }

    // Thermal Control Radiators (White Panels)
    for (let r of [-1, 1]) {
      const radiator = new THREE.Mesh(new THREE.BoxGeometry(12.0, 0.25, 18.0), this.matRadiator);
      radiator.position.set(r * 12.0, 4.2, -6.0);
      radiator.rotation.x = 0.45;
      this.issGroup.add(radiator);
    }

    this.group.add(this.issGroup);
  }

  // 4. Starlink Satellite Constellation Train in Orbital Formation
  _buildStarlinkTrain() {
    this.starlinkGroup = new THREE.Group();
    this.starlinkGroup.position.set(800, 9100, 1200);

    const satCount = 10;
    for (let i = 0; i < satCount; i++) {
      const sat = new THREE.Group();
      // Orbiting in a sleek train formation spaced 35m apart
      sat.position.set(i * 38.0, 0, i * 14.0);

      // Starlink V2 Flat Panel Body (compact flat rectangular bus)
      const body = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.35, 1.8), this.matStationMetal);

      // Single Deployable Solar Wing (Length 8.5m)
      const solarWing = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.12, 1.8), this.matSolarCell);
      solarWing.position.set(5.5, 0, 0);

      // Krypton / Argon Hall-Effect Ion Thruster Glow
      const thruster = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.35, 0.45, 8), this.matIonGlow);
      thruster.position.set(-1.7, 0, 0);
      thruster.rotation.z = Math.PI * 0.5;

      sat.add(body, solarWing, thruster);
      this.starlinkSatellites.push(sat);
      this.starlinkGroup.add(sat);
    }

    this.group.add(this.starlinkGroup);
  }

  // 5. The Moon (Luna) with Photorealistic Procedural Lunar Shader & SpaceX Artemis Base
  _buildTheMoonAndLunarBase() {
    this.moonGroup = new THREE.Group();
    this.moonGroup.position.copy(this.destinations.moon);

    // Lunar Celestial Sphere with Custom Photorealistic Lunar Shader Material
    const moonGeo = new THREE.SphereGeometry(this.moonRadius, 64, 48);
    this.moonMat = new THREE.ShaderMaterial({
      uniforms: {
        uSunDir: { value: new THREE.Vector3(0.5, 0.7, 0.3) },
        uTime: { value: 0 }
      },
      vertexShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vLocalPos;
        varying vec2 vUv;

        void main() {
          vUv = uv;
          vLocalPos = normalize(position);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform vec3 uSunDir;
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vLocalPos;
        varying vec2 vUv;

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

        void main() {
          vec3 p = vLocalPos;
          vec3 n = normalize(vNormal);

          // 1. Highland Anorthosite Regolith Noise
          float micro = noise3D(p * 45.0) * 0.55 + noise3D(p * 110.0) * 0.32 + noise3D(p * 240.0) * 0.13;
          vec3 highland = mix(vec3(0.74, 0.77, 0.81), vec3(0.92, 0.94, 0.97), micro);

          // 2. Basaltic Dark Maria Seas (Mare Tranquillitatis, Imbrium, Oceanus Procellarum, Serenitatis, Crisium)
          float maria = 0.0;
          maria += smoothstep(0.48, 0.0, length(p - vec3(-0.25, 0.35, 0.88))) * 0.85;  // Mare Imbrium
          maria += smoothstep(0.55, 0.0, length(p - vec3(-0.55, 0.15, 0.80))) * 0.80;  // Oceanus Procellarum
          maria += smoothstep(0.38, 0.0, length(p - vec3(0.18, 0.32, 0.92))) * 0.85;   // Mare Serenitatis
          maria += smoothstep(0.42, 0.0, length(p - vec3(0.35, 0.12, 0.90))) * 0.88;   // Mare Tranquillitatis
          maria += smoothstep(0.24, 0.0, length(p - vec3(0.68, 0.22, 0.68))) * 0.95;   // Mare Crisium
          maria += smoothstep(0.40, 0.0, length(p - vec3(-0.30, -0.35, 0.88))) * 0.82; // Mare Nubium

          float mariaNoise = noise3D(p * 12.0) * 0.65 + noise3D(p * 32.0) * 0.35;
          maria = clamp(maria * (0.65 + 0.7 * mariaNoise), 0.0, 1.0);
          vec3 mariaCol = mix(vec3(0.25, 0.26, 0.28), vec3(0.36, 0.38, 0.40), mariaNoise);
          vec3 albedo = mix(highland, mariaCol, maria * 0.88);

          // 3. Tycho Crater & Bright Radial Ejecta Ray System
          vec3 tychoCenter = normalize(vec3(-0.08, -0.72, 0.68));
          float dTycho = length(p - tychoCenter);
          vec3 tychoDir = normalize(p - tychoCenter);
          float tychoAngle = atan(tychoDir.y, tychoDir.x);
          float tychoRays = pow(abs(sin(tychoAngle * 7.0 + sin(tychoAngle * 14.0) * 0.5)), 5.0) *
                            smoothstep(0.95, 0.08, dTycho);
          float tychoRim = smoothstep(0.045, 0.0, abs(dTycho - 0.04));
          albedo = mix(albedo, vec3(0.98, 0.99, 1.0), (tychoRays * 0.45 + tychoRim * 0.85));

          // 4. Copernicus Crater with bright ejecta blankets
          vec3 copCenter = normalize(vec3(-0.25, 0.12, 0.95));
          float dCop = length(p - copCenter);
          float copBlanket = smoothstep(0.09, 0.0, dCop) * 0.45 + smoothstep(0.03, 0.0, abs(dCop - 0.03)) * 0.75;
          albedo = mix(albedo, vec3(0.96, 0.98, 1.0), copBlanket);

          // 5. Direct Solar Illumination with Lommel-Seeliger Retroreflective Lunar Scattering
          float NoL = max(dot(n, uSunDir), 0.0);
          vec3 v = normalize(-vWorldPos);
          float NoV = max(dot(n, v), 0.001);
          float lommelSeeliger = NoL / (NoL + NoV * 1.25);
          float day = smoothstep(-0.02, 0.08, NoL);

          // Subtle Earthshine on the night side (pale blue-gray reflected from Earth)
          vec3 earthshine = vec3(0.08, 0.12, 0.18) * 0.22;
          vec3 sunlit = albedo * (0.25 + 1.85 * lommelSeeliger);

          vec3 finalColor = mix(earthshine, sunlit, day);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });
    this.moonSphere = new THREE.Mesh(moonGeo, this.moonMat);
    this.moonGroup.add(this.moonSphere);

    // =========================================================================
    // SPACEX ARTEMIS LUNAR STARBASE OUTPOST (On the Moon's Northern Sea)
    // =========================================================================
    const baseGroup = new THREE.Group();
    baseGroup.position.set(0, this.moonRadius + 2.0, 0);

    // Lunar Starship (HLS - Human Landing System) Standing on Landing Legs!
    const hlsGroup = new THREE.Group();
    hlsGroup.position.set(0, 0, 0);

    // White & Chrome Starship Body (50m tall)
    const hlsBody = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 42.0, 24), this.matStationMetal);
    hlsBody.position.y = 25.0;
    const hlsNose = new THREE.Mesh(new THREE.ConeGeometry(4.5, 14.0, 24), this.matStationMetal);
    hlsNose.position.y = 53.0;

    // High-Mounted Gold Solar Arrays on Lunar Starship
    const hlsSolar = new THREE.Mesh(new THREE.BoxGeometry(16.0, 8.0, 0.4), this.matGoldFoil);
    hlsSolar.position.set(0, 42.0, 0);

    // 4 Heavy Lunar Landing Struts & Footpads
    for (let leg = 0; leg < 4; leg++) {
      const angle = (leg / 4) * Math.PI * 2;
      const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 12.0, 8), this.matStationMetal);
      strut.position.set(Math.cos(angle) * 6.5, 5.0, Math.sin(angle) * 6.5);
      strut.rotation.z = Math.cos(angle) * 0.35;
      strut.rotation.x = Math.sin(angle) * 0.35;

      const pad = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.8, 12), this.matTruss);
      pad.position.set(Math.cos(angle) * 8.5, 0.4, Math.sin(angle) * 8.5);
      hlsGroup.add(strut, pad);
    }

    hlsGroup.add(hlsBody, hlsNose, hlsSolar);
    baseGroup.add(hlsGroup);

    // 3 Geodesic Pressurized Lunar Habitat Bio-Domes
    for (let d = 0; d < 3; d++) {
      const domeAngle = (d / 3) * Math.PI * 2 + 0.4;
      const domeDist = 38.0;
      const dome = new THREE.Mesh(new THREE.SphereGeometry(12.0, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), this.matGoldFoil);
      dome.position.set(Math.cos(domeAngle) * domeDist, 0, Math.sin(domeAngle) * domeDist);

      // Air lock entrance tunnel
      const tunnel = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 14.0, 10), this.matStationMetal);
      tunnel.rotation.z = Math.PI * 0.5;
      tunnel.rotation.y = -domeAngle;
      tunnel.position.set(Math.cos(domeAngle) * (domeDist - 12.0), 1.8, Math.sin(domeAngle) * (domeDist - 12.0));

      baseGroup.add(dome, tunnel);
    }

    // Lunar Rover & SpaceX Mission Flag
    const rover = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.8, 2.8), this.matStationMetal);
    rover.position.set(24.0, 1.5, 18.0);
    const flagPole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 4.5, 6), this.matStationMetal);
    flagPole.position.set(16.0, 2.25, 12.0);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.4), new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide }));
    flag.position.set(17.1, 3.6, 12.0);
    baseGroup.add(rover, flagPole, flag);

    this.moonGroup.add(baseGroup);
    this.group.add(this.moonGroup);
  }

  // 6. Planet Mars & SpaceX "Mars Base Alpha" Colony
  _buildPlanetMarsAndMarsBaseAlpha() {
    this.marsGroup = new THREE.Group();
    this.marsGroup.position.copy(this.destinations.mars);

    // Mars Celestial Sphere with Custom Photorealistic Martian Terrain Shader
    const marsGeo = new THREE.SphereGeometry(this.marsRadius, 64, 48);
    this.marsMat = new THREE.ShaderMaterial({
      uniforms: {
        uSunDir: { value: new THREE.Vector3(0.5, 0.7, 0.3) },
        uTime: { value: 0 }
      },
      vertexShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vLocalPos;
        varying vec2 vUv;

        void main() {
          vUv = uv;
          vLocalPos = normalize(position);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform vec3 uSunDir;
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vLocalPos;
        varying vec2 vUv;

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

        void main() {
          vec3 p = vLocalPos;
          vec3 n = normalize(vNormal);

          // 1. Rust-Red Iron Oxide Martian Desert Regolith
          float fbm = noise3D(p * 24.0) * 0.55 + noise3D(p * 64.0) * 0.30 + noise3D(p * 140.0) * 0.15;
          vec3 redDesert = mix(vec3(0.78, 0.28, 0.12), vec3(0.92, 0.42, 0.20), fbm);

          // 2. Dark Basaltic Volcanic Plains (Syrtis Major & Acidalia Planitia)
          float darkPlains = smoothstep(0.42, 0.85, noise3D(p * 4.5) * 0.65 + noise3D(p * 12.0) * 0.35);
          vec3 darkBasalt = vec3(0.24, 0.14, 0.12);
          vec3 albedo = mix(redDesert, darkBasalt, darkPlains * 0.75);

          // 3. Valles Marineris Grand Canyon Rift (Deep equatorial tectonic canyon)
          float canyonDist = abs(p.y - 0.08) + abs(p.z - 0.95) * 0.35;
          if (canyonDist < 0.12 && p.x > -0.65 && p.x < 0.65) {
            float canyonDepth = 1.0 - smoothstep(0.0, 0.12, canyonDist);
            vec3 canyonShadow = vec3(0.22, 0.08, 0.06);
            albedo = mix(albedo, canyonShadow, canyonDepth * 0.85);
          }

          // 4. Olympus Mons Shield Volcano & Caldera
          vec3 olympusPos = normalize(vec3(-0.48, 0.32, 0.82));
          float dOlympus = length(p - olympusPos);
          if (dOlympus < 0.22) {
            float volcano = smoothstep(0.22, 0.04, dOlympus);
            float caldera = smoothstep(0.035, 0.0, abs(dOlympus - 0.035));
            albedo = mix(albedo, vec3(0.55, 0.18, 0.10), volcano * 0.6);
            albedo = mix(albedo, vec3(0.25, 0.08, 0.05), caldera * 0.8);
          }

          // 5. Brilliant White Polar Ice Caps (CO2 & Water Ice at North and South Poles)
          float northPole = smoothstep(0.78, 0.96, p.y);
          float southPole = smoothstep(0.82, 0.97, -p.y);
          vec3 polarIce = vec3(0.96, 0.98, 1.0);
          albedo = mix(albedo, polarIce, max(northPole, southPole));

          // 6. Direct Solar Lighting & Thin Atmospheric Limb Scattering
          float NoL = max(dot(n, uSunDir), 0.0);
          float day = smoothstep(-0.02, 0.12, NoL);
          vec3 litSurface = albedo * (0.15 + 1.65 * NoL);

          // Thin dusty salmon atmospheric limb
          vec3 v = normalize(-vWorldPos);
          float fresnel = pow(1.0 - clamp(dot(v, n), 0.0, 1.0), 3.0);
          vec3 atmosLimb = vec3(0.95, 0.55, 0.38) * fresnel * clamp(NoL + 0.3, 0.1, 1.0) * 1.5;

          vec3 finalColor = mix(vec3(0.02, 0.01, 0.01), litSurface + atmosLimb, day);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });
    this.marsSphere = new THREE.Mesh(marsGeo, this.marsMat);
    this.marsGroup.add(this.marsSphere);

    // =========================================================================
    // SPACEX MARS BASE ALPHA COLONY (At Mars North Base)
    // =========================================================================
    const marsBaseGroup = new THREE.Group();
    marsBaseGroup.position.set(0, this.marsRadius + 2.0, 0);

    // 2 Landed Starships (One Cargo, One Crew) on hexagonal blast landing pads
    for (let s of [-1, 1]) {
      const padPos = new THREE.Vector3(s * 45.0, 0, 0);

      // Concrete/Regolith landing pad
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(18.0, 20.0, 1.8, 6), this.matTruss);
      pad.position.copy(padPos);
      marsBaseGroup.add(pad);

      // Starship on Mars
      const starship = new THREE.Group();
      starship.position.set(padPos.x, padPos.y + 26.0, padPos.z);

      const shipBody = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 42.0, 24), this.matStationMetal);
      const shipNose = new THREE.Mesh(new THREE.ConeGeometry(4.5, 14.0, 24), this.matStationMetal);
      shipNose.position.y = 28.0;

      // Body flaps
      for (const f of [-1, 1]) {
        const flap = new THREE.Mesh(new THREE.BoxGeometry(0.3, 10.0, 4.0), this.matStationMetal);
        flap.position.set(f * 5.5, -12.0, 0);
        starship.add(flap);
      }

      starship.add(shipBody, shipNose);
      marsBaseGroup.add(starship);
    }

    // Sabatier Fuel Plant (ISRU) - Propellant plant for refuelling Starship on Mars
    const isruPlant = new THREE.Group();
    isruPlant.position.set(0, 0, 55.0);

    const reactorBuilding = new THREE.Mesh(new THREE.BoxGeometry(18.0, 10.0, 14.0), this.matStationMetal);
    reactorBuilding.position.y = 5.0;
    isruPlant.add(reactorBuilding);

    // Carbon Dioxide absorption intake stacks
    for (let st = -1; st <= 1; st += 2) {
      const intake = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.8, 16.0, 12), this.matTruss);
      intake.position.set(st * 6.0, 8.0, -8.0);
      isruPlant.add(intake);
    }

    // Liquid Methane & Oxygen storage spheres
    for (let sp = -1; sp <= 1; sp += 2) {
      const tank = new THREE.Mesh(new THREE.SphereGeometry(5.5, 14, 14), this.matStationMetal);
      tank.position.set(sp * 14.0, 5.5, 0);
      isruPlant.add(tank);
    }
    marsBaseGroup.add(isruPlant);

    // 4 Geodesic Agricultural Bio-Domes with Glowing Hydroponic Green Lights
    const bioMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      emissive: 0x15803d,
      emissiveIntensity: 0.65,
      transparent: true,
      opacity: 0.85
    });

    for (let b = 0; b < 4; b++) {
      const bAngle = (b / 4) * Math.PI * 2;
      const bDist = 42.0;
      const dome = new THREE.Mesh(new THREE.SphereGeometry(9.0, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), bioMat);
      dome.position.set(Math.cos(bAngle) * bDist, 0, Math.sin(bAngle) * bDist - 35.0);
      marsBaseGroup.add(dome);
    }

    // Mars Exploration Rovers
    for (let r = 0; r < 2; r++) {
      const mRover = new THREE.Mesh(new THREE.BoxGeometry(4.5, 2.2, 3.2), this.matStationMetal);
      mRover.position.set((r - 0.5) * 22.0, 1.8, -15.0);
      marsBaseGroup.add(mRover);
    }

    this.marsGroup.add(marsBaseGroup);
    this.group.add(this.marsGroup);
  }

  update(dt, cameraPos) {
    this.rotTimer += dt;

    // Slow orbital rotation of Earth shader
    if (this.earthMat && this.earthMat.uniforms) {
      this.earthMat.uniforms.uTime.value = this.rotTimer;
      if (this.atmosphere) {
        this.earthMat.uniforms.uSunDir.value.copy(this.atmosphere.sunDirection);
      }
    }

    // Solar vector updates for Moon and Mars procedural shaders
    if (this.moonMat && this.moonMat.uniforms && this.atmosphere) {
      this.moonMat.uniforms.uSunDir.value.copy(this.atmosphere.sunDirection);
      this.moonMat.uniforms.uTime.value = this.rotTimer;
    }
    if (this.marsMat && this.marsMat.uniforms && this.atmosphere) {
      this.marsMat.uniforms.uSunDir.value.copy(this.atmosphere.sunDirection);
      this.marsMat.uniforms.uTime.value = this.rotTimer;
    }

    // Slowly rotate ISS solar panel arrays to track solar vector
    for (const panel of this.solarPanels) {
      panel.rotation.y = this.rotTimer * 0.05;
    }

    // Starlink constellation train orbital movement
    if (this.starlinkGroup) {
      this.starlinkGroup.rotation.y += dt * 0.02;
    }

    // Celestial body axial rotation
    if (this.moonGroup) {
      this.moonGroup.rotation.y += dt * 0.005;
    }
    if (this.marsGroup) {
      this.marsGroup.rotation.y += dt * 0.008;
    }

    // Space visibility: Show Earth sphere when player reaches high altitude (> 2000m)
    const inSpace = cameraPos.y > 1800.0;
    this.earthGroup.visible = inSpace;
    this.starsGroup.visible = inSpace || (this.atmosphere && this.atmosphere.sunDirection.y < 0.1);
  }

  // Returns nearest celestial body name and distance for cockpit HUD navigation
  getNearestCelestialBody(pos) {
    const dIss = pos.distanceTo(this.destinations.iss);
    const dMoon = pos.distanceTo(this.destinations.moon);
    const dMars = pos.distanceTo(this.destinations.mars);

    if (dIss < 1200) return { name: 'ISS Space Station', dist: Math.round(dIss), code: 'iss' };
    if (dMoon < 4500) return { name: 'The Moon (Artemis Base)', dist: Math.round(dMoon), code: 'moon' };
    if (dMars < 5500) return { name: 'Planet Mars (Base Alpha)', dist: Math.round(dMars), code: 'mars' };

    if (pos.y > 6000) {
      return { name: 'Low Earth Orbit (LEO)', dist: Math.round(pos.y), code: 'leo' };
    }
    return null;
  }
}
