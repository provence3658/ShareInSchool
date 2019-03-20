<template>
  <div class="each-printer">
    <span class="printer-id">{{printerId}}</span>
    <img class="printer-img" src="./printer.png">
    <div class="condition">
      <div class="circle" :class="{ color: waitNum===0 }"></div>
      <div class="num" :class="{ textcolor: waitNum===0 }">{{waitNum}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EachPrinter',
  props: {
    printerId: String,
    waitNum: Number,
    condition: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.each-printer
  display flex
  flex-direction column
  width 36px
  .printer-id
    text-align center
    font-size $font-size-small
    color $color-text-ll
  .printer-img
    width 36px
    height 36px
  .condition
    height 10px
    line-height 10px
    margin-left 13px
    .circle
      display inline-block
      width 10px
      height 10px
      background: #D76E6E
      border-radius 50%
    .color
      background: #B0E671
    .num
      display inline-block
      color #D76E6E
      font-size $font-size-small
    .textcolor
      color #fff
</style>
