<template>
  <div class="wrapper">
    <div class="list">
      <div class="bookImg">
        <img src="./textbook5.png" alt="">
      </div>
      <div class="introduce">
        <div>高等数学上册</div>
        <div></div>
      </div>
    </div>
    <div class="list">

    </div>
    <div class="list">

    </div>
  </div>
</template>

<script>
export default {
  name: 'booklist'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    flex-direction column
    justify-content center
    align-items center
    .list
      background blue
      height 150px
      width 340px
      border-bottom 1px solid grey
</style>
