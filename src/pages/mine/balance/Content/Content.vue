<template>
  <div class="background">
    <div class="wrapper">
      <div class="money">
        <div class="title">
          <div class="title-img">
            <img src="./balance.png" alt="">
          </div>
          <div class="title-text">
            余额（元）
          </div>
          <div class="notify">提现 | 明细</div>
        </div>
        <div class="number">23.50</div>
        <div class="btn">充值</div>
        <hr>
        <div class="account">
          <div class="account-title">
            1月账单
          </div>
          <div class="account-text">
            <div class="left">
              <span>支出</span>
              <span>￥20</span>
            </div>
            <div class="right">
              <span>收入</span>
              <span>￥5</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="./card.png" alt="">
        </div>
        <div class="card-text">银行卡</div>
        <div class="go-img">
          <img src="./arrow.png" alt="">
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
    font-size $font-size-medium-x
    height 100%
    width 100%
    position fixed
    .wrapper
      margin-top 50px
      .money
        height 320px
        background white
        border 1px solid #FEF188
        .title
          display flex
          flex-direction row
          justify-content left
          align-items center
          margin-left 17px
          margin-top 20px
          font-size $font-size-large-x
          .title-img
            img
              height 40px
              width 40px
              margin-right 11px
          .title-text
            font-weight bold
          .notify
            font-size $font-size-medium
            color 595858
            position absolute
            right 20px
        .number
          text-align center
          line-height 36px
          height 36px
          // font-weight bold
          font-size 36px
          margin-top 30px
        .btn
          background #FEF188
          height 35px
          width 80px
          text-align center
          line-height 35px
          font-size $font-size-medium
          border-radius 10px
          border 1px solid #FEF188
          position absolute
          right 20px
          margin-top 15px
        hr
          width 95%
          border 1px dashed #FEF188
          margin-top 60px
        .account
          .account-title
            font-size $font-size-medium-x
            margin-left 20px
          .account-text
            display flex
            flex-direction row
            justify-content space-around
            font-size $font-size-large-x
            align-items center
            height 60px
            .left
              text-align center
              width 50%
              height 60px
              line-height 60px
              border-right 1px dashed #FEF188
            .right
              text-align center
              width 50%
              height 60px
              line-height 60px
              border-left 1px dashed #FEF188
    .card
      height 70px
      width 100%
      display flex
      flex-direction row
      justify-content left
      align-items center
      background white
      margin-top 20px
      .card-img
        margin-left 20px
        margin-right 15px
        img
          height 24px
          width 24px
      .go-img
        position absolute
        right 20px
        img
          height 15px
          width 15px
      .card-text
        font-size $font-size-medium-x
</style>
