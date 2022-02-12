<template>
  <div>
    <HomeBanner />
    <HomePicList :MainAttr="projectAttr" :BannerObj="projectsBannerObj" :listArr="projectsArr"></HomePicList>
    <HomePicList :MainAttr="blogAttr" :BannerObj="blogsBannerObj" :listArr="blogsArr"></HomePicList>
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
        ifSearch: true
      },
      blogAttr: {
        title: 'BLOG',
        ifSearch: false
      }
    }
  },
  mounted() {
  },
  computed: {
    ...mapState({projectsArr: 'projects', projectsBannerObj: 'projectsBanner'}),
    ...mapState({blogsArr: 'blogs', blogsBannerObj: 'blogsBanner'}),
  },
};
</script>

<style scoped>

</style>