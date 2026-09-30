import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' keeps asset paths valid under any GitHub Pages repo name
export default defineConfig({ base: './', plugins: [react(), tailwindcss()] })
