import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    base: isProduction ? '/' : '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@public': resolve(__dirname, './public'),
        '@assets': resolve(__dirname, './src/assets'),
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      emptyOutDir: true,
      assetsInlineLimit: 0, // Always externalize assets for better caching
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
    server: {
      port: 3000,
      open: true,
      host: true,
    },
    publicDir: 'public',
  };
});
