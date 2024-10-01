import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // Alias @ para o src do package
    }
  },
  build: {
    outDir: 'dist',  // Local onde a build será gerada para o package
    lib: {
      entry: path.resolve(__dirname, './src/index.tsx'),  // Ponto de entrada da build
      name: 'SemanticComponents',
      fileName: (format) => `semantic-components.${format}.js`,
    },
    rollupOptions: {
      // Se precisar de dependências externas, pode especificá-las aqui
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
