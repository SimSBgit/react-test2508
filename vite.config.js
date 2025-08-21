import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/react-test2508/' : '/',         //예: /my-react-app/  
  }
})

// export default defineConfig({
//   plugins: [react()],
// })
