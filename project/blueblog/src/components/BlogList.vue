<template>
  <div class="blog_list">
    <BlogListItem v-for="blog in blogList" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import BlogListItem from '../components/BlogListItem.vue'
export default {
  name: 'BlogList',
  components: {
    BlogListItem
  },
  data() {
    return {
      blogList: [
        {
          id: '001',
          cover: '/img/blog/001.jpg',
          title: '用Html标签和CSS3写的一个手机！',
          subTitle: '手机外形上来说就是长方形，然后加上圆角边框，如果是简单的平面图形，几分钟就可以用html标签和css写一个手机模型。但如果有高光，菱角等让手机展示的更逼真，可以用到css背景渐变属性。',
          time: '2022-03-04',
          type: 'css3'
        },
        {
          id: '002',
          cover: '/img/blog/002.jpg',
          title: '10分钟用Html+css写一个渐变背景的个人名片',
          subTitle: '个人名片在个人博客网站上的位置一般是在首页右上角，一点开网站就能看见，信息不多，但是对于访客说，可以直观快速的了解这个网站的站长信息。接下来就花10分钟，来用html标签+css写一个个人名片吧。',
          time: '2022-03-04',
          type: 'css3'
        }
      ]
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/mixins.styl'
.blog_list
  flex: 1
</style>