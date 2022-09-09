<template>
           <nav class="navbar navbar-expand-lg bg-primary navbar-dark fixed-top">
            <div class="container">
                <a href="#" class="navbar-brand">BIGC-EXHIBITION</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse ms-5" id="navmenu">
                    <ul class="navbar-nav">
                        <!--margin start = margin left-->
                        <li class="nav-item">
                            <div class="nav-link">首页</div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link">活动</div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link">留言</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>
<style scoped>
    #navmenu{
        cursor: pointer;
    }
</style>