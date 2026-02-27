import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Ruta base para GitHub Pages: https://brayanAgudelo1423.github.io/Barberias/
  base: '/Barberias/',
  plugins: [react()],
})
