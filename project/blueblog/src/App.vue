<template>
  <div id="app">
    <AllHeader />
    <!-- 缓存Home组件，使其不会被销毁 -->
    <keep-alive :include="['Home', 'Blogs', 'Todos']">
      <router-view />
    </keep-alive>
    <AllFooter />
  </div>
</template>

<script>
import axios from 'axios'
import("./assets/css/common.styl");
import AllHeader from "./components/AllHeader.vue";
import AllFooter from "./components/AllFooter.vue";
export default {
  name: "App",
  components: {
    AllHeader,
    AllFooter,
  },
  mounted() {
    axios.get('/7000/blogs').then(res => {
      alert('app组件请求blogs接口' + res)
      console.log(res)
    })
  }
};
</script>

<style lang="stylus">
@import './assets/css/mixins.styl'
.w1200
  max-width: 1226px
  width: 100%
  margin: 0 auto
</style>
