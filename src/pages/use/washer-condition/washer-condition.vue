<template>
  <div class="washer-condition">
    <div class="top">
      <div class="img-wrapper">
        <img class="img" src="./washingMachine3.png">
      </div>
      <div class="detail">
        <div class="free">
          <div class="circle color"></div>
          <span class="condition">空闲</span>
          <div class="num">3</div>
        </div>
        <div class="working">
          <div class="circle"></div>
          <span class="condition">使用中</span>
          <div class="num">11</div>
        </div>
      </div>
    </div>
    <div class="bottom">
    </div>
  </div>
</template>

<script>
export default {
  name: 'WasherCondition',
  data () {
    return {
      workingNum: 3,
      freeNum: 11,
      waitingTime: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
@import '~common/stylus/mixin.styl'
.washer-condition
  display flex
  flex-direction column
  .top
    flex 1
    padding 0 12px
    .img-wrapper
      display inline-block
      width 50px
      height 50px
      .img
        width 100%
    .detail
      display inline-block
      vertical-align top
      padding-left 40px
      .free,.working
        height 25px
        line-height 25px
        color $color-text-l
        position relative
        .circle
          display inline-block
          circle()
          background #D76E6E
        .color
          background-color #B0E671
        .condtion
          font-size $font-size-small
        .num
          display inline-block
          font-size $font-size-small
          position absolute
          left 80px
          top 0
</style>
