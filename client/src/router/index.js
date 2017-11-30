import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Play from '@/components/Play'
import LeaderBoard from '@/components/LeaderBoard'

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
      component: Play,
      name: 'MainBoard',
      children: [
        {
          path: '',
          component: LeaderBoard,
          name: 'LeaderBoard'
        }
      ]
    }
  ]
})
