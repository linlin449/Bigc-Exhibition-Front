<template>
    
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
        data-bs-whatever="@mdo">Open modal for @mdo</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Recipient:</label>
                            <input type="text" v-model="comment.name" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Message:</label>
                            <textarea v-model="comment.message" class="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" @click="sendComment" class="btn btn-primary">Send message</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import { RouteRecordName, useRouter } from 'vue-router';
import { onMounted, reactive, Ref, ref } from 'vue';
import { useActivity } from '@/store'
const router = useRouter()
const store =useActivity()
interface Icomment {
    name: string
    message: string
    activityId: number
}
let comment: Ref<Icomment> = ref({
    name: "",
    message: "",
    activityId:store.activityId
})
let sendComment = () => {
    console.log(comment.value)
}
</script>
<style scoped lang="scss">
@import "@/assets/scss/main.scss";
</style>