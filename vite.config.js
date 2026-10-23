import { defineConfig } from 'vite';

// Relative base so the built site works from any path, including the
// GitHub Pages project URL (https://<user>.github.io/openworld/).
export default defineConfig({
  base: './'
});
