import Index from './components/index.vue';
export default {
  install(app) {
    app.component('MyLib', Index);
  },
};
