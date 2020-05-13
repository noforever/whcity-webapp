import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from '@/page/layout/BaseLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path:'/index',
      component: BaseLayout,
      children:[
        {
          name:'index',
          path:'/index',
          component:resolve => require(['@/page/index'], resolve)
        },
      ]
    },
  ]
})
