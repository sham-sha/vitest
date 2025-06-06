import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Add the `test` config for Vitest
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js' // (we’ll create this file next)
  },
})
