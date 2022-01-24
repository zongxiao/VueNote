import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Articles from '../pages/Articles.vue'
import Detail from '../pages/Detail.vue'
const routes = [
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/articles',
    component: Articles,
    name: 'articles',
    children: [
      {
        path: 'detail/:id',
        component: Detail,
        name: 'detail',
        props({ params }) {
          return { id: params.id }
        }
      }
    ]
  }
]
export default new VueRouter({
  routes
})