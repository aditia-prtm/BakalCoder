import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Base path hanya aktif saat build (untuk GitHub Pages)
  base: process.env.NODE_ENV === 'production' ? '/ADTX-Course/' : '/',
})