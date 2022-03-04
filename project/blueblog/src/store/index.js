import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  projectsBanner: {
    mainBanner: {
      name: "project1",
      describe: 'this project is about...this project is about..this project is about',
      cover: "/img/project/009.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
    subBanner: {
      name: "project1",
      describe: 'this project is about...',
      cover: "/img/project/003.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    }
  },
  projects: [
    {
      name: "vue2.0博客",
      describe: '该项目是基于vue2全家桶进行制作的纯前端作品，无数据接口，主要使用了vuex进行数据的状态管理，使用vue router实现路由切换',
      cover: "/img/project/001.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
    {
      name: "project2",
      describe: 'this project is about...',
      cover: "/img/project/002.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
    {
      name: "project3",
      describe: 'this project is about...',
      cover: "/img/project/003.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'js',
    },
    {
      name: "project4",
      describe: 'this project is about...',
      cover: "/img/project/004.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
    {
      name: "project5",
      describe: 'this project is about...',
      cover: "/img/project/005.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'stylus',
    },
    {
      name: "project5",
      describe: 'this project is about...',
      cover: "/img/project/006.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'stylus',
    },
    {
      name: "project5",
      describe: 'this project is about...',
      cover: "/img/project/007.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'stylus',
    },
    {
      name: "project5",
      describe: 'this project is about...',
      cover: "/img/project/008.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'stylus',
    },
  ],
  blogs: [
    {
      name: "blog1",
      describe: 'this blog1 is about...',
      cover: "/img/project/001.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
    {
      name: "blog2",
      describe: 'this blog2 is about...',
      cover: "/img/project/002.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
    {
      name: "blog3",
      describe: 'this blog3 is about...',
      cover: "/img/project/003.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
    {
      name: "blog4",
      describe: 'this blog4 is about...',
      cover: "/img/project/005.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
  ]
}
const getters = {}
const actions = {}
const mutations = {}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store