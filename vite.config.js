import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsInclude: ['**/*.pdf', '**/*.png', '**/*.ico', 'site.webmanifest']
  },
  publicDir: 'public'
})