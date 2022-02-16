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
    meta: {
      isAuth: true
    },
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
  if (to.meta.isAuth) {
    if (localStorage.getItem('name') === 'zs') {
      alert('全局前置路由守卫通过你的审核')
      next()
    } else {
      alert('对不起，你不允许到达' + to.path)
    }
  } else {
    next()
  }
})
export default router