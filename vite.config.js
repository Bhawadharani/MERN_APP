import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "",  // Make sure to assign a value to `base`, or leave it empty if not needed
  plugins: [react()],
})
