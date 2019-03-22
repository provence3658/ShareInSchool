<template>
  <div>
    <simple-header :title="title"></simple-header>
    <div class="wrapper">
      <div class="item">
        <div class="pic">
          <img src="./pic.png" alt="">
        </div>
        <div class="content">
          <div class="text">
            您刚才使用的炒菜房没有及时打扫，也没有将电饭煲放在正确的位置！请务必在30分钟内清理，并将电饭煲归位，否则将扣信用分，可能会对您之后的预约造成一定的影响哦！
          </div>
          <div class="wrongWrapper">
            <div class="wrong"><img src="./wrong1.png" alt=""></div>
            <div class="wrong"><img src="./wrong1.png" alt=""></div>
          </div>
          <div class="time">今天19:24</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../../../commonComponents/SimpleHeader/SimpleHeader1'
export default {
  name: 'noticeDetail',
  components: {
    SimpleHeader
  },
  data () {
    return {
      title: '享校官方号'
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position fixed
  top 50px
  left 0
  right 0
  bottom 0
  background #f8f8f8
  display flex
  justify-content center
  .item
    margin-top 10px
    background white
    height 260px
    width 350px
    border-radius 10px
    display flex
    flex-direction row
    .pic
      margin 10px
      .img
        height 40px
    .content
      justify-content center
      display flex
      flex-direction column
      margin-right 10px
      .text
        font-size 14px
        margin-bottom 15px
        line-height 18px
      .wrongWrapper
        display flex
        flex-direction row
        .wrong
          margin-right 15px
          img
            width 100px
      .time
        font-size 12px
        text-align right
        margin-top 20px
</style>
