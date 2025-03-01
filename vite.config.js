import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  base: '/felix-site/', // 👈 Change this to match your GitHub repo name
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});