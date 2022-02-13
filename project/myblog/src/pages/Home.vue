<template>
  <div>
    <HomeBanner />
    <HomePicList :MainAttr="projectAttr" :BannerObj="projectsBannerObj" :listArr="projectsArr"></HomePicList>
    <HomePicList :MainAttr="blogAttr" :listArr="blogsArr"></HomePicList>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeBanner from "../components/HomeBanner.vue";
import HomePicList from "../components/HomePicList.vue";
export default {
  name: "Home",
  components: {
    HomeBanner,
    HomePicList
  },
  data() {
    return {
      projectAttr: {
        title: 'PROJECT',
        ifBanner: true,
        ifSearch: true
      },
      blogAttr: {
        title: 'BLOG',
        ifBanner: false,
        ifSearch: false
      }
    }
  },
  mounted() {
  },
  computed: {
    ...mapState({projectsArr: 'projects', projectsBannerObj: 'projectsBanner'}),
    ...mapState({blogsArr: 'blogs'}),
  },
};
</script>

<style scoped>

</style>