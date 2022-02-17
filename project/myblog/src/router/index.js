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
    name: 'home',
    meta: {
      isAuth: true,
      title: 'Home'
    }
  },
  {
    path: '/articles',
    component: Articles,
    name: 'articles',
    meta: {
      isAuth: true,
      title: 'article'
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
  mode: 'history', // history or hash
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.getItem('name') === 'zs') {
      next()
    } else {
      alert('对不起，你不允许访问' + to.path)
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  console.log(to, from)
  if(to.meta.title){ 
    document.title = to.meta.title
  }
})
export default router