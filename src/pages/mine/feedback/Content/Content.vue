<template>
  <div class="background">
    <div class="wrapper">
      <div class="item">
        <div class="text">联系电话</div>
        <div class="notice">（必填）</div>
      </div>
      <div class="item">
        <div class="text">联系QQ</div>
        <div class="notice">（必填）</div>
      </div>
      <div class="photo">
        <div class="text">问题截图</div>
        <div class="upload">
          +
        </div>
      </div>
      <div class="desc">
        <div>问题描述</div>
      </div>
      <div class="btnWrapper">
        <div class="button">
          提交
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .background
    background #F9F8F8
    font-size $font-size-medium
    height 100%
    width 100%
    position fixed
    .wrapper
      margin-top 50px
      .item
        background white
        margin-bottom 10px
        height 50px
        padding-left 20px
        display flex
        align-items center
        .notice
          color red
          position absolute
          right 20px
      .photo
        background white
        margin-top 10px
        height 130px
        padding-left 20px
        padding-top 20px
        .upload
          height 70px
          width 70px
          background #F9F8F8
          border-radius 10%
          font-size 35px
          text-align center
          line-height 70px
          border 1px solid grey
          margin-top 20px
      .desc
        margin-top 10px
        height 230px
        background white
        padding-left 20px
        padding-top 20px
      .btnWrapper
        display flex
        justify-content center
        align-items center
        .button
          width 110px
          height 40px
          line-height 40px
          background #96C6CA
          border-radius 10%
          text-align center
          margin-top 30px
</style>
