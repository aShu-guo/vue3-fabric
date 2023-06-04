<template>
  <div class="fabric-controls-box">
    <div class="fabric-controls">
      <div class="control-item vue3-fabric-iconfont" @click="handleScale(true)">
        &#xec14;<span class="icon-desc">放大</span>
      </div>
      <div class="control-item vue3-fabric-iconfont" @click="handleScale(false)">
        &#xec13;<span class="icon-desc">缩小</span>
      </div>
      <div class="control-item vue3-fabric-iconfont" @click="handleRotate(true)">
        &#xe602;<span class="icon-desc">顺时针</span>
      </div>
      <div class="control-item vue3-fabric-iconfont" @click="handleRotate(false)">
        &#xe601;<span class="icon-desc">逆时针</span>
      </div>
      <div class="control-item vue3-fabric-iconfont" @click="handleExport">
        &#xe82e;<span class="icon-desc">模糊</span>
      </div>
      <div class="control-item vue3-fabric-iconfont" @click="handleExport">
        &#xe6dd;<span class="icon-desc">图形</span>
      </div>
      <div class="control-item vue3-fabric-iconfont" @click="handleExport">
        &#xe734;<span class="icon-desc">文案</span>
      </div>
      <div class="control-item vue3-fabric-iconfont" @click="handleExport">
        &#xe60a;<span class="icon-desc">导出</span>
      </div>
    </div>
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
//
// const handleTag = () => {
//   emitter.emit('add:object');
// };
</script>

<style lang="less" scoped>
@import '../../assets/font/index.css';

.fabric-controls {
  display: flex;
  background: #fff;
  justify-content: center;
  box-shadow: 0 -1px 0 0 rgba(4, 0, 0, 0.05);
  padding: 8px;
  height: 48px;

  .control-item {
    height: 32px;
    border-radius: 4px;
    padding: 0 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: #2b2b2b;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 12px;

    &:not(:last-child) {
      margin-right: 10px;
    }

    .icon-desc {
      margin-left: 8px;
      line-height: 1;
    }
  }
}
</style>
