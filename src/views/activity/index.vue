<template>
  <section class="mt-5 p-5 container text-center " >
    <div class="card mb-3">
    <div class="row">
      <div class="col-md-4">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>  
          <button class="btn btn-primary btn-lg" @click='getDetail("ActivityDetail")'>点击了解更多</button>
        </div>
      </div>
      <div class="col-md-8 ">
        <div class="carousel slide  img-fluid rounded-start " data-bs-ride="carousel" >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
          </div>
          <div class="carousel-inner" >
            <div class="carousel-item  active">
              <img :src="imgsrc" class="d-block w-100 carousel-img" alt="..." >
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>
<script setup lang="ts">
import { RouteRecordName, useRouter } from 'vue-router';
import { onMounted, Ref, ref } from 'vue';
const router = useRouter()
const imgsrc: Ref<string> = ref("src/assets/bg.jpeg")
let getDetail=(index:RouteRecordName)=>{
  router.push({name:index})
}
</script>
<style scoped lang="scss">
.card{
  border-radius: 1rem;
}
.carousel-img{
  border-radius: 1rem;
}
@media(min-width:760px){
  .carousel-img{
    border-radius:0 1rem 1rem 0; 
  }
}
</style>