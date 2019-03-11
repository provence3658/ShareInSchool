<template>
  <div class="wrapper">
    <div>
      <img src="./return.png" alt="">
    </div>
    <div class="login">
      注册
    </div>
    <div class="register">
      登陆
    </div>
  </div>
</template>

<script>
export default {
  name: 'LRhead'
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .wrapper
    height 60px
    display flex
    flex-direction row
    justify-content left
    align-items center
    .login
      font-size 28px
      margin-right 10px
    .register
      font-size 20px
</style>
