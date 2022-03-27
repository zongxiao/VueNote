<template>
  <div class="w1200 detail_box">
    <div class="left_box" >
      <div class="article_top">
        <h4 class="tit">{{ detail.title }}</h4>
        <div class="others">
          <span>时间：{{ detail.time }}</span>
          <span>分类：{{ detail.type }}</span>
        </div>
      </div>
      <div class="article_content" v-html="detail.content"></div>
    </div>
    <div class="right_box">
      <BlogSideModule
        v-show="relatedBlogs.length"
        moduleTitle="相关文章"
        :data="relatedBlogs"
      />
      <BlogSideModule :data="goodBlogs" moduleTitle="精选文章" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BlogSideModule from "../components/BlogSideModule";
export default {
  name: "Detail",
  props: ["id"],
  date() {
    return {
      relatedModuleFixed: false
    }
  },
  components: {
    BlogSideModule,
  },
  computed: {
    ...mapState(["detail", "relatedBlogs"]),
    ...mapGetters(["goodBlogs"]),
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector('.left_box').offsetTop
      if (scrollTop > offsetTop) {
        this.relatedModuleFixed = true;
      } else {
        this.relatedModuleFixed = false;
      }
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(newValue) {
        this.$store.dispatch("findblogbyid", newValue);
      },
    },
    detail: {
      immediate: true,
      deep: true,
      handler(newValue) {
        document.title = this.detail.title;
        this.$store.dispatch("findblogsbytype", {
          type: newValue.type,
          id: this.id,
        });
      },
    },
  },
};
</script>

<style lang="stylus" src="../assets/css/detail.styl"></style>