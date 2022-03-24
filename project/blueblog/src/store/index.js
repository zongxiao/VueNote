import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
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
      name: "vue2.0博客",
      describe: '该项目是基于vue2全家桶进行制作的纯前端作品，无数据接口，主要使用了vuex进行数据的状态管理，使用vue router实现路由切换',
      cover: "/img/project/001.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
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
      id: '001',
      title: "用Html标签和CSS3写的一个手机！",
      subTitle: '手机外形上来说就是长方形，然后加上圆角边框，如果是简单的平面图形，几分钟就可以用html标签和css写一个手机模型。但如果有高光，菱角等让手机展示的更逼真，可以用到css背景渐变属性。',
      cover: "/img/blog/001.jpg",
      time: '2021-12-12',
      type: 'vue',
      toHome: true,
      score: 10
    },
    {
      id: '002',
      title: "10分钟用Html+css写一个渐变背景的个人名片",
      subTitle: '个人名片在个人博客网站上的位置一般是在首页右上角，一点开网站就能看见，信息不多，但是对于访客说，可以直观快速的了解这个网站的站长信息。接下来就花10分钟，来用html标签+css写一个个人名片吧。',
      cover: "/img/blog/002.jpg",
      time: '2022-2-12',
      type: 'vue',
      toHome: true,
      score: 10
    },
    {
      id: '003',
      title: "CSS初始化样式应该怎么写？",
      subTitle: '初始化的字面意思就是给变量赋为默认值，CSS样式表的初始化是对浏览器自带样式的重设，(也称为CSS Reset），如果不写，文档就会默认使用浏览器的样式表来显示页面。',
      cover: "/img/blog/003.jpg",
      time: '2022-3-6',
      type: 'css',
      toHome: true,
      score: 8
    },
    {
      id: '004',
      title: "元宵节到了，用css怎么画可爱的元宵，再配上动画呢？",
      subTitle: '写html之前，先将整体布局在一个div里面，设置大小为1200*500像素大小的长方形，并且居中显示。position 属性规定元素的定位类型。一般常用到的定位有绝对定位absolute、fixed，相',
      cover: "/img/blog/004.jpg",
      time: '2022-2-6',
      type: 'css',
      toHome: false,
      score: 9
    },
  ]
}
const getters = {
  goodBlogs(state) {
    return state.blogs.filter(e => e.score > 8)
  },
  homeBlogs(state) {
    return state.blogs.filter(e => e.toHome)
  }
}
const actions = {}
const mutations = {}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store