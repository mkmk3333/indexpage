<template>
<div class="container pic">
  <div id="demo" class="carousel slide" data-bs-ride="carousel">
 
   <!-- 指示符 -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <!-- 轮播图片 -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img decoding="async" src="@/assets/picture/1.jpg" class="d-block" style="width:100%">
    </div>
    <div class="carousel-item">
      <img decoding="async" src="@/assets/picture/2.jpg" class="d-block" style="width:100%">
    </div>
    <div class="carousel-item">
      <img decoding="async" src="@/assets/picture/3.jpg" class="d-block" style="width:100%">
    </div>
  </div>
  
  <!-- 左右切换按钮 -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
</div>
<div class="container button">
    <div class="row">
        <div class="col-md-2 offset-md-5">
            <button class="btn btn-light btn-lg" @click="toMain">Main</button>
        </div>
    </div>
</div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    name:"PicDisplay",
    setup(){
        const myrouter = useRouter();
        function toMain(){
            myrouter.push('Main')
        }
        return {
            toMain,
        }
    }
}
</script>

<style>
.pic{
    max-height: 80%;
}
.button{
    margin-top:10px;
}
</style>