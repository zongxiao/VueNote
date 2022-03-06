<template>
  <div class="blog_info">
    <div class="good_blogs">
      <h4>博主推荐</h4>
      <div class="list_box">
        <router-link class="item" v-for="(blog, index) in goodBlogs" :key="blog.id" :to="{ name: 'detail', params: { id: blog.id }}">
          <span>{{ index + 1 }}.</span>{{ blog.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogInfo',
  data() {
    return {
      goodBlogs: [
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
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/mixins.styl'
.blog_info
  width: 26%
  margin-left: 20px
  .good_blogs
    background-color: #fff
    padding: 16px
    h4
      font-size: 18px
      line-height: 24px
    .list_box
      margin-top: 10px
      .item
        font-size: 14px
        color: #333
        line-height: 2.2
        display: block
        ellipsis(1)
        &:hover
          text-decoration: underline
</style>