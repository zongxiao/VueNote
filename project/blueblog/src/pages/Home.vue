<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <HomeAbout />
    <HomePicList :MainAttr="projectAttr" :BannerObj="projectsBannerObj" :listArr="projectsArr"></HomePicList>
    <HomePicList :MainAttr="blogAttr" :listArr="blogsArr"></HomePicList>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from 'nanoid'
import Banner from "../components/Banner.vue";
import HomeAbout from "../components/HomeAbout.vue";
import HomePicList from "../components/HomePicList.vue";
export default {
  name: "Home",
  components: {
    Banner,
    HomeAbout,
    HomePicList
  },
  data() {
    return {
      bannerInfo: [
        {
          id: nanoid(),
          url: 'http://www.baidu.com',
          imgurl: '/img/banner/home_banner.png'
        },
        {
          id: nanoid(),
          url: 'http://www.baidu.com',
          imgurl: '/img/banner/home_banner.png'
        }
      ],
      projectAttr: {
        title: 'PROJECT',
        ifBanner: true,
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