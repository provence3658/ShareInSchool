<template>
  <div class="wrapper">
    <div class="title">其他登陆方式</div>
    <div class="icons">
      <div class="icon">
        <img src="./wechat.png" alt="">
      </div>
      <div class="icon">
        <img src="./qq.png" alt="">
      </div>
      <div class="icon">
        <img src="./alipay.png" alt="">
      </div>
    </div>
    <div class="text">登陆即为同意
      <span>《享校使用协议》</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Other'
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .wrapper
    position absolute
    bottom 0
    height 230px
    left 30px
    right 30px
    .title
      font-size 20px
      height 65px
      line-height 65px
    .icons
      display flex
      flex-direction row
      margin-left 10px
      margin-right 10px
      align-items center
      justify-content space-between
      .icon
        img
          height 40px
          width 40px
    .text
      font-size $font-size-small
      text-align center
      margin-top 40px
      span
        color #406CD9
</style>
