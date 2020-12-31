import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/app/Home.vue'

Vue.use(Router)

const router = new Router({
  routes:[
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/app/home', component: Home}
  ]
})

router.beforeEach((to, from, next)=>{
  // to 将要访问的路径
  // from 从哪个路径跳转而来
  // next是一个函数  next()表示放行，next('/login')表示强制跳转
  if(to.path === '/login') return next();
  // 首先获取token
  const tokenStr = window.sessionStorage.getItem("token");
  if(!tokenStr) return next('/login')
  next();
})

export default router
