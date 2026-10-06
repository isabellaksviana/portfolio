import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // o ds-lab mora em outra pasta: garante uma cópia só do React
    dedupe: ['react', 'react-dom'],
  },
})
