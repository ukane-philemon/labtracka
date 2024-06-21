import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from "path";

const root = resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: {
      "@assets": resolve(root, "assets"),
      "@components": resolve(root, "components"),
      "@interface": resolve(root, "interface"),
      "@layout": resolve(root, "layout"),
    }
  }
})
