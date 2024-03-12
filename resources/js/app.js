import "./bootstrap";
import { createApp } from "vue";
import app from "./App.vue";
import vuetify from "./vuetify";

createApp(app).use(vuetify).mount("#app");