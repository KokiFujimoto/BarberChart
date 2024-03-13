import "./bootstrap";
import { createApp } from "vue";
import app from "./App.vue";
import vuetify from "./vuetify";
import router from './router.js';
import '@mdi/font/css/materialdesignicons.css';

createApp(app).use(vuetify).use(router).mount("#app");