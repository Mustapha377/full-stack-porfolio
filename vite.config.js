import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https:mustapha377.github.io/Html.portfolio/', // Adjust this for GitHub Pages
  server: {
    port: 3000, // Change the dev server port if needed
  },
  build: {
    outDir: 'dist', // Output directory
  },
});
