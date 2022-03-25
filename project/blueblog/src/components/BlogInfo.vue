<template>
  <div class="blog_info">
    <div class="module_box">
      <h4>博主推荐</h4>
      <div class="list_box">
        <router-link
          class="item"
          v-for="(blog) in goodBlogs"
          :key="blog.id"
          :to="{ name: 'detail', params: { id: blog.id } }"
        >
          {{ blog.title }}
        </router-link>
      </div>
    </div>
    <div class="module_box">
      <h4>站点信息</h4>
      <ul class="list_box">
        <li>上个月文章数：20</li>
        <li>历史文章总数：75</li>
        <li>建站日期：2022年</li>
      </ul>
    </div>
    <div class="module_box">
      <h4>常用导航</h4>
      <ul class="list_box">
        <li><a href=""></a></li>
      </ul>
    </div>
    <div class="module_box">
      <h4>友情链接</h4>
      <div class="list_box">...等待完善</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogInfo",
  props: ["goodBlogs"],
};
</script>

<style lang="stylus" src="../assets/css/components/blog-info.styl"></style>