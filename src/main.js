import Vue3Fabric from './Vue3Fabric/index.vue';
export * from './style.css';
export * from './Vue3Fabric/components/index';
export { Vue3Fabric };
export default {
  install(app) {
    app.component('Vue3Fabric', Vue3Fabric);
  },
};
