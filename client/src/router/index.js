import Vue from 'vue'
import Router from 'vue-router'
import coba from '@/components/coba'
import Register from '@/components/Register'
import Play from '@/components/Play'

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
      component: Play
    }
  ]
})
