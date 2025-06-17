// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tarea-dip/', // 👈 cambia esto
  plugins: [react()],
})
