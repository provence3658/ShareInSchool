<template>
  <div class="wrapper">
    <div class="icon">
      <div class="imgWrapper">
        <img src="./balance.png" alt="">
      </div>
      <p class="desc">信誉积分200</p>
    </div>
    <div class="icon">
      <div class="imgWrapper">
        <img src="./balance.png" alt="">
      </div>
      <p class="desc">余额12元</p>
    </div>
    <div class="icon">
      <div class="imgWrapper">
        <img src="./balance.png" alt="">
      </div>
      <p class="desc">订单</p>
    </div>
    <div class="icon">
      <div class="imgWrapper">
        <img src="./balance.png" alt="">
      </div>
      <p class="desc">通知</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icon'
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .wrapper
    border 1px solid #FEF188
    border-radius 3px
    margin 8px
    //background $color-highlight-background
    white-space: nowrap;
    overflow: hidden;
    height 0
    padding-bottom 25%
    margin-top .1rem
    .icon
      z-index 80
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      //background #dddddd
      .imgWrapper
        position absolute
        left 0
        top 0
        right 0
        bottom .44rem
        height 65%
        box-sizing border-box
        padding .1rem
        img
          display block
          margin 0 auto
          height 100%
      .desc
        position absolute
        left 0
        right 0
        bottom 0
        height 20px
        line-height 20px
        text-align center
</style>
