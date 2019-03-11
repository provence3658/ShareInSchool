<template>
  <div class="background">
    <div class="wrapper">
      <div class="item">
        <div class="left">
          <div class="title">
            <span class="type">火锅房</span>
            <span class="place">雅苑3-402</span>
          </div>
          <div class="time">
            <span class="">时间</span>
            <span class="">11-25</span>
            <span class="">16:00-18:00</span>
          </div>
          <div class="space">
            <span class="">可容纳人数</span>
            <span class="">6-8人</span>
          </div>
        </div>
        <div class="notice">
          <div class="alarm">
            <img src="./appointment.png" alt="">
          </div>
          <div class="alarmText">提醒我</div>
        </div>
        <div class="btn">
          <div class="cancel">取消预约</div>
          <div class="modify">修改时间</div>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <div class="title">
            <span class="type">火锅房</span>
            <span class="place">雅苑3-402</span>
          </div>
          <div class="time">
            <span class="">时间</span>
            <span class="">11-25</span>
            <span class="">16:00-18:00</span>
          </div>
          <div class="space">
            <span class="">可容纳人数</span>
            <span class="">6-8人</span>
          </div>
        </div>
        <div class="notice">
          <div class="alarm">
            <img src="./appointment.png" alt="">
          </div>
          <div class="alarmText">提醒我</div>
        </div>
        <div class="btn">
          <div class="cancel">取消预约</div>
          <div class="modify">修改时间</div>
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
      margin-top 65px
      .item
        background white
        height 110px
        width 340px
        margin 10px
        padding-left 15px
        display flex
        border-radius 10px
        flex-direction column
        justify-content center
        align-items left
        .left
          .title
            margin-bottom 20px
            span
              font-weight bold
          .time
            margin-bottom 20px
        .notice
          position absolute
          display flex
          flex-direction row
          right 20px
          margin-top -30px
          .alarm
            img
              width 24px
              height 24px
          .alarmText
            height 24px
            line-height 24px
            font-size $font-size-small
        .btn
          position absolute
          display flex
          flex-direction row
          right 18px
          margin-top 28px
          .cancel
            background #96C6CA
            border-radius 4px
            color white
            height 30px
            line-height 30px
            font-size 12px
            width 60px
            text-align center
            margin-right 23px
          .modify
            background #96C6CA
            border-radius 4px
            color white
            height 30px
            line-height 30px
            font-size 12px
            width 60px
            text-align center
</style>
