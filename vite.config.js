import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
    server: {
        hmr: { host: 'localhost' },
        host: 'localhost',
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        Components({
            resolvers: [VuetifyResolver()],
        }),
    ],
    define: { 'process.env': {} },
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    css: {
        preprocessorOptions: {
        scss: {
            additionalData: "\n@import 'src/styles/variables.scss';\n",
        },
      },
    },
});
