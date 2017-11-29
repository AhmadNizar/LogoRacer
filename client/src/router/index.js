import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import coba from '@/components/coba'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'coba',
      component: coba
    }
  ]
})
