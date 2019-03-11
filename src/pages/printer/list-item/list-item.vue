<template>
  <div class="list-item">
    <div class="content">
      <div class="left">
        <img src="./printer.png" alt="">
      </div>
      <div class="middle">
        <div class="id">编号:{{printerId}}</div>
        <div class="state">状态:{{state}}</div>
        <div class="location">位置:{{location}}</div>
      </div>
      <div class="right">
        <div class="button">使用</div>
      </div>
    </div>
    <div class="line border-1px"></div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    printerId: String,
    waitNum: Number,
    condition: String,
    location: String
  },
  computed: {
    state: function () {
      if (this.condition === 'wait') {
        return '忙碌'
      } else {
        return '空闲'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.list-item
  padding 0 10px
  .content
    display flex
    flex-direction row
    .left
      width 80px
      height 80px
      img
        width 100%
    .middle
      flex 1
      padding 7px 0
      margin-left 6px
      .id,.state,.location
        height 22px
        line-height 22px
    .right
      width 80px
      height 80px
      position relative
      .button
        width 65px
        height 33px
        line-height 33px
        border-radius 10px
        font-size $font-size-medium
        text-align center
        border 1px solid rgba(0, 0, 0, 1)
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        margin auto
  .line
    margin-top 12px
    border-1px(rgba(7, 17, 27, 0.1))
</style>
