import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy';
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
            entry: 'src/index.ts',
            name: 'WCTestComponent',
            fileName: (format) => `wc-test-component.${format}.js`,
            formats: ['es', 'umd'], // Ensure compatibility with other apps
        },
        rollupOptions: {
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
