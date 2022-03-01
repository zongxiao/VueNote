<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <div class="w1200">
      <ul>
        <li v-for="item in articleList" :key="item.id">
          <router-link :to="{ name: 'detail', params: { id: item.id } }">
            {{ item.title }}</router-link
          >
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
export default {
  name: "Blogs",
  components: {
    Banner
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
      articleList: [
        { id: "001", title: "文章标题1" },
        { id: "002", title: "文章标题2" },
        { id: "003", title: "文章标题3" },
        { id: "004", title: "文章标题4" },
        { id: "005", title: "文章标题5" },
      ],
    };
  },
};
</script>

<style>
</style>