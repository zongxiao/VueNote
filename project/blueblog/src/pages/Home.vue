<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <div class="w1200" style="margin-top: 40px">
      <h4 class="title">BLOG</h4>
      <BlogListItem v-for="blog in homeBlogs" :key="blog.id" :blog="blog" />
    </div>
    <HomeAbout />
    <HomePiclist :MainAttr="projectAttr" :listArr="projectsArr"></HomePiclist>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { nanoid } from "nanoid";
import Banner from "../components/Banner";
import HomeAbout from "../components/HomeAbout";
import HomePiclist from "../components/HomePiclist";
import BlogListItem from "../components/BlogListItem";
export default {
  name: "Home",
  components: {
    Banner,
    HomeAbout,
    HomePiclist,
    BlogListItem,
  },
  data() {
    return {
      bannerInfo: [
        {
          id: nanoid(),
          url: "http://www.baidu.com",
          imgurl: "/img/banner/home_banner.png",
        },
        {
          id: nanoid(),
          url: "http://www.baidu.com",
          imgurl: "/img/banner/home_banner.png",
        },
      ],
      projectAttr: {
        title: "PROJECT",
        ifSearch: true,
      },
    };
  },
  activated() {
    console.log("home路由组件激活");
  },
  deactivated() {
    console.log("home路由组件失活");
  },
  computed: {
    ...mapState({ projectsArr: "projects" }),
    ...mapState({ blogsArr: "blogs" }),
    ...mapGetters({ homeBlogs: "homeBlogs" }),
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 2%;
}
</style>