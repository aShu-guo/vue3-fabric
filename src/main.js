import Vue3Fabric from './index.vue';
export * from './style.css';
export * from './components/index';
export { Vue3Fabric };
export default {
  install(app) {
    app.component('Vue3Fabric', Vue3Fabric);
  },
};
