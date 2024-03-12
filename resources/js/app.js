import './bootstrap';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify'
import App from "../views/vue/App.vue"
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const app = createApp(App);
const vuetify = createVuetify({
    components: {
        components,
    },
    components,
    directives,
    ssr: true
});

app.use(vuetify) 
app.mount('#app');