<template>
  <div class="background">
    <div class="wrapper">
      <div class="title">
        <div class="score">
          <div class="score-icon">
            <img src="./integral.png" alt="">
          </div>
          <div class="score-text">1025</div>
        </div>
      </div>
      <div class="content">
        <div class="content-title">
          积分明细
        </div>
        <div class="item">
          <div class="item-left">
            <img src="./spatula.png" alt="">
          </div>
          <div class="item-content">
            <div class="place">厨房</div>
            <div class="text">使用完后地面整洁</div>
          </div>
          <div class="item-right">+35</div>
        </div>
        <hr>
        <div class="item">
          <div class="item-left">
            <img src="./pot.png" alt="">
          </div>
          <div class="item-content">
            <div class="place">厨房</div>
            <div class="text">使用完后地面整洁</div>
          </div>
          <div class="item-right">+35</div>
        </div>
        <hr>
        <div class="item">
          <div class="item-left">
            <img src="./spatula.png" alt="">
          </div>
          <div class="item-content">
            <div class="place">厨房</div>
            <div class="text">使用完后地面整洁</div>
          </div>
          <div class="item-right">+35</div>
        </div>
        <hr>
        <div class="item">
          <div class="item-left">
            <img src="./pot.png" alt="">
          </div>
          <div class="item-content">
            <div class="place">厨房</div>
            <div class="text">使用完后地面整洁</div>
          </div>
          <div class="item-right">+35</div>
        </div>
        <hr>
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
    font-size $font-size-medium-x
    height 100%
    width 100%
    position fixed
    .wrapper
      margin-top 50px
      .title
        height 110px
        background $color-theme
        padding-top 50px
        .score
          display flex
          text-align center
          flex-direction row
          align-items center
          justify-content center
          .score-icon
            img
              height 20px
              width 20px
          .score-text
            font-size 28px
            font-weight bold
      .content
        position absolute
        left 10px
        right 10px
        top 165px
        height 485px
        background white
        border-radius 18px
        .content-title
          margin-top 20px
          margin-left 15px
          font-size $font-size-medium-x
          font-weight bold
        .item
          margin-left 15px
          margin-top 30px
          display flex
          flex-direction row
          justify-content left
          align-items center
          // border 1px solid black
          .item-left
            img
              width 64px
              height 64px
          .item-content
            display flex
            flex-direction column
            justify-content space-around
            margin-left 35px
            font-size $font-size-medium
            height 50px
          .item-right
            position absolute
            right 25px
            font-size 18px
            color #FFB53B
            font-weight bold
        hr
          width 220px
          border-top 1px solid #AAAAAA
          border-bottom none
          margin-left 110px
</style>
