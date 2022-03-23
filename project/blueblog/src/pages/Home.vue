<template>
  <div class="w1200">
    <Banner :BannerInfo="bannerInfo" />

    <div class="home_blogs" style="margin-top: 40px">
      <h4 class="title">BLOG</h4>
      <ul class="list">
        <li v-for="blog in homeBlogs" :key="blog.id" >
          <BlogListItem :blog="blog"/>
        </li>
      </ul>
    </div>

    <div class="home_project">
      <h4 class="title">PROJECT</h4>
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane v-for="type in projectType" :key="type" :label="type" :name="type">
          <ProjectItem style="display:none" />
        </el-tab-pane>
      </el-tabs>
    </div>

    <HomePiclist :MainAttr="projectAttr" :listArr="projectsArr"></HomePiclist>

    <HomeAbout />

  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { nanoid } from "nanoid";
import Banner from "../components/Banner";
import HomeAbout from "../components/HomeAbout";
import HomePiclist from "../components/HomePiclist";
import ProjectItem from "../components/ProjectItem"
import BlogListItem from "../components/BlogListItem";
export default {
  name: "Home",
  components: {
    Banner,
    HomeAbout,
    HomePiclist,
    ProjectItem,
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
      activeName: 'first',
      projectType: [],
      projectAttr: {
        title: "PROJECT",
        ifSearch: true,
      },
    };
  },
  activated() {
    console.log("home路由组件激活");
  },
  deactivated() {
    console.log("home路由组件失活");
  },
  methods: {
    // 如何根据数组里面的所有对象中的某一个属性进行去重并且返回该属性的集合
    uniqueByObjectAttrOfArray(arr, attr) {
      const map = new Map();
      const newarr = [];
      arr.filter((item) => !map.has(item[attr]) && map.set(item[attr], 1))
        .forEach((element) => {
          newarr.push(element[attr]);
        });
      return newarr;
    },
    handleTabClick(tab, event) {
      console.log(tab, event);
      console.log(this.activeName)
    }
  },
  computed: {
    ...mapState({ projectsArr: "projects" }),
    ...mapState({ blogsArr: "blogs" }),
    ...mapGetters({ homeBlogs: "homeBlogs" }),
  },
  mounted() {
    this.projectType = this.uniqueByObjectAttrOfArray(this.projectsArr, 'type')
  }
};
</script>

<style scoped lang="stylus" src="../assets/css/home.styl">
</style>