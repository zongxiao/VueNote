<template>
  <div class="module_box">
    <h4>{{ moduleTitle }}</h4>
    <div class="list_box">
      <router-link
        class="item"
        v-for="item in data"
        :key="item.id"
        :to="{ name: 'detail', params: { id: item.id } }"
      >
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSideModule",
  props: ["moduleTitle", "data"],
};
</script>

<style lang="stylus" src="../assets/css/components/blog-side-module.styl"></style>

