<template>
  <div class="list-item">
    <div class="top">
      <div class="title">{{data.title}}</div>
      <div class="location">
        <img src="./locate.png" alt="">
        <span class="loc-text">{{data.location}}</span>
      </div>
    </div>
    <div class="img-wrapper">
      <img src="./1.jpg" alt="">
    </div>
    <div class="star"></div>
    <div class="bottom">
      <div class="info">
        <div class="label-wrapper">
          <span
            class="label"
            v-for="(item, index) in data.labels"
            :key="index"
          >{{item}}</span>
        </div>
        <div class="price-wrapper">
          <img src="./rmb.png" alt="">
          <span class="price">{{data.price}}</span>
        </div>
      </div>
      <div class="order">
        <img src="./add.png" alt="">
        <span class="text">预约</span>
      </div>
    </div>
    <div class="line border-1px"></div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
.list-item
  padding 10px 24px
  .top
    height 24px
    width 100%
    position relative
    .title
      color $color-text-d
      font-size $font-size-medium-x
      height 20px
      line-height 20px
      font-weight bold
    .location
      position absolute
      top 0
      right 0
      img
        width 20px
        height 20px
        vertical-align text-bottom
      .loc-text
        color $color-text-l
        font-size $font-size-small
  .img-wrapper
    width 100%
    height 0
    padding-bottom 66.7%
    img
      width 100%
  .bottom
    width 100%
    font-size $font-size-medium
    position relative
    .info
      margin-top 10px
      .label-wrapper
        height 24px
        .label
          display inline-block
          padding 3px 8px
          background $color-theme
          margin-right 10px
      .price-wrapper
        height 24px
        line-height 24px
        margin-top 6px
        img
          width 24px
          height 24px
          vertical-align top
        .price
          display inline-block
          font-weight bold
    .order
      position absolute
      right 0
      top 22px
      height 32px
      line-height 32px
      img
        width 32px
        height 32px
        vertical-align top
  .line
    margin-top 12px
    border-1px(rgba(7, 17, 27, 0.1))
</style>
