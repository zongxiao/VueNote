<template>
  <div class="index_projects w1200">
    <div class="projects_top">
      <h4 class="title">作品展示</h4>
      <div class="search_box">
        <input
          type="text"
          v-model="projectKeyword"
          ref="searchInput"
          placeholder="快速搜索"
          @blur="handleFilter"
        />
      </div>
    </div>
    <ul class="projects_body">
      <li class="card_box" v-for="item in projects" :key="item.name">
        <a class="card_cover" :href="item.url" target="_blank">
          <img :src="item.cover" :alt="item.name" />
        </a>
        <div class="card_info">
          <div class="name">{{ item.name }}</div>
          <div class="subname">{{ item.describe }}</div>
          <div class="pubtime">时间：{{ item.doneTime }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import("../assets/css/components/home_projects.styl");
import { mapState } from "vuex";
export default {
  name: "HomeProject",
  data() {
    return {
      projects: [],
      projectKeyword: "",
    };
  },
  methods: {
    handleFilter() {
      this.projects = this.myProjects;
      if (this.projectKeyword.trim() === "") return false;
      this.projects = this.projects.filter(
        (item) => item.type === this.projectKeyword
      );
    },
  },
  mounted() {
    this.projects = this.myProjects;
  },
  computed: {
    ...mapState(["myProjects"]),
  },
};
</script>