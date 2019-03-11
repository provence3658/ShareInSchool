<template>
  <div class="background">
    <div class="wrapper">
      <div class="item">
        <div class="text">账号与安全</div>
        <div class="icon">
          <img src="./arrow.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="text">帮助与反馈</div>
        <div class="icon">
          <img src="./arrow.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="text">关于享校</div>
        <div class="icon">
          <img src="./arrow.png" alt="">
        </div>
      </div>
      <div class="item">
        <div class="text">退出登录</div>
        <div class="icon">
          <img src="./arrow.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .background
    background #F9F8F8
    font-size $font-size-medium-x
    height 100%
    width 100%
    position fixed
    .wrapper
      margin-top 50px
      .item
        background white
        margin-bottom 10px
        height 70px
        padding-left 20px
        display flex
        align-items center
        .icon
          position absolute
          right 10px
          img
            width 15px
            height 15px
</style>
