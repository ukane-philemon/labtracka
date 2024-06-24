// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePresetAliasOptions } from 'vite-plugin-aliases';
import { vitePlugin as VitePlugin } from 'vite-plugin';

import * as tailwind from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePlugin({
      alias: {
        entries: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    }),
    tailwind,
  ],
});
