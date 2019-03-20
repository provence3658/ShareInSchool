<template>
  <div class="printWait">
    <simple-header :title="title"></simple-header>
    <div class="container">
      <div class="circle">前面还有2人</div>
      <div class="button" @click="queueUp" v-show="!isQueue">确认排队</div>
      <div class="button" v-show="isQueue" @click="upload">上传打印的文件</div>
      <div class="button" v-show="isQueue" style="margin-top: 32px" @click="cancel">取消本次排队</div>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader1'
export default {
  name: 'printWait',
  components: {
    SimpleHeader
  },
  data () {
    return {
      title: '打印机排队中',
      isQueue: false
    }
  },
  methods: {
    queueUp () {
      this.isQueue = true
    },
    cancel () {
      this.isQueue = false
    },
    upload () {
      this.$router.push('/wordPrint')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.printWait
  .container
    position absolute
    top 50px
    left 0
    right 0
    bottom 0
    .circle
      width: 137px;
      height: 137px;
      line-height: 137px;
      background-color: rgba(254, 241, 136, 1);
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius 50%
      margin 0 auto
      margin-top 92px
    .button
      width 120px
      height 40px
      line-height 40px
      border-radius 10px
      font-size $font-size-medium
      text-align center
      border 1px solid rgba(0, 0, 0, 1)
      margin 0 auto
      margin-top 113px
</style>
