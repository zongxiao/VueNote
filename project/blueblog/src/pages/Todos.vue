<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <div class="todos_box w1200">
      <todos-header></todos-header>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import TodosHeader from "../components/TodosHeader.vue";
export default {
  name: "Todos",
  components: {
    Banner,
    TodosHeader,
  },
  data() {
    return {
      bannerInfo: [
        {
          id: "001",
          url: "http://www.baidu.com",
          imgurl: "/img/banner/todos_banner.png",
        },
      ],
      input: "",
    };
  },
};
</script>

<style lang="stylus">
.todos_box
  margin-top 40px
</style>