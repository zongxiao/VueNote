<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <div class="blogs_box w1200">
      <div class="blog_list">
        <ul>
          <li v-for="blog in blogList" :key="blog.id">
            <BlogListItem :blog="blog" />
          </li>
        </ul>
      </div>
      <div class="blog_side">
        <BlogSideModule :data="goodBlogs" moduleTitle="精选文章" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Banner from "../components/Banner";
import BlogListItem from "../components/BlogListItem";
import BlogSideModule from '../components/BlogSideModule'
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
    };
  },
  computed: {
    ...mapState({ blogList: "blogs" }),
    ...mapGetters(["goodBlogs"]),
  },
};
</script>

<style>
.blogs_box {
  margin-top: 40px;
  display: flex;
}
.blog_list {
  flex: 1;
}
.blog_list ul li {
  margin: 0 0 20px 0;
}
.blog_side {
  width: 300px;
  margin-left: 20px;
}
</style>