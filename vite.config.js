import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*
  server: {
    host: "192.168.1.25",
    open: "index.html",
    port: 4000
  },*/
  https: {
    key: fs.readFileSync(`certs/sycod.com.key`),
    cert: fs.readFileSync(`certs/51a761c1168f24d0.crt`),
  }
})
