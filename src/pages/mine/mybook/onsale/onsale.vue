<template>
  <div class="wrapper">
    <div class="list">
      <div class="content">
        <div class="title">离散数学</div>
        <div class="text">
          <div>
            售价：6元
            <span><img src="./edit.png" alt=""></span>
          </div>
          <div class="time">
            上架时间：2019-2-15
          </div>
        </div>
      </div>
      <div class="state">
        出售中
      </div>
    </div>
    <div class="list">
      <div class="content">
        <div class="title">离散数学</div>
        <div class="text">
          <div>
            售价：6元
            <span><img src="./edit.png" alt=""></span>
          </div>
          <div class="time">
            上架时间：2019-2-15
          </div>
        </div>
      </div>
      <div class="state">
        出售中
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'onsale'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    flex-direction column
    justify-content center
    align-items center
    .list
      display flex
      flex-direction row
      margin-top 10px
      height 100px
      width 350px
      background white
      border-radius 10px
      .content
        flex 7
        margin-top 12px
        margin-left 15px
        .title
          font-size 14px
          font-weight bold
        .text
          margin-top 18px
          font-size 13px
          line-height 22px
          span
            img
              height 16px
      .state
        flex 2
        text-align center
        line-height 33px
        height 33px
        width 80px
        background #FAE855
</style>
