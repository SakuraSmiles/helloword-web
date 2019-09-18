import Vue from 'vue'
import Router from 'vue-router'
import Particles from '@/components/Particles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Particles',
      component: Particles
    }
  ]
})
