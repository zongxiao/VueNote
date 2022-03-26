import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Blogs from '../pages/Blogs.vue'
import Detail from '../pages/Detail.vue'
import Todos from '../pages/Todos.vue'
const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      isAuth: false,
      title: 'Home'
    }
  },
  {
    path: '/blogs',
    component: Blogs,
    name: 'blogs',
    meta: {
      isAuth: false,
      title: 'Blogs'
    },
  },
  {
    path: '/detail/:id',
    component: Detail,
    name: 'detail',
    meta: {
      isAuth: false,
      title: 'detail'
    },
    props: true
  },
  {
    path: '/todos',
    component: Todos,
    name: 'todos',
    meta: {
      isAuth: false,
      title: 'Todos'
    },
  }
]
const router = new VueRouter({
  mode: 'history', // history or hash
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  console.log('router.beforeEach')
  if (to.meta.isAuth) {
    alert('全局前置路由守卫全部不允许进去')
  } else {
    next()
  }
})
router.afterEach((to) => {
  console.log('router.afterEach')
  if (to.meta.title) {
    document.title = to.meta.title
  }
})
export default router