<template>
  <div class="washer">
    <simple-header :title="title"></simple-header>
    <div class="content-wrapper" ref="wrapper">
      <div>
        <my-filter @toggleState="_toggleState"></my-filter>
        <washer-list :list="washerList" :state="state" class="list"></washer-list>
      </div>
    </div>
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
      state: 'all'
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
    }
  },
  mounted () {
    this.getUseInfo()
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
        console.log(this.scroll)
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.washer
  .content-wrapper
    position absolute
    top 50px
    left 0
    right 0
    bottom 0
    overflow hidden
    .list
      padding 0 20px
</style>
