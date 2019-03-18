<template>
  <div class="printer">
    <simple-header :title="title"></simple-header>
    <div class="content-wrapper" ref="wrapper">
      <div>
        <my-filter @toggleState="_toggleState"></my-filter>
        <list :list="printerList" :state="state"></list>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader2'
import MyFilter from './filter/filter'
import List from './list/list'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'Printer',
  data () {
    return {
      title: '打印机',
      printerList: [],
      state: 'all'
    }
  },
  components: {
    SimpleHeader,
    MyFilter,
    List
  },
  methods: {
    getUseInfo () {
      axios.get('/api/index.json').then(this.getUseInfoSucc)
    },
    getUseInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.printerList = data.printerList
      }
    },
    _toggleState (data) {
      this.state = data
    }
  },
  mounted () {
    this.getUseInfo()
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
        // console.log(this.scroll)
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.printer
  .content-wrapper
    position absolute
    top 50px
    left 0
    right 0
    bottom 0
    overflow hidden
</style>
