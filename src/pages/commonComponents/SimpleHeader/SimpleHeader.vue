<template>
  <div class="m-header">
    <div class="icon"></div>
    <div class="wrapper">
      <div class="text">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .m-header
    position fixed
    top 0
    width 100%
    height 50px
    background-color $color-theme
    //border 1px solid black
    .icon
      display inline-block
      vertical-align top
      margin-top 9px
      width 30px
      height 32px
      margin-right 9px
      margin-left 14px
      background-image url('return.png')
      background-size 30px 32px
      //border 1px solid black
    .wrapper
      position absolute
      top 0
      left 0
      right 0
      display flex
      flex-direction row
      height 100%
      justify-content center
      //border 1px solid black
      .text
      //border 1px solid black
        height 50px
        line-height 50px
        align-self center
        font-size $font-size-large-x
</style>
