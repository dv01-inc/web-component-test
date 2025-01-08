import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'wc-test-component',
    lib: {
      entry: 'src/main.tsx',
      name: 'WCTestComponent',
      fileName: (format) => `wc-test-component.${format}.js`,
      formats: ['es', 'umd'], // Ensure compatibility with other apps
    },
    rollupOptions: {
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
