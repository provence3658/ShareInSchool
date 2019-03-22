t<template>
  <div class="faci-img">
    <img :src="data.imgUrl" alt="">
    <div class="title">{{data.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'FaciImg',
  props: {
    data: Object
  }
}
</script>

<style lang="stylus" scoped>
.faci-img
  display inline-block
  margin-right 15px
  img
    width: 100px
    height: 100px
  .title
    width: 100px;
    height: 32px;
    line-height: 32px;
    background-color: rgba(239, 239, 239, 1);
    text-align: center;
    border: 1px solid rgba(239, 239, 239, 1);
</style>
