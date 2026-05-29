import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the repo name for GitHub Pages project sites, but stay
// at '/' for the local dev server.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/leadership-portfolio/' : '/',
}))
