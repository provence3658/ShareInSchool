<template>
  <div class="onePrinter">
    <simple-header :title="title"></simple-header>
    <div class="container">
      <div class="img-wrapper">
        <img src="./printer.png" alt="">
      </div>
      <div class="state line">状态：{{printer.condition === 'wait' ? '等待' : '空闲'}}</div>
      <div class="waitNum line">当前等待人数：{{printer.waitNum}}</div>
      <div class="waitTime line">预计等待时间：{{printer.waitNum * 2}}分钟</div>
      <div class="location line">位置：{{printer.location}}</div>
      <div class="button" @click="pressBtn">我要{{printer.condition === 'wait' ? '排队' : '打印'}}</div>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader2'
import axios from 'axios'
export default {
  name: 'onePrinter',
  data () {
    return {
      title: `打印机${this.$route.params.id}`,
      printer: {}
    }
  },
  components: {
    SimpleHeader
  },
  mounted () {
    this.getThisPrinterInfo()
  },
  methods: {
    getThisPrinterInfo () {
      axios.get('/api/index.json').then(this.getThisPrinterInfoSucc)
    },
    getThisPrinterInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        let length = data.printerList.length
        for (var i = 0; i < length; i++) {
          if (data.printerList[i].id === this.$route.params.id) {
            this.printer = data.printerList[i]
          }
        }
      }
    },
    pressBtn () {
      if (this.printer.condition === 'wait') {
        this.$router.push('/wordPrint/printWait')
      } else {
        this.$router.push('/wordPrint')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.onePrinter
  position absolute
  top 0
  right 0
  left 0
  bottom 0
  overflow hidden
  background-color: #F7F7F7
  .container
    position absolute
    top 72px
    right 20px
    left 20px
    bottom 121px
    line-height: 20px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Roboto;
    border: 1px solid rgba(255, 255, 255, 0);
    background-color #fff
    .line
      text-align left
      height 48px
      line-height 48px
      padding 0 16px
    .img-wrapper
      img
        width 140px
        height 140px
    .button
      width: 95px;
      height: 39px;
      line-height: 39px;
      border-radius: 10px;
      background-color: rgba(250, 232, 85, 1);
      color: rgba(16, 16, 16, 1);
      font-size: 14px;
      text-align: center;
      box-shadow: 1px 1px 2px 0px rgba(170, 170, 170, 1);
      font-family: Roboto;
      border: 1px solid rgba(0, 0, 0, 1);
      margin 20px auto
</style>
