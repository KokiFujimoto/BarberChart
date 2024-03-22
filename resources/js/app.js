import { createApp } from "vue";
import app from "./App.vue";
import vuetify from "./vuetify";
import router from './router.js';
import '@mdi/font/css/materialdesignicons.css';
import { formatDate, formatDateSlash, formatDateHyphen, occupations, ages, calculateAge } from './common.js';

// Vueアプリケーションを作成
const vueApp = createApp(app);

// 共通関数をVueのプロトタイプに追加
vueApp.config.globalProperties.$formatDate = formatDate;
vueApp.config.globalProperties.$formatDateSlash = formatDateSlash;
vueApp.config.globalProperties.$formatDateHyphen = formatDateHyphen;
vueApp.config.globalProperties.$occupations = occupations;
vueApp.config.globalProperties.$ages = ages;
vueApp.config.globalProperties.$calculateAge = calculateAge;

// Vueアプリケーションにプラグインを追加し、マウント
vueApp.use(vuetify).use(router).mount("#app");
