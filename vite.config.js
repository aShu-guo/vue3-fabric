import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

console.log(resolve('src/index.js'));
// https://vitejs.dev/coindexnfig/
export default defineConfig(() => {
  return {
    // plugins
    plugins: [vue()],
    // build
    build: {
      minify: true,
      lib: {
        entry: resolve('src/entry.js'),
        name: 'MyLib',
        fileName: 'my-lib',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
            //
          },
        },
      },
    },
  };
});
