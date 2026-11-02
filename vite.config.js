import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        tailwind: resolve(import.meta.dirname, 'tailwind.html'),
        bootstrap: resolve(import.meta.dirname, 'bootstrap.html'),
        publicering: resolve(import.meta.dirname, 'publicering.html'),
      },
    },
  },
})