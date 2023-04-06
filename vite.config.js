import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  return {
    // plugins
    plugins: [vue()],
    // build
    build: {
      minify: true,
      lib: {
        entry: resolve('src/main.js'),
        name: 'Vue3Fabric',
        fileName: 'vue3-fabric',
      },
      rollupOptions: {
        external: ['vue', 'fabric'],
        output: {
          globals: {
            vue: 'Vue',
            fabric: 'Fabric',
          },
        },
      },
    },
  };
});
