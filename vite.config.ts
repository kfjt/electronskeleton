import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist/renderer',
    rollupOptions: {
      input: path.resolve(__dirname, 'src/renderer/index.html'),
      output: {
        format: 'es' // rendererプロセスはESM
      }
    }
  },
  base: './',
  assetsInclude: ['**/*.png', '**/*.ico'],
  optimizeDeps: {
    exclude: ['electron']
  }
});
