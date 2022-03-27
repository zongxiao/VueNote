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
      toHome: false,
      score: 10,
      content: `
        <p>
        用Html标签和CSS3写的一个手机！
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
      <p>
        现在前端发展很快，各种技术和框架层出不穷、百花齐放，很多人都喊学不动啦！事实上JavaScript
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
      <p>
        现在前端发展很快，各种技术和框架层出不穷、百花齐放，很多人都喊学不动啦！事实上JavaScript
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
    `
    },
    {
      id: '002',
      title: "10分钟用Html+css写一个渐变背景的个人名片",
      subTitle: '个人名片在个人博客网站上的位置一般是在首页右上角，一点开网站就能看见，信息不多，但是对于访客说，可以直观快速的了解这个网站的站长信息。接下来就花10分钟，来用html标签+css写一个个人名片吧。',
      cover: "/img/blog/002.jpg",
      time: '2022-2-12',
      type: 'vue',
      toHome: true,
      score: 10,
      content: `
        <p>
        10分钟用Html+css写一个渐变背景的个人名片
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
      <p>
        现在前端发展很快，各种技术和框架层出不穷、百花齐放，很多人都喊学不动啦！事实上JavaScript
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
    `
    },
    {
      id: '003',
      title: "CSS初始化样式应该怎么写？",
      subTitle: '初始化的字面意思就是给变量赋为默认值，CSS样式表的初始化是对浏览器自带样式的重设，(也称为CSS Reset），如果不写，文档就会默认使用浏览器的样式表来显示页面。',
      cover: "/img/blog/003.jpg",
      time: '2022-3-6',
      type: 'css',
      toHome: true,
      score: 8,
      content: `
        <p>
        CSS初始化样式应该怎么写？
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
      <p>
        现在前端发展很快，各种技术和框架层出不穷、百花齐放，很多人都喊学不动啦！事实上JavaScript
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
    `
    },
    {
      id: '004',
      title: "元宵节到了，用css怎么画可爱的元宵，再配上动画呢？",
      subTitle: '写html之前，先将整体布局在一个div里面，设置大小为1200*500像素大小的长方形，并且居中显示。position 属性规定元素的定位类型。一般常用到的定位有绝对定位absolute、fixed，相',
      cover: "/img/blog/004.jpg",
      time: '2022-2-6',
      type: 'css',
      toHome: false,
      score: 9,
      content: `
        <p>
        元宵节到了，用css怎么画可爱的元宵，再配上动画呢？
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
      <p>
        现在前端发展很快，各种技术和框架层出不穷、百花齐放，很多人都喊学不动啦！事实上JavaScript
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
    `
    },
    {
      id: '005',
      title: "生活是一片海洋，只有不断前进，才能到达彼岸",
      subTitle: '写html之前，先将整体布局在一个div里面，设置大小为1200*500像素大小的长方形，并且居中显示。position 属性规定元素的定位类型。一般常用到的定位有绝对定位absolute、fixed，相',
      cover: "/img/blog/003.jpg",
      time: '2022-3-6',
      type: 'life',
      toHome: false,
      score: 9,
      content: `
        <p>
        生活是一片海洋，只有不断前进，才能到达彼岸
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
      <p>
        现在前端发展很快，各种技术和框架层出不穷、百花齐放，很多人都喊学不动啦！事实上JavaScript
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
    `
    },
    {
      id: '006',
      title: "努力也许会成功，但是不努力肯定很轻松拉",
      subTitle: '写html之前，先将整体布局在一个div里面，设置大小为1200*500像素大小的长方形，并且居中显示。position 属性规定元素的定位类型。一般常用到的定位有绝对定位absolute、fixed，相',
      cover: "/img/blog/001.jpg",
      time: '2022-3-6',
      type: 'life',
      toHome: true,
      score: 6,
      content: `
        <p>
        努力也许会成功，但是不努力肯定很轻松拉
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
      <p>
        现在前端发展很快，各种技术和框架层出不穷、百花齐放，很多人都喊学不动啦！事实上JavaScript
        作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎
        JavaScript
        开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率
      </p>
      <p>
        ||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0
      </p>
      <p>
        ?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值
      </p>
      <p>
        但是静态引入的import 语句需要依赖于 type="module"
        的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：
      </p>
    `
    },
  ],
  detail: {},
  relatedBlogs: []
}
const getters = {
  goodBlogs(state) {
    return state.blogs.filter(e => e.score > 8)
  },
  homeBlogs(state) {
    return state.blogs.filter(e => e.toHome)
  }
}
const actions = {
  findblogbyid(context, value) {
    context.commit('FINDBLOGBYID', value)
  },
  findblogsbytype(context, value) {
    context.commit('FINDBLOGSBYTYPE', value)
  }
}
const mutations = {
  FINDBLOGBYID(state, value) {
    state.detail = state.blogs.filter(e => e.id === value)[0]
  },
  FINDBLOGSBYTYPE(state, value) {
    state.relatedBlogs = state.blogs.filter(e => e.type === value.type).filter(e => e.id != value.id)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store