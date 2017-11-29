import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import MainBoard from '@/components/MainBoard'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/play',
      name: 'MainBoard',
      component: MainBoard
    }
  ]
})
