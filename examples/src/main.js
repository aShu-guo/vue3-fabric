import { createApp } from 'vue';
import App from './App.vue';
import Vue3Fabric from 'vue3-fabric';

const app = createApp(App);
app.use(Vue3Fabric).mount('#app');
