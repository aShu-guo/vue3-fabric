<template>
  <div class="vue3-fabric" :style="{ width: `${width}px` }">
    <div class="canvas-box">
      <canvas id="vue3-fabric-canvas" :width="width" :height="height"></canvas>
    </div>
    <FabricImage :source="source" />
    <EditorControls />
  </div>
</template>

<script setup name="Index">
import { fabric } from 'fabric';
import { EditorControls, FabricImage } from './components';

import { onMounted, provide, ref } from 'vue';
import mitt from 'mitt';

const emitter = mitt();
defineProps({
  width: { type: Number, default: 1000 },
  height: { type: Number, default: 700 },
  source: { type: [Array, String], required: true },
  controls: { type: Array },
});

const canvas = ref(null);
provide('canvas', canvas);
provide('emitter', emitter);

onMounted(() => {
  canvas.value = new fabric.Canvas('vue3-fabric-canvas', {
    backgroundColor: '#F0F1F2',
  });
});
</script>

<style lang="less" scoped>
.vue3-fabric {
  //background-color: rgb(28, 29, 38);
  cursor: auto;

  .canvas-box {
  }
}
</style>
