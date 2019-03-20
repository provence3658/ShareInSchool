<template>
  <div class="onePrinter">
    <simple-header :title="title"></simple-header>
    <div class="container">
      <div class="state line">状态：{{printer.condition === 'wait' ? '等待' : '空闲'}}</div>
      <div class="waitNum line">当前等待人数：{{printer.waitNum}}</div>
      <div class="waitTime line">预计等待时间：{{printer.waitNum * 2}}分钟</div>
      <div class="location line">位置：{{printer.location}}</div>
      <div class="img-wrapper">
        <img src="./printer.png" alt="">
      </div>
    </div>
    <div class="button" @click="pressBtn">我要{{printer.condition === 'wait' ? '排队' : '打印'}}</div>
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
  .container
    margin 0 auto
    margin-top 50px
    width: 319px;
    height: 378px;
    line-height: 20px;
    border-radius: 0px 0px 20px 20px;
    background-color: rgba(254, 241, 136, 0.41);
    text-align: center;
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
    width 120px
    height 40px
    line-height 40px
    border-radius 10px
    font-size $font-size-medium
    text-align center
    border 1px solid rgba(0, 0, 0, 1)
    margin 0 auto
    margin-top 24px
</style>
