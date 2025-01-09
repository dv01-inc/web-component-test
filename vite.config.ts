import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'src/web-component-types.d.ts', dest: '' },
      ],
    }),
    // TODO: better to use DTS files for typescript types?  this currently outputs an empty file
    // dts({
    //   outDir: 'dist/types',
    //   insertTypesEntry: true, // Automatically adds a "types" entry in package.json
    //   tsconfigPath: './tsconfig.json'
    // }),
  ],
  build: {
    // lib: {
    //   entry: 'src/defineCustomElements.ts',
    //   name: 'WCTestComponent',
    //   fileName: (format) => `wc-test-component.${format}.js`,
    //   formats: ['es', 'umd'], // Ensure compatibility with other apps
    // },
    lib: {
      entry: 'src/defineCustomElements.ts',
      name: 'WCTodos',
      fileName: (format) => `wc-todos.${format}.js`,
      formats: ['es', 'umd'], // Ensure compatibility with other apps
    },
    rollupOptions: {
      // external: ['react', 'react-dom'], // TODO: rely on consumer to have react and react-dom installed - but this results in errors in the build files when consuming (different errors for es and umd)
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      util: "rollup-plugin-node-polyfills/polyfills/util",
    },
  },
});
