import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/artists': 'http://backend:8080',
      '/artworks': 'http://backend:8080',
      '/images': 'http://backend:8080',
    }
    
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  },
});
