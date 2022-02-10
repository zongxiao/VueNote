<template>
  <div>
    <Banner />
    <div class="index_projects w1200">
      <div class="projects_top">
        <h4 class="title">作品展示</h4>
        <div class="search_box">
          <input type="text" v-model="projectKeyword" placeholder="快速搜索" />
          <button class="button">search</button>
        </div>
      </div>
      <ul class="projects_body">
        <li v-for="item in myProjects" :key="item.name">
          <a :href="item.url" target="_blank">
            <img src="../assets/img/project/counterdays.jpeg" :alt="item.name" />
            <div class="mask">
              <div class="name">{{ item.name }}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import("../assets/css/home.styl")
export default {
  name: "Home",
  data() {
    return {
      myProjects: [
        {
          name: "countdays1",
          url: "https://github.com/zongxiao/countdown-days",
        },
        {
          name: "countdays2",
          url: "https://github.com/zongxiao/countdown-days",
        },
        {
          name: "countdays3",
          url: "https://github.com/zongxiao/countdown-days",
        },
        {
          name: "countdays4",
          url: "https://github.com/zongxiao/countdown-days",
        },
        {
          name: "countdays5",
          url: "https://github.com/zongxiao/countdown-days",
        },
        {
          name: "countdays6",
          url: "https://github.com/zongxiao/countdown-days",
        },
      ],
      projectKeyword: "",
    };
  },
  components: {
    Banner,
  },
};
</script>

<style scoped>

</style>