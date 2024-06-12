import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/:catchAll(.*)",
        component: () => import("./Pages/Home.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
