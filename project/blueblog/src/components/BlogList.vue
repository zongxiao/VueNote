<template>
  <div class="blog_list">
    <BlogListItem v-for="blog in blogList" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BlogListItem from '../components/BlogListItem.vue'
export default {
  name: 'BlogList',
  components: {
    BlogListItem
  },
  computed: {
    ...mapState({blogList: 'blogs'})
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/mixins.styl'
.blog_list
  flex: 1
</style>