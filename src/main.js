// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import  'echarts/theme/macarons.js'
import httpRequest from './utils/httpRequest'
import './utils/common'
import '@/component/_globals'
import "font-awesome/css/font-awesome.min.css"
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/index.scss'


Vue.config.productionTip = false
Vue.use(ElementUI)



// 挂载全局
Vue.prototype.$http = httpRequest // ajax请求方法
/* eslint-disable no-new */
new Vue({
  router,
  ...App,
}).$mount('#app')
