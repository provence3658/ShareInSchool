<template>
  <div class="wrapper">
    <div class="select">
      <select name="" id=""></select>
    </div>
    <div class="content">
      <div class="list">
        <div class="pic">
          <img src="" alt="">
        </div>
        <div class="medium">
          <div>打印机</div>
          <div>今天 12:03</div>
        </div>
        <div class="right">
          <div>3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'study'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    flex-direction column
    justify-content center
    .select
      border-radius 5px
    .content
      display flex
      flex-direction row
      background white
      .pic
        width 50px
</style>
