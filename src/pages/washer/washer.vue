<template>
  <div class="washer">
    <simple-header :title="title"></simple-header>
    <div class="content-wrapper" ref="wrapper">
      <div>
        <my-filter @toggleState="_toggleState"></my-filter>
        <washer-list :list="washerList" :state="state" @response="getResponse"></washer-list>
      </div>
    </div>
    <transition name="fade">
      <div class="response" v-show="showResponse">
        <div class="alert">
          <p>{{text}}</p>
          <button @click="toggleShow()">确定</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader2'
import MyFilter from '../commonComponents/filter/filter'
import WasherList from './list/list'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'Washer',
  components: {
    SimpleHeader,
    MyFilter,
    WasherList
  },
  data () {
    return {
      title: '洗衣机',
      washerList: [],
      state: 'all',
      showResponse: false,
      text: '此机器正在维修，请换一台！'
    }
  },
  methods: {
    getUseInfo () {
      axios.get('/api/index.json').then(this.getUseInfoSucc)
    },
    getUseInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.washerList = data.washerList
      }
    },
    _toggleState (data) {
      this.state = data
    },
    getResponse (data) {
      if (data === '维修中') {
        this.showResponse = true
        this.text = '此机器正在维修，请换一台！'
      } else if (data === '运行中') {
        this.showResponse = true
        this.text = '此机器正在运行，请换一台！'
      }
    },
    toggleShow () {
      this.showResponse = false
    }
  },
  mounted () {
    this.getUseInfo()
    // this.$nextTick(() => {
    //   if (!this.scroll) {
    //     this.scroll = new BScroll(this.$refs.wrapper, {
    //       click: true
    //     })
    //     // console.log(this.scroll)
    //   } else {
    //     this.scroll.refresh()
    //   }
    // })
  }
}
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.washer
  .content-wrapper
    position absolute
    top 50px
    left 0
    right 0
    bottom 0
    overflow hidden
  .response
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    overflow hidden
    background-color rgba(0,0,0,0.25)
    .alert
      text-align center
      position absolute
      top 50%
      left 50%
      width 240px
      height 160px
      margin-top -80px
      margin-left -120px
      background-color #ffffff
      z-index 999
      padding 20px
      box-sizing border-box
      border-radius 5px
      button
        margin-top 50px
        color #fff
        width: 75px;
        height: 36px;
        line-height: 20px;
        border-radius: 20px;
        background-color: rgba(139, 195, 74, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);

</style>
