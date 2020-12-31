import Vue from 'vue'


import {Form, FormItem, Button, Input} from 'element-ui'
import {Divider} from 'element-ui'
import {Message} from 'element-ui'



Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Divider)

Vue.prototype.$message = Message
