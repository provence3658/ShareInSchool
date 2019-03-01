<template>
  <div class="see-detail">
    <div class="text-wrapper">
      <div class="text">查看更多</div>
    </div>
    <div class="icon-wrapper">
      <img class="icon" src="./arrow.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeeDetail'
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.see-detail
  position relative
  width 72px
  height 108px
  background-color rgba(138, 221, 240, 0.25)
  border-radius: 0px 10px 10px 0px;
  border: 1px solid rgba(255, 255, 255, 0);
  .text-wrapper
    position absolute
    top 0
    bottom 0
    width 36px
    text-align center
    .text
      margin 54px auto 0
      transform translateY(-50%)
      width $font-size-medium-x
      font-size $font-size-medium-x
      color $color-text-d
      line-height 20px
  .icon-wrapper
    position absolute
    top 0
    right 2px
    bottom 0
    display flex
    align-items center
    .icon
      width 32px
      height 32px
</style>
