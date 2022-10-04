import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            // 主页
            path: "/",
            name: "Index",
            component: () => import("@/views/home/index.vue"),
            children:[
                {
                    // 活动
                    path: "home",
                    name: "Home",
                    component: () => import("@/views/home/main.vue"),
                },
                {
                    // 活动
                    path: "activity",
                    name: "Activity",
                    component: () => import("@/views/activity/index.vue"),
                },
                {
                    // 留言
                    path: "comment",
                    name: "Comment",
                    component: () => import("@/views/comment/index.vue"),
                },
                {
                    // 活动
                    path: "/activitydetail",
                    name: "ActivityDetail",
                    component: () => import("@/views/activity/detail.vue"),
                },
            ]
        },
        {
            // 主页
            path: "/login",
            name: "Login",
            component: () => import("@/views/admin/login.vue"),
        },
        
    ]
})