<template>
  <div class="m-header">
    <div class="icon"></div>
    <div>{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
  },
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
    color $color-text-d
    font-size 0
    background-color $color-theme
    z-index 100
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
    .text
      display inline-block
      vertical-align top
      font-size $font-size-medium
      line-height 50px
</style>
