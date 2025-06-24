import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Function to get all files in a directory recursively
function getFiles(dir: string): string[] {
  const dirents = readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });
  return Array.prototype.concat(...files);
}

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
        input: {
          main: resolve(__dirname, 'index.html'),
          ...Object.fromEntries(
            getFiles(resolve(__dirname, 'public/images'))
              .filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.svg'))
              .map(file => [
                file.slice(__dirname.length + 1, file.lastIndexOf('.')),
                file
              ])
          ),
        },
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
