import Vue from 'vue'
import Router from 'vue-router'
import Use from '@/components/use/use'
import Play from '@/components/play/play'
import Eat from '@/components/eat/eat'
import Mine from '@/components/mine/mine'

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
