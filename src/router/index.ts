import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            // 主页
            path: "/",
            name: "Home",
            component: () => import("@/views/home/index.vue"),
        },
        {
            // 活动
            path: "/activity",
            name: "Activity",
            component: () => import("@/views/activity/index.vue"),
        },
        {
            // 留言
            path: "/comment",
            name: "Comment",
            component: () => import("@/views/comment/index.vue"),
        },
    ]
})