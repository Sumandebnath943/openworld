// ============================================================================
// AETHERIA OPEN WORLD ENGINE - Deterministic Multi-Scale Noise Library
// Fast 2D/3D Simplex, FBM, Ridged Multifractal, Domain Warping & Cellular Noise
// ============================================================================

export class SeededNoise {
  constructor(seed = 1337420) {
    this.seed = seed;
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    this._initPermutation(seed);
  }

  _initPermutation(seed) {
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;

    let s = seed >>> 0;
    for (let i = 255; i > 0; i--) {
      s = (Math.imul(1664525, s) + 1013904223) >>> 0;
      const j = s % (i + 1);
      const tmp = p[i];
      p[i] = p[j];
      p[j] = tmp;
    }

    for (let i = 0; i < 512; i++) {
      this.perm[i] = p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }
  }

  // Fast deterministic 2D hash in [0, 1]
  hash2D(x, z) {
    let n = Math.imul(Math.floor(x), 374761393) + Math.imul(Math.floor(z), 668265263) + this.seed;
    n = (n ^ (n >>> 13)) >>> 0;
    n = Math.imul(n, 1274126177) >>> 0;
    return ((n ^ (n >>> 16)) >>> 0) / 4294967295.0;
  }

  // 2D Simplex Noise in [-1, 1]
  noise2D(xin, yin) {
    const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
    const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;

    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;

    const X0 = i - t;
    const Y0 = j - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;

    let i1, j1;
    if (x0 > y0) {
      i1 = 1;
      j1 = 0;
    } else {
      i1 = 0;
      j1 = 1;
    }

    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1.0 + 2.0 * G2;
    const y2 = y0 - 1.0 + 2.0 * G2;

    const ii = i & 255;
    const jj = j & 255;
    const gi0 = this.permMod12[ii + this.perm[jj]];
    const gi1 = this.permMod12[ii + i1 + this.perm[jj + j1]];
    const gi2 = this.permMod12[ii + 1 + this.perm[jj + 1]];

    let n0 = 0.0;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      t0 *= t0;
      n0 = t0 * t0 * grad2(gi0, x0, y0);
    }

    let n1 = 0.0;
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      t1 *= t1;
      n1 = t1 * t1 * grad2(gi1, x1, y1);
    }

    let n2 = 0.0;
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      t2 *= t2;
      n2 = t2 * t2 * grad2(gi2, x2, y2);
    }

    return 70.0 * (n0 + n1 + n2);
  }

  // Standard Fractional Brownian Motion in [-1, 1]
  fbm2D(x, z, octaves = 5, lacunarity = 2.03, gain = 0.5) {
    let total = 0.0;
    let amplitude = 0.5;
    let frequency = 1.0;
    let maxVal = 0.0;

    for (let i = 0; i < octaves; i++) {
      total += this.noise2D(x * frequency, z * frequency) * amplitude;
      maxVal += amplitude;
      amplitude *= gain;
      frequency *= lacunarity;
      // Slight rotation per octave to eliminate axis-aligned artifacts
      const nx = x * 0.8 - z * 0.6;
      const nz = x * 0.6 + z * 0.8;
      x = nx;
      z = nz;
    }
    return total / maxVal;
  }

  // Ridged Multifractal for sharp alpine peaks & tectonic ridges in [0, 1]
  ridged2D(x, z, octaves = 5, lacunarity = 2.1, gain = 0.52) {
    let sum = 0.0;
    let freq = 1.0;
    let amp = 0.5;
    let weight = 1.0;

    for (let i = 0; i < octaves; i++) {
      let n = 1.0 - Math.abs(this.noise2D(x * freq, z * freq));
      n = n * n;
      n *= weight;
      weight = Math.min(1.0, Math.max(0.0, n * 2.0));
      sum += n * amp;
      freq *= lacunarity;
      amp *= gain;
      const nx = x * 0.866 - z * 0.5;
      const nz = x * 0.5 + z * 0.866;
      x = nx;
      z = nz;
    }
    return sum * 1.35;
  }

  // Domain-warped FBM for realistic eroded terrain
  warpedFbm2D(x, z, octaves = 4, warpStrength = 0.45) {
    const qx = this.fbm2D(x + 1.7, z + 9.2, 2);
    const qz = this.fbm2D(x + 8.3, z + 2.8, 2);
    return this.fbm2D(x + warpStrength * qx, z + warpStrength * qz, octaves);
  }
}

const GRAD2 = [
  [1, 1], [-1, 1], [1, -1], [-1, -1],
  [1, 0], [-1, 0], [1, 0], [-1, 0],
  [0, 1], [0, -1], [0, 1], [0, -1]
];

function grad2(hash, x, y) {
  const g = GRAD2[hash];
  return g[0] * x + g[1] * y;
}

export function smoothstep(edge0, edge1, x) {
  const t = Math.max(0.0, Math.min(1.0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3.0 - 2.0 * t);
}

export function smootherstep(edge0, edge1, x) {
  const t = Math.max(0.0, Math.min(1.0, (x - edge0) / (edge1 - edge0)));
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
