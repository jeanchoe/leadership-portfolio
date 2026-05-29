import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change `base` to '/your-repo-name/' when deploying to GitHub Pages
// e.g. if your repo is github.com/jeanchoe/leadership-portfolio, use '/leadership-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: './',
})
