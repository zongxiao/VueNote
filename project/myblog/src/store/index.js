import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  test: 'test',
  myProjects: [
    {
      name: "project1",
      describe: 'this project is about...',
      cover: "http://localhost:8080/img/project/001.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
    {
      name: "project2",
      describe: 'this project is about...',
      cover: "http://localhost:8080/img/project/002.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
    {
      name: "project3",
      describe: 'this project is about...',
      cover: "http://localhost:8080/img/project/003.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'js',
    },
    {
      name: "project4",
      describe: 'this project is about...',
      cover: "http://localhost:8080/img/project/004.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'vue',
    },
    {
      name: "project5",
      describe: 'this project is about...',
      cover: "http://localhost:8080/img/project/005.jpg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'stylus',
    },
    {
      name: "project6",
      describe: 'this project is about...',
      cover: "http://localhost:8080/img/project/counterdays.jpeg",
      url: "https://github.com/zongxiao/countdown-days",
      doneTime: '2021-12-12',
      type: 'stylus',
    },
  ],
}
const getters = {
  computedTest(state) {
    return state.test += ' getters'
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