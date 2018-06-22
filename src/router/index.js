import Vue from 'vue'
import Router from 'vue-router'
import Centent from '@/components/Centent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Centent',
      component: Centent
    }
  ]
})
