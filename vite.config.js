import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.js"
  },
  base: '/React-final-project/Expense-tracker'
})
