<template>
  <div class="rules">
    <div class="title">{{title}}</div>
    <div class="desc">
      <div
        class="item"
        v-for="(item, index) in desc"
        :key="index"
      >{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rules',
  data () {
    return {
      title: '厨房守则',
      desc: [
        '1.保持厨房地面的干净整洁。',
        '2.准时到达与离开。',
        '3.使用过的厨房用具要及时清洗。',
        '4.不能带走不属于自己的用品。',
        '5.若违反以上几点将严重影响自身信誉。'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.rules
  margin-top 10px
  padding 0 20px
  .title
    height 28px
    line-height 28px
    font-weight bold
  .desc
    .item
      height 24px
      line-height 24px
</style>
