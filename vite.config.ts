import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env vars based on the current mode
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    // Use Vercel's URL in production, or relative path in development
    base: '/',
    
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
      // Don't inline assets, always emit them as files
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          // Keep the same directory structure in the output
          assetFileNames: (assetInfo) => {
            // Put images in assets/images, css in assets/css, etc.
            if (!assetInfo.name) {
              return 'assets/[name]-[hash][extname]';
            }
            if (/\.(png|jpe?g|svg|gif|webp|avif)$/i.test(assetInfo.name)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
      },
    },
    
    server: {
      port: 3000,
      open: true,
      host: true,
    },
    
    // Define global constants
    define: {
      'import.meta.env.VITE_APP_VERSION': JSON.stringify(env.VITE_APP_VERSION || '1.0.0'),
    },
    
    // Public directory that gets copied to the root of the dist directory
    publicDir: 'public',
  };
});
