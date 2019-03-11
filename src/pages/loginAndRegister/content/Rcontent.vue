<template>
  <div class="wrapper">
    <div class="form">
      <div class="item">
        <div class="icon">
          <img src="./number.png" alt="">
        </div>
        <input class="input" placeholder='请输入手机号'>
      </div>
      <div class="item">
        <div class="icon">
          <img src="./identifyingCode.png" alt="">
        </div>
        <input class="input" placeholder="请输入验证码">
        <div class="get-btn">
          获取验证码
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="./password.png" alt="">
        </div>
        <input class="input" placeholder="请输入密码">
        <div class="see">
          <img src="./invisible.png" alt="">
        </div>
      </div>
      <div class="notify">请输入6-16个字符,可以使用数字,字母,符号等</div>
    </div>
    <div class="btn-wrapper">
      <div class="btn">
        立即注册
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RContent'
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .wrapper
    margin-top 10px
    .form
      display flex
      flex-direction column
      align-items center
      justify-content center
      .item
        display flex
        width 100%
        flex-direction row
        align-items center
        margin-left 40px
        margin-bottom 20px
        .input
          border-radius 10px
          border 1px solid #BBBBBB
          width 200px
          height 40px
          margin-left 10px
        .get-btn
          border-radius 10px
          border 1px solid #D76E6E
          width 70px
          height 40px
          font-size $font-size-small
          margin-left 20px
          line-height 40px
          text-align center
          color #D76E6E
        .see
          margin-left 36px
          img
            width 35px
            height 35px
      .notify
        font-size $font-size-small
        margin-top -15px
        margin-left 10px
    .btn-wrapper
      display flex
      align-items center
      justify-content center
      .btn
        width 300px
        height 40px
        background #CCBFBF
        color white
        font-size $font-size-large
        border-radius 10px
        text-align center
        margin-top 40px
        line-height 40px
</style>
