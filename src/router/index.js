import Vue from 'vue'
import Router from 'vue-router'
import Use from '@/pages/use/use'
import Play from '@/pages/play/play'
import Eat from '@/pages/eat/eat'
import Mine from '@/pages/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/use',
      name: 'Use',
      component: Use
    },
    {
      path: '/eat',
      name: 'Eat',
      component: Eat
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
