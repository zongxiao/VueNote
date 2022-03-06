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
  props: ['BannerInfo'],
  swiper: null,
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      speed: 1000,
      autoplay: 4000,
      pagination : '.swiper-pagination',
      paginationClickable :true,
    });
  },
};
</script>

<style lang="stylus">
@import '../assets/css/mixins.styl'
.banner
  font-size 0
  margin-top 16px
  .swiper-wrapper
    .swiper-slide
      img
        width 100%
  .swiper-pagination
    display: inline-block
    width: auto
    padding: 6px 7.5px
    border-radius: 13.5px
    background-color: #fff
    left: 50%
    bottom: 22px
    translate-x(-50%)
    .swiper-pagination-bullet
      width: 15px
      height: 15px
      margin: 0 7.5px
    .swiper-pagination-bullet-active
      background-color: $primary-color
</style>