import { createRouter, createWebHistory } from "vue-router";

// Default Pages
import home from "../home.vue";

const routes = [
    // Routes
    {
        path: "/",
        name: "home",
        component: home,
        meta: { title: "Availtrade" },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;