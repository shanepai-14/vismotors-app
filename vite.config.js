import { defineConfig ,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_API_KEY': JSON.stringify(env.REACT_APP_API_KEY),
      'process.env.REACT_APP_BASE_URL': JSON.stringify(env.REACT_APP_BASE_URL),
      'process.env.REACT_APP_IMAGE_URL': JSON.stringify(env.REACT_APP_IMAGE_URL)
    },
    plugins: [react()],
      base: "/"
  }
})
