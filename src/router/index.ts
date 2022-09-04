import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            // 主页
            path: "/",
            name: "Home",
            component: () => import("@/views/home/index.vue"),
        }]
})