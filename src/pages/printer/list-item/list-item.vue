<template>
  <div class="list-item" ref="listItem">
    <div class="content">
      <div class="left">
        <img src="./printer.png" alt="">
      </div>
      <div class="middle">
        <div class="id">编号:{{printerId}}</div>
        <div class="state">状态:{{state}}
          <span class="waitNum">{{wait}}</span>
        </div>
        <div class="location">位置:{{location}}</div>
      </div>
      <div class="right">
        <router-link
          class="button"
          :class="{'colordisplay':display}"
          tag="div"
          to="/wordPrint"
        >{{btnValue}}</router-link>
      </div>
    </div>
    <div class="line border-1px"></div>
  </div>
</template>

<script>

export default {
  name: 'ListItem',
  data () {
    return {
      display: false
    }
  },
  props: {
    printerId: String,
    waitNum: Number,
    condition: String,
    location: String
  },
  mounted () {
    if (this.condition === 'wait') {
      this.display = true
    }
  },
  computed: {
    state: function () {
      if (this.condition === 'wait') {
        return '忙碌'
      } else {
        return '空闲'
      }
    },
    btnValue: function () {
      if (this.condition === 'wait') {
        return '排队'
      } else {
        return '使用'
      }
    },
    wait: function () {
      if (this.condition === 'wait') {
        return `当前有${this.waitNum}人排队`
      } else {
        return ''
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
      .state
        .waitNum
          font-size $font-size-small
          color rgba(134, 135, 135, 0.51)
          vertical-align middle
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
      .colordisplay
        border 1px solid #F8BD65
        color #F8BD65
  .line
    margin-top 12px
    border-1px(rgba(7, 17, 27, 0.1))
</style>
