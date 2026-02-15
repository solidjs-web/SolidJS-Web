import { defineConfig } from 'vite';

export default defineConfig({
    build: {
      minify: false,
      lib: {
        entry: 'src/main.js',
        name: 'SolidJS',
        fileName: (format, entryName) => 'solid-js-dev.js',
        formats: ['umd']
      },
      emptyOutDir: false,
      // Default outDir is "dist"
      // You can customize other options if needed
    }
  });