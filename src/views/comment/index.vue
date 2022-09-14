<template>
    <section class="main container mt-5 mb-5 border" style="border-radius: 1rem;">
        <div class="d-flex justify-content-between mt-5">
            <button type="button" class="btn btn-primary btn-gradient" data-bs-toggle="modal"
                data-bs-target="#exampleModal" data-bs-whatever="@mdo">给我们留言</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">留言</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">昵称</label>
                                    <input type="text" v-model="comment.name" class="form-control" id="recipient-name">
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">留言</label>
                                    <textarea v-model="comment.message" class="form-control"
                                        id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                            <button type="button" @click="sendComment" class="btn btn-primary">确定</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5 mb-5">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, sequi nam velit quibusdam
                            excepturi asperiores cumque aut vel iusto harum aperiam vitae reprehenderit laborum quidem
                            itaque exercitationem. Ipsa, voluptas est!
                        </p>
                        <div class="d-flex flex-row-reverse mt-5"> <a href="#"
                                class="card-link btn btn-warning">点击删除</a></div>

                    </div>
                    <div class="card-footer text-muted">
                        <span>name:</span>lin <sapn>time:</sapn>12.00
                    </div>
                </div>
            </div>
        <div class="col-12 d-flex flex-row-reverse">
            <button type="button" class="btn btn-lg btn-light">点击加载更多</button>
        </div>
    </section>
</template>
<script setup lang="ts">
import { RouteRecordName, useRouter } from 'vue-router';
import { onMounted, reactive, Ref, ref } from 'vue';
import { useActivity } from '@/store'
const router = useRouter()
const store = useActivity()
interface Icomment {
    name: string
    message: string
    activityId: number
    time: string
}
let comment: Ref<Icomment> = ref({
    name: "",
    message: "",
    activityId: store.activityId,
    time: ""
})
let sendComment = () => {
    console.log(comment.value)
}
</script>
<style scoped lang="scss">
.sendMessage {
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
}
@media (min-width:750px) {
    .main{
        width:50%
    }
}
</style>