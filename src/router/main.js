import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      name: 'home'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
