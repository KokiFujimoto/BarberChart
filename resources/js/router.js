import { createRouter, createWebHistory } from "vue-router";
import Hoge from "./components/Hoge.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/hoge",
            name: "hoge",
            component: Hoge,
        },
    ],
});

export default router;