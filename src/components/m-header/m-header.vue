<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">雅苑3号楼</h1>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  
  .m-header
    position relative
    height 50px
    color $color-text-d
    font-size 0
    background-color $color-theme
    .icon
      display inline-block
      vertical-align top
      margin-top 9px
      width 30px
      height 32px
      margin-right 9px
      margin-left 14px
      background-image url('location.png')
      background-size 30px 32px
    .text
      display inline-block
      vertical-align top
      font-size $font-size-medium
      line-height 50px
</style>
