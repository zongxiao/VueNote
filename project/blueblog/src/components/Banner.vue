<template>
  <div class="banner swiper-container w1200">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in BannerInfo" :key="item.id">
        <a :href="item.url"><img :src="item.imgurl" alt="" /></a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "Banner",
  props: ["BannerInfo"],
  swiper: null,
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      speed: 1000,
      autoplay: 4000,
      pagination: ".swiper-pagination",
      paginationClickable: true,
    });
  },
};
</script>

<style lang="stylus" src="../assets/css/components/banner.styl"></style>