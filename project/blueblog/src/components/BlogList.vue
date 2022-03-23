<template>
  <div class="blog_list">
    <ul>
      <li v-for="blog in blogList" :key="blog.id">
        <BlogListItem :blog="blog" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BlogListItem from "../components/BlogListItem.vue";
export default {
  name: "BlogList",
  components: {
    BlogListItem,
  },
  computed: {
    ...mapState({ blogList: "blogs" }),
  },
};
</script>

<style>
.blog_list {
  flex: 1;
}
.blog_list ul li {
  margin: 0 0 2% 0;
}
</style>