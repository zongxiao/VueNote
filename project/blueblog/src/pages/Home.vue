<template>
  <div>
    <HomeBanner />
    <HomeAbout />
    <HomePicList :MainAttr="projectAttr" :BannerObj="projectsBannerObj" :listArr="projectsArr"></HomePicList>
    <HomePicList :MainAttr="blogAttr" :listArr="blogsArr"></HomePicList>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeBanner from "../components/HomeBanner.vue";
import HomeAbout from "../components/HomeAbout.vue";
import HomePicList from "../components/HomePicList.vue";
export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeAbout,
    HomePicList
  },
  data() {
    return {
      projectAttr: {
        title: 'PROJECT',
        ifBanner: false,
        ifSearch: true
      },
      blogAttr: {
        title: 'BLOG',
        ifBanner: false,
        ifSearch: false
      },
      opacity: 0.90,
    }
  },
  activated() {
    console.log('home路由组件激活')
  },
  deactivated() {
    console.log('home路由组件失活')
  },
  computed: {
    ...mapState({projectsArr: 'projects', projectsBannerObj: 'projectsBanner'}),
    ...mapState({blogsArr: 'blogs'}),
  },
};
</script>

<style scoped>

</style>