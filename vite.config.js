import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to your repo name for GitHub Pages, e.g. '/aurelia-group/'
// Use '/' if deploying to a custom domain or user/organization root site.
export default defineConfig({
  plugins: [react()],
  base: '/aurelia-group/',
})
