<template>
    <section class="pt-7  bg-primary bg-gradient text-center text-light text-sm-start">
        <div class="container">
            <div class="pt-5 d-md-flex align-items-center">
                <img src="/vite.svg" alt="vite" class="w-50 d-md-none mb-2" />
                <div class="pt-5">
                    <h1>
                        BIGC物理展示平台
                    </h1>
                    <p class="my-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusamus nam commodi provident
                        error quam cupiditate velit amet odio, obcaecati itaque quod magnam omnis laudantium, et
                        tenetur? Veniam, ipsum consectetur?
                    </p>
                    <div class="pt-5">
                        <button @click="joinUs" class="btn btn-light btn-lg">加入我们</button>
                        <router-link to="/activity"><button class="btn mx-5 btn-warning btn-lg">参加活动 </button>
                        </router-link>
                    </div>
                </div>
                <img :src="icon" alt="vite" class="w-50 d-none d-md-block" />
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1"
                d="M0,96L24,85.3C48,75,96,53,144,48C192,43,240,53,288,85.3C336,117,384,171,432,202.7C480,235,528,245,576,229.3C624,213,672,171,720,144C768,117,816,107,864,128C912,149,960,203,1008,229.3C1056,256,1104,256,1152,218.7C1200,181,1248,107,1296,96C1344,85,1392,139,1416,165.3L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z">
            </path>
        </svg>
    </section>
    <section class="text-light">
        <div class="container">
            <h3 class="mb-3 text-dark text-center">注册账号开始学习之旅</h3>
            <div class="heading-line"></div>
            <div class="d-md-flex justify-content-center">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="请输入你的邮箱" />
                    <button class="btn btn-warning  btn-lg">注册</button>
                </div>
            </div>
        </div>
    </section>
    <section class="p-5">
        <div class="container">
            <div class="row g-4">
                <div v-for="activity in activitis" class="col-md">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="card-title">{{activity.name}}</div>
                            <div class="card-text ">{{activity.content}}</div>
                            <a @click="handelSelect(activity.index)" class="btn btn-warning mt-2">点击进入</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-5 bg-primary bg-gradient text-light text-center text-sm-start">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1"
                d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
        </svg>
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md">
                    <img src="/vite.svg" alt="vite" class="img-fluid w-50" />
                </div>
                <div class="col-md p-5">
                    <h2>课程介绍</h2>
                    <p class="lead">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium ea ratione corporis et provident.
                        Quia!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Amet nostrum, aperiam assumenda vitae, beatae
                        at sint quaerat consequatur maxime, hic voluptatum
                        ex. Dolor minus perferendis magni autem
                        exercitationem quis quos.
                    </p>
                    <a href="" class="btn btn-warning">查看更多</a>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row align-items-center justify-content-between">

                <div class="col-md p-5">
                    <h2>课程介绍</h2>
                    <p class="lead">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium ea ratione corporis et provident.
                        Quia!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Amet nostrum, aperiam assumenda vitae, beatae
                        at sint quaerat consequatur maxime, hic voluptatum
                        ex. Dolor minus perferendis magni autem
                        exercitationem quis quos.
                    </p>
                    <a href="" class="btn btn-warning">查看更多</a>
                </div>
                <div class="col-md">
                    <img src="/vite.svg" alt="vite" class="img-fluid w-50" />
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1"
                d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </section>
</template>
<script lang="ts" setup>
import { RouteRecordName, useRouter } from 'vue-router';
import { onMounted, reactive, Ref, ref } from 'vue';
const router = useRouter()
interface Iactivity {
    name: String
    index: RouteRecordName | undefined
    content: String
}
const activitis: Ref<Iactivity[]> = ref([{
    name: "光学知识", index: "one", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Magni abmaiores consequatur aliquam, quia doloremque.Eius laborum id ducimus amet porro,dolorum,officiis consectetur vero rerum quam eum consequuntur sapiente."
}, {
    name: "光学知识", index: "one", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Magni abmaiores consequatur aliquam, quia doloremque.Eius laborum id ducimus amet porro,dolorum,officiis consectetur vero rerum quam eum consequuntur sapiente."
},
{
    name: "光学知识", index: "one", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Magni abmaiores consequatur aliquam, quia doloremque.Eius laborum id ducimus amet porro,dolorum,officiis consectetur vero rerum quam eum consequuntur sapiente."
}])
// TODO 图片更换
const icon = ref("/vite.svg")
// TODO 路由跳转到对应的活动界面
let handelSelect = (index: RouteRecordName | undefined) => {
    console.log(index)
}
// TODO 加入方式
let joinUs = () => {

}
</script>
    
<style scoped lang="scss">
@import "@/assets/scss/main.scss";

@media (min-width:768px) {
    .news-input {
        width: 50%
    }
}
</style>