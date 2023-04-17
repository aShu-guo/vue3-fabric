<template>
  <div class="vue3-fabric">
    <canvas id="canvas" :width="width" :height="height"></canvas>
    <slot></slot>
  </div>
</template>

<script setup name="Index">
import { fabric } from 'fabric';
import { onMounted, provide, ref } from 'vue';
import mitt from 'mitt';

const emitter = mitt();
defineProps({
  width: { type: Number, default: 1000 },
  height: { type: Number, default: 700 },
});

const canvas = ref(null);
provide('canvas', canvas);
provide('emitter', emitter);

onMounted(() => {
  canvas.value = new fabric.Canvas('canvas');
});
</script>

<style lang="less" scoped>
.vue3-fabric {
  :deep(.canvas-container) {
    border: 1px solid black;
  }
}
</style>
