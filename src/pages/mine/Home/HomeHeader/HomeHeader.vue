<template>
  <div class="wrapper">
    <div class="m-header">
    </div>
    <div class="name">
      <img src="./bg1.png" class="nameBack">
      <div class="user">
        <div class="headImg">
          <img src="./qq.png" alt="">
        </div>
        <div class="first">郝丹溪</div>
        <div class="text">哈佛大学</div>
        <div class="text">162班</div>
        <div class="grade">
          <div>LV10</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .wrapper
    font-size $font-size-medium
    .m-header
      position fixed
      top 0
      width 100%
      height 120px
      z-index 10
      color $color-text-d
      font-size 0
      background-color $color-theme
    .name
      position relative
      border-radius: 10px;
      z-index 20
      height 200px
      margin 20px 8px 8px 10px
      border 1px solid #FEF188
      background-color $color-background
      .nameBack
        position absolute
        width 100%
        top 0
        left 0
        right 0
        opacity 0.3
      .user
        display flex
        flex-direction column
        width 100%
        height 100%
        align-items center
        justify-content center
        .headImg
          border-radius 50%
          width 65px
          z-index 60
          img
            width 100%
        .grade
          position absolute
          right 0
          bottom 0
//          border 1px solid black
</style>
