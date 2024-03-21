// router.js

import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home/index.vue";
import Customer from "./pages/Customer/index.vue";
import Chart from "./pages/Chart/index.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/customer",
            name: "customer",
            component: Customer,
        },
        {
            path: "/chart",
            name: "chart",
            component: Chart,
        },
    ],
});

export default router;
