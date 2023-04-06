import Vue3Fabric from './Vue3Fabric/index.vue';
import './main.css';
export default {
  install(app) {
    app.component('Vue3Fabric', Vue3Fabric);
  },
};
