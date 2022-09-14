<template>
    <div class="vh-100 bgdiv">  
       
           
        
        <section class="container pt-10 animate__animated animate__bounceIn">
            <div class="text-center text-dark fs-2">
                <i class="bi bi-bank text-dark"></i>
                欢迎登录Bigc-Exhibition后台管理系统！
            </div>
        </section>
        <section class="container-fluid animate__animated animate__fadeInUp">
            <div class="pt-5 ">
                <div class="d-flex justify-content-center ">
                    <div class=" col-md-4 col-sm-12 shadow-lg p-5"
                        style="background-color:aliceblue; border-radius:1rem;">
                        <div class="text-center">
                            <h3 class="text-primary">请登录</h3>
                        </div>
                        <div class="p-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-secondary"><i
                                        class="bi bi-person-fill text-white"></i></span>
                                <input type="text" class="form-control" placeholder="用户名">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-secondary"><i
                                        class="bi bi-key-fill text-white"></i></span>
                                <input type="password" class="form-control" placeholder="密码">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-secondary"><i
                                        class="bi bi-lock-fill text-white"></i></span>
                                <input type="text" class="form-control" placeholder="输入下图中的校验码">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-secondary"><i
                                        class="bi bi-image-fill text-white"></i></span>
                                <img src="simpleCaptcha.png" alt="CAPTCHA Image"
                                    class="img-responsive captchaImg"><button type="button"
                                    class="btn btn-outline-blue"><i class="bi bi-arrow-repeat text-black"></i>
                                </button>
                            </div>

                            <button type="submit" class="btn btn-primary btn-lg px-4 float-end mt-4 d-block">登录</button>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import 'animate.css';
</script>
<style scoped lang="scss">

 .bgdiv{
        background-repeat: no-repeat;
        background-image: url("@/assets/bg.jpeg")
    }
</style>