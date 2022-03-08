<template>
  <div class="blog_info">
    <div class="module_box">
      <h4>站点信息</h4>
      <ul class="list_box">
        <li>上个月文章数：20</li>
        <li>历史文章总数：75</li>
        <li>建站日期：2022年</li>
      </ul>
    </div>
    <div class="module_box">
      <h4>博主推荐</h4>
      <div class="list_box">
        <router-link class="item" v-for="(blog, index) in goodBlogs" :key="blog.id" :to="{ name: 'detail', params: { id: blog.id }}">
          <span>{{ index + 1 }}.</span>{{ blog.title }}
        </router-link>
      </div>
    </div>
    <div class="module_box">
      <h4>常用导航</h4>
      <ul class="list_box">
        <li><a href=""></a></li>
      </ul>
    </div>
    <div class="module_box">
      <h4>友情链接</h4>
      <div class="list_box">
        ...等待完善
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogInfo',
  props: ['goodBlogs'],
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/mixins.styl'
.blog_info
  width: 26%
  margin-left: 20px
  .module_box
    background-color: #fff
    padding: 20px
    margin-bottom: 20px
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
      li
        font-size: 14px
        color: #333
        line-height: 2.2
        display: block
</style>