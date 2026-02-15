import { defineConfig } from 'vite';

export default defineConfig({
    build: {
      minify: "esbuild",
      target: 'es2015',
      cssCodeSplit: true,
      esbuild: {
        // Set to true to enable advanced minification options
        minifySyntax: true,  // Minifies syntax (removes extra spaces, etc.)
        minifyWhitespace: true,  // Minifies whitespace
        minifyIdentifiers: true, // Shortens variable and function names
        // You can add additional esbuild-specific options here
      },
      lib: {
        entry: 'src/main.js',
        name: 'SolidJS',
        fileName: (format, entryName) => 'solid-js-prod.js',
        formats: ['umd']
      },
      emptyOutDir: false,
      // Default outDir is "dist"
      // You can customize other options if needed
    }
  });