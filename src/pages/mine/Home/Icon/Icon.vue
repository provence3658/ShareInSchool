<template>
  <div class="wrapper">
    <div class="icon">
      <div class="imgWrapper">
        <img src="./integral.png" alt="">
      </div>
      <p class="desc">积分</p>
    </div>
    <div class="icon">
      <div class="imgWrapper">
        <img src="./wallet.png" alt="">
      </div>
      <p class="desc">余额</p>
    </div>
    <div class="icon">
      <div class="imgWrapper">
        <img src="./order.png" alt="">
      </div>
      <p class="desc">订单</p>
    </div>
    <div class="icon">
      <div class="imgWrapper">
        <img src="./notice.png" alt="">
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
    white-space: nowrap;
    overflow: hidden;
    height 0
    padding-bottom 75px
    margin-top .1rem
    font-size $font-size-medium
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 20%
      //background #dddddd
      .imgWrapper
        position absolute
        left 0
        top 0
        right 0
        height 65%
        box-sizing border-box
        padding .1rem
        //border 1px solid blue
        img
          display block
          height 80%
          //border 1px solid black
          position absolute
          bottom 0px
          margin-left 25px
      .desc
        position absolute
        left 0
        right 0
        bottom 0
        height 20px
        line-height 20px
        text-align center
        //border 1px solid black
</style>
