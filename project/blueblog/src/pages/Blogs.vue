<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <div class="blogs_box w1200" ref="blogListBox">
      <div class="blog_list">
        <ul>
          <li v-for="blog in blogList" :key="blog.id">
            <BlogListItem :blog="blog" />
          </li>
        </ul>
      </div>
      <div class="blog_side">
        <div
          :class="{ iffixed: ifFixed, scroll_style: ifOverMaxHeight }"
          :style="{ 'max-height': fixedBoxMaxHeight + 'px' }"
          ref="fixedBox"
        >
          <BlogSideModule :data="goodBlogs" moduleTitle="精选文章" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Banner from "../components/Banner";
import BlogListItem from "../components/BlogListItem";
import BlogSideModule from "../components/BlogSideModule";
export default {
  name: "Blogs",
  components: {
    Banner,
    BlogListItem,
    BlogSideModule,
  },
  data() {
    return {
      bannerInfo: [
        {
          id: "001",
          url: "http://www.baidu.com",
          imgurl: "/img/banner/todos_banner2.jpg",
        },
      ],
      ifFixed: false,
      fixedBoxMaxHeight: 600,
      ifOverMaxHeight: false,
    };
  },
  computed: {
    ...mapState({ blogList: "blogs" }),
    ...mapGetters(["goodBlogs"]),
  },
  mounted() {
    this.ifOverMaxHeight =
      this.$refs.fixedBox.clientHeight >= this.fixedBoxMaxHeight ? true : false;
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const offsetTop = this.$refs.blogListBox.offsetTop;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.ifFixed = scrollTop > offsetTop ? true : false;
    },
  },
};
</script>

<style lang="stylus" src="../assets/css/blogs.styl"></style>