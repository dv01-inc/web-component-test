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
    lib: {
      //all custom elements defined in this file will be bundled into a single file
      entry: 'src/defineCustomElements.ts',
      name: 'CustomElements',
      fileName: (format) => `custom-elements.${format}.js`,
      formats: ['es', 'umd'],
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
