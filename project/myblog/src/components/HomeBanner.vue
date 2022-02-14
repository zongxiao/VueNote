<template>
  <div class="banner swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../assets/img/banner/banner.png" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/img/banner/banner.png" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../assets/img/banner/banner.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "Banner",
  swiper: null,
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      speed: 3000,
      autoplay: 3000,
    });
  },
};
</script>

<style lang="stylus">
.banner
  font-size 0
  img
    width 100%
</style>