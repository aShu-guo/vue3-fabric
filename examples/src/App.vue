<template>
  <Vue3Fabric :width="1000" :height="700" :source="source" />
</template>
<script setup>
// 开发时使用
import Vue3Fabric from '../../../vue3-fabric/src/index.vue';
// npm link时使用
// import { Vue3Fabric, FabricImage, EditorControls } from 'vue3-fabric';
// import 'vue3-fabric/dist/style.css';
import { onMounted, ref } from 'vue';
const source = ref('');
onMounted(() => {
  setTimeout(() => {
    // source.value = 'http://124.160.84.122:8888/group2/M00/00/65/rA8CRWQ8xI6AakiDABjY4q2txkY783.png';
    source.value = 'http://124.160.84.122:8888/group2/M00/00/65/rA8CRWQ83taAYEZUABYByf1oq8k268.png';
  });
});
// photoEditor.value.loadImg()
</script>
