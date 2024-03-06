import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'
// import dns from 'dns'

// dns.setDefaultResultOrder('verbatim')
// https://vitejs.dev/config/
export default defineConfig({
  envPrefix:"REACT_",
  plugins: [envCompatible(),
    react()
  ],
  server:{
    proxy:{
      '/api': {
        // target:'https://www.wattsapp-backend.onrender.com',
        target:"http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }}
    // proxy add krne se /api ke aage pura url append hojayega plus server ko lagega ki request same url se aari hai naki 5173 se
  },)
