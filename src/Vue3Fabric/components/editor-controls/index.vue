<template>
  <div class="fabric-controls-box">
    <slot>
      <div class="fabric-controls">
        <div class="control-item" @click="handleTag">添加标记</div>
        <div class="control-item" @click="handleScale(true)">放大</div>
        <div class="control-item" @click="handleScale(false)">缩小</div>
        <div class="control-item" @click="handleRotate(true)">顺时针</div>
        <div class="control-item" @click="handleRotate(false)">逆时针</div>
        <div class="control-item" @click="handleExport">导出</div>
      </div>
    </slot>
  </div>
</template>

<script setup name="EditorControls">
import { inject } from 'vue';

const emitter = inject('emitter');
const handleScale = (isZoomIn) => {
  emitter.emit('zoom', isZoomIn);
};

const handleRotate = (isClock) => {
  emitter.emit('rotate', isClock);
};

const handleExport = () => {
  emitter.emit('export');
};

const handleTag = () => {
  emitter.emit('add:object');
};

defineExpose({
  handleScale,
  handleRotate,
});
</script>

<style lang="less" scoped>
.fabric-controls {
  display: flex;

  .control-item {
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
