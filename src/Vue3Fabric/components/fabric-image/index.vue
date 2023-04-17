<template></template>
<script setup name="FabricImage">
import { inject, watch } from 'vue';
import useImageLoader from '../../loader/image.js';
const emitter = inject('emitter');
const props = defineProps({
  source: { type: String, required: true },
  position: { type: String, default: 'center' },
  scale: { type: Number, default: 0.5 },
  scaleStep: { type: Number, default: 0.15 },
  animation: { type: Boolean, default: true },
  evented: { type: Boolean, default: true },
});

const canvas = inject('canvas');
const { zoomIn, zoomOut, loadImg, clockRotate, antiClockRotate } = useImageLoader(canvas, props);
watch(
  () => props.source,
  () => {
    loadImg(props.source);
  },
);
emitter.on('zoom', (isZoomIn) => {
  if (isZoomIn) {
    zoomIn(props.scaleStep);
  } else {
    zoomOut(props.scaleStep);
  }
});
emitter.on('rotate', (isClock) => {
  if (isClock) {
    clockRotate();
  } else {
    antiClockRotate();
  }
});
</script>
