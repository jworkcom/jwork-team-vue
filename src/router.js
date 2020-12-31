import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

var router = new Router({
  routes:[
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login}
  ]
})

export default router
