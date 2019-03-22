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
import Printer from '@/pages/printer/printer'
import Balance from '@/pages/mine/balance/balance'
import Order from '@/pages/mine/order/order'
import Score from '@/pages/mine/score/score'
import Notify from '@/pages/mine/notify/notify'
import Login from '@/pages/loginAndRegister/login'
import Register from '@/pages/loginAndRegister/register'
import wordPrint from '@/pages/wordPrint/wordPrint'
import LocalFile from '@/pages/localFile/localFile'
import printWait from '@/pages/printWait/printWait'
import onePrinter from '@/pages/onePrinter/onePrinter'
import washer from '@/pages/washer/washer'
import washKind from '@/pages/washKind/washKind'
import eatDetail from '@/pages/eatDetail/eatDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
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
      name: 'setup',
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
    },
    {
      path: '/printer',
      name: 'Printer',
      component: Printer
    },
    {
      path: '/mine/balance',
      name: 'balance',
      component: Balance
    },
    {
      path: '/mine/order',
      name: 'order',
      component: Order
    },
    {
      path: '/mine/score',
      name: 'score',
      component: Score
    },
    {
      path: '/mine/notify',
      name: 'notify',
      component: Notify
    },
    {
      path: '/wordPrint',
      name: 'wordPrint',
      component: wordPrint
    },
    {
      path: '/wordPrint/localFile',
      component: LocalFile
    },
    {
      path: '/wordPrint/printWait',
      component: printWait
    },
    {
      path: '/onePrinter/:id',
      component: onePrinter
    },
    {
      path: '/washer',
      component: washer
    },
    {
      path: '/washKind',
      component: washKind
    },
    {
      path: '/eatDetail/:id',
      name: 'eatDetail',
      component: eatDetail
    }
  ]
})
