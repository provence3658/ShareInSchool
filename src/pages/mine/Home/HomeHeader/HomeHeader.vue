<template>
  <div class="wrapper">
    <div class="m-header">
    </div>
    <div class="name">
      <img src="./bg1.png" class="nameBack">
      <div class="userWrapper">
        <div class="headImg">
          <img src="./qq.jpg" alt="">
        </div>
        <div class="textWrapper">
            <div class="text">郝丹溪</div>
            <div class="text">哈佛大学</div>
            <div class="text">162班</div>
        </div>
      </div>
      <div class="edit">
          <img src="./edit.png" alt="">
      </div>
      <div class="grade">
          <div>LV10</div>
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
      height 115px
      color $color-text-d
      font-size 0
      background-color $color-theme
    .name
      position relative
      border-radius: 10px
      height 220px
      margin 20px 8px 8px 10px
      border 1px solid #FEF188
      background-color $color-background
      .nameBack
        position absolute
        width 100%
        top 0
        left 0
        right 1px
        opacity 0.3
      .userWrapper
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        text-align center
        .headImg
          margin-top 55px
          img
            border 1px solid black
            border-radius 50%
            width 60px
        .textWrapper
          line-height 20px
          height 20px
      .edit
        position absolute
        right 115px
        bottom 42px
        img
          width 20px
          height 20px
      .grade
        position absolute
        right 10px
        bottom 10px
</style>
