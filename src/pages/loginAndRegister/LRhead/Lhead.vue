<template>
  <div class="wrapper">
    <div>
      <img src="./return.png" alt="">
    </div>
    <router-link to="./register">
      <div class="register">
        注册
      </div>
    </router-link>
    <div class="login">
      登陆
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lhead'
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
