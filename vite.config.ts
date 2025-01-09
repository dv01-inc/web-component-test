import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    // copy the custom-element-types.d.ts file to the dist folder
    viteStaticCopy({
      targets: [
        { src: 'src/custom-element-types.d.ts', dest: '' },
      ],
    }),
    // FIXME: better to use DTS files for typescript types?  this currently outputs an empty file
    // dts({
    //   outDir: 'dist/types',
    //   insertTypesEntry: true, // Automatically adds a "types" entry in package.json
    //   tsconfigPath: './tsconfig.json'
    // }),
  ],
  build: {
    lib: {
      //all custom elements defined in this file will be bundled and defined into custom-elements.[es|umd].js
      entry: 'src/defineCustomElements.ts',
      name: 'CustomElements',
      fileName: (format) => `custom-elements.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // FIXME: external option - rely on consumer to have react and react-dom installed - but this results in error when trying to use the umd file
      // UMD error: Cannot read properties of undefined (reading '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED') <- react error
      // size with the external property:
      // included: es - 3.3mb, umd - 3.1mb
      // excluded: es - 4mb, umd - 3.6mb
      // external: ['react', 'react-dom'],
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
      // workaround for the 'util' module not found error in Waterfall
      util: "rollup-plugin-node-polyfills/polyfills/util",
    },
  },
});
