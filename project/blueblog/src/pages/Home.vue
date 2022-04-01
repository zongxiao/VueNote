<template>
  <div class="w1200">
    <Banner :BannerInfo="bannerInfo" />

    <div class="home_project">
      <h4 class="title">PROJECT</h4>
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane
          v-for="item in projectType"
          :key="item"
          :label="item"
          :name="item"
        >
          <ProjectList :type="item" />
        </el-tab-pane>
      </el-tabs>
    </div>

    <HomeAbout />

    <div class="home_blogs">
      <h4 class="title">BLOG</h4>
      <ul class="list">
        <li v-for="blog in homeBlogs" :key="blog.id">
          <BlogListItem :blog="blog" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { nanoid } from "nanoid";
import Banner from "../components/Banner";
import ProjectList from "../components/ProjectList";
import HomeAbout from "../components/HomeAbout";
import BlogListItem from "../components/BlogListItem";
export default {
  name: "Home",
  components: {
    Banner,
    ProjectList,
    HomeAbout,
    BlogListItem,
  },
  data() {
    return {
      bannerInfo: [
        {
          id: nanoid(),
          url: "http://www.baidu.com",
          imgurl: "/img/banner/home_banner.png",
        },
        {
          id: nanoid(),
          url: "http://www.baidu.com",
          imgurl: "/img/banner/home_banner.png",
        },
      ],
      activeName: "vue",
      projectType: [],
    };
  },
  methods: {
    // 如何根据数组里面的所有对象中的某一个属性进行去重并且返回该属性的集合
    uniqueByObjectAttrOfArray(arr, attr) {
      let map = new Map(),
        attrArr = [];
      arr
        .filter((e) => !map.has(e[attr]) && map.set(e[attr], 1))
        .forEach((e) => {
          attrArr.push(e[attr]);
        });
      return attrArr;
    },
    handleTabClick(tab, event) {
      console.log(tab, event);
      console.log(this.activeName);
    },
  },
  computed: {
    ...mapState({ projectsArr: "projects" }),
    ...mapGetters({ homeBlogs: "homeBlogs" }),
  },
  mounted() {
    this.projectType = this.uniqueByObjectAttrOfArray(this.projectsArr, "type");
  },
  activated() {
    console.log("home路由组件激活");
  },
  deactivated() {
    console.log("home路由组件失活");
  },
};
</script>

<style lang="stylus" src="../assets/css/home.styl"></style>