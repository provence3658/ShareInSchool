import Vue from 'vue'
import Router from 'vue-router'
import Use from '@/pages/use/use'
import Play from '@/pages/play/play'
import Eat from '@/pages/eat/eat'
import Mine from '@/pages/mine/mine'
import Try from '@/pages/try/try'
import Message from '@/pages/mine/message/message'
import Setup from '@/pages/mine/setup/setup'
import idRZ from '@/pages/mine/idrz/idrz'
import Feedback from '@/pages/mine/feedback/feedback'
import Appointment from '@/pages/mine/appointment/appointment'
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
    },
    {
      path: '/try',
      name: 'Try',
      component: Try
    },
    {
      path: '/mine/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/mine/setup',
      name: 'Setup',
      component: Setup
    },
    {
      path: '/mine/idrz',
      name: 'idrz',
      component: idRZ
    },
    {
      path: '/mine/appointment',
      name: 'appointment',
      component: Appointment
    },
    {
      path: '/mine/feedback',
      name: 'feedback',
      component: Feedback
    }
  ]
})
