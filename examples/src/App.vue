<template>
  <Vue3Fabric :width="1000" :height="700">
    <FabricImage :source="source" />
    <EditorControls />
  </Vue3Fabric>
</template>
<script setup>
import Vue3Fabric from '../../src/Vue3Fabric/index.vue';
import FabricImage from '../../src/Vue3Fabric/components/fabric-image/index.vue';
import EditorControls from '../../src/Vue3Fabric/components/editor-controls/index.vue';

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
