<template>
  <div class="use">
    <m-header></m-header>
    <div class="content-wrapper" ref="wrapper">
      <div>
        <use-swiper class="use-swiper"></use-swiper>
        <use-icons></use-icons>
        <printer-area :printerList="printerList"></printer-area>
        <washer-area></washer-area>
        <book-area class="book-area"></book-area>
      </div>
    </div>
    <tab></tab>
  </div>
</template>

<script>
import UseSwiper from './swiper/swiper'
import UseIcons from './icon/icon'
import PrinterArea from './printer-area/printer-area'
import MHeader from '../commonComponents/m-header/m-header'
import Tab from '../commonComponents/tab/tab'
import WasherArea from './washer-area/washer-area'
import BookArea from './book-area/book-area'
import BScroll from 'better-scroll'
import axios from 'axios'

export default {
  data () {
    return {
      printerList: []
    }
  },
  components: {
    UseSwiper,
    UseIcons,
    PrinterArea,
    MHeader,
    Tab,
    WasherArea,
    BookArea
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.use
  .content-wrapper
    position absolute
    top 50px
    left 0
    right 0
    bottom 60px
    overflow hidden
</style>
