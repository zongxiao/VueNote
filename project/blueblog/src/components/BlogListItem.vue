<template>
  <router-link
    class="blog_li"
    :to="{ name: 'detail', params: { id: this.blog.id } }"
  >
    <div class="figture"><img :src="blog.cover" alt="" /></div>
    <div class="text_box">
      <div class="main_info">
        <h4 class="title">{{ blog.title }}</h4>
        <p class="sub_title">{{ blog.subTitle }}</p>
      </div>
      <div class="others_info">
        <span>{{ blog.time }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BlogListItem",
  props: ["blog"],
};
</script>

<style lang="stylus" src="../assets/css/components/blog-list-item.styl"></style>