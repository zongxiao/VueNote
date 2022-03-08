<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <div class="blogs_box w1200">
      <BlogList />
      <BlogInfo :goodBlogs="goodBlogs" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/Banner.vue'
import BlogList from '../components/BlogList.vue'
import BlogInfo from '../components/BlogInfo.vue'
export default {
  name: "Blogs",
  components: {
    Banner,
    BlogList,
    BlogInfo
  },
  data() {
    return {
      bannerInfo: [
        { id: "001", url: "http://www.baidu.com", imgurl: "/img/banner/todos_banner2.jpg", }
      ],
    }
  },
  computed: {
    ...mapGetters(['goodBlogs'])
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/mixins.styl'
.blogs_box
  margin-top 40px
  display: flex
</style>