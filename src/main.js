import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import './plugins/element.js'
import request from './plugins/request.js'

import './assets/css/global.css'


Vue.prototype.$http = request

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
