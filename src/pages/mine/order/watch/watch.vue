<template>
  <div class="wrapper">
    <div class="list">
      <div class="content">
        <div>自助观影</div>
        <div>雅苑3栋302室</div>
        <div>1月18日 18:00-20:00</div>
      </div>
      <div class="state">
        已支付16元
      </div>
    </div>
    <div class="list">
      <div class="content">
        <div>自助观影</div>
        <div>雅苑3栋302室</div>
        <div>1月18日 18:00-20:00</div>
      </div>
      <div class="state">
        已支付16元
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'watch'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    flex-direction column
    justify-content center
    align-items center
    font-size 14px
    .list
      display flex
      flex-direction row
      margin-top 10px
      height 100px
      width 350px
      background white
      border-radius 10px
      .content
        display flex
        flex-direction column
        justify-content center
        flex 7
        margin-left 15px
        line-height 25px
      .state
        flex 2
        text-align center
        line-height 33px
        height 33px
        width 80px
        background #FDC887
        border-top-right-radius 10px
</style>
