import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Articles from '../pages/Articles.vue'
import Detail from '../pages/Detail.vue'
const routes = [
  {
    path: '/',
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
        props: true
      }
    ]
  }
]
const router =  new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(from, to)
  next()
})
export default router