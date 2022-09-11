<template>
    <!-- shadow 阴影 bg-gradient 渐变 -->
    <nav class="navbar navbar-expand-lg bg-gradient shadow bg-primary navbar-dark fixed-top">
        <div class="container">
            <a href="#" class="navbar-brand text-warning  fs-3">BIGC-EXHIBITION</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse ms-5" id="navmenu">
                <ul class="navbar-nav ">
                    <!--margin start = margin left-->
                    <li v-for="item in items" class="nav-item  px-5 fs-5 text-light" style="border-radius:1rem;">
                        <a  class="nav-link" :class="{'active':item.active}" @mouseover="item.active=true" @mouseleave="item.active=false" @click="handelSelect(item.index)"><i class="bi" :class="item.icon"></i> {{item.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { RouteRecordName, useRouter } from 'vue-router';
import { onMounted,ref,Ref } from 'vue';
const router = useRouter()
let active:Ref<Boolean>=ref(true)
interface Iitem{
    name:string
    index:RouteRecordName | undefined
    icon:string
    active:boolean
}
let items:Ref<Iitem[]> = ref([{ name: "首页", index: "Home" ,icon:"bi-house-heart",active:false},
                { name: "活动", index: "Activity",icon:"bi-dribbble",active:false },
                { name: "留言", index: "Comment",icon:"bi-chat-left-dots",active:false }])
/**
 * 路由跳转
 * @param index 
 */
let handelSelect = (index: RouteRecordName | undefined) => {
    router.push({ name: index })
}
onMounted(() => {
    handelSelect("Home")
})
</script>
<style scoped lang="scss">
@import "@/assets/scss/main.scss";
#navmenu {
    cursor: pointer;
}
</style>