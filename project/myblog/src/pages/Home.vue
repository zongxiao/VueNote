<template>
  <div>
    <Banner />
    <div class="index_projects w1200">
      <div class="projects_top">
        <h4 class="title">作品展示</h4>
        <div class="search_box">
          <input type="text" v-model="projectKeyword" placeholder="快速搜索">
          <button class="button">search</button>
        </div>
      </div>
      <ul class="projects_body">
        <li v-for="item in myProjects" :key="item.name">
          <a :href="item.url" target="_blank">
            <img src="../assets/project/counterdays.jpeg" :alt="item.name">
            <div class="mask">
              <div class="name">{{item.name}}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
export default {
  name: 'Home',
  data() {
    return {
      myProjects: [
        {
          name: 'countdays1',
          url: 'https://github.com/zongxiao/countdown-days'
        },
        {
          name: 'countdays2',
          url: 'https://github.com/zongxiao/countdown-days'
        },
        {
          name: 'countdays3',
          url: 'https://github.com/zongxiao/countdown-days'
        },
        {
          name: 'countdays4',
          url: 'https://github.com/zongxiao/countdown-days'
        },
        {
          name: 'countdays5',
          url: 'https://github.com/zongxiao/countdown-days'
        },
        {
          name: 'countdays6',
          url: 'https://github.com/zongxiao/countdown-days'
        }
      ],
      projectKeyword: ''
    }
  },
  components: {
    Banner
  }
}
</script>

<style scoped>
  .index_projects {
    margin-top: 80px;
  }
  .projects_top {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  .projects_top .title {
    font-size: 30px;
    color: #333333;
  }
  .projects_top .search_box {
    display: flex;
  }
  .projects_top .search_box input {
    outline: none;
    flex: 1;
    margin-right: 4px;
    border: 1px solid #cccccc;
    padding-left: 10px;
  }
  .projects_top .search_box .button {
    background-color: lightslategray;
    border: 1px solid lightslategray;
    color: #ffffff;
  }
  
  .projects_body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .projects_body li {
    width: 30%;
    margin: 20px 0;
  }
  .projects_body li a {
    display: block;
    position: relative;
  }
  .projects_body li a img {
    width: 100%;
  }
  .projects_body li a .mask {
    position: absolute;
    background-color: rgba(9, 94, 100, 0.5);
    left: 0;
    right: 0;
    bottom: 0;
  }
  .projects_body li a .mask .name {
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
  }
</style>