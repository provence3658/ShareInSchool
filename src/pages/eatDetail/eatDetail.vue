<template>
  <div class="eatDetail">
    <simple-header :title="title"></simple-header>
    <div class="content-wrapper" ref="wrapper">
      <div>
        <div class="img-wrapper">
          <img src="https://pro.modao.cc/uploads4/images/3179/31790408/v2_poghgd.jpg" alt="">
        </div>
        <facility></facility>
        <rules></rules>
        <comments></comments>
      </div>
    </div>
    <div class="bottom-pay">
      <div class="money">￥8/小时</div>
      <div class="button">预约</div>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader1'
import Facility from './facility/facility'
import Rules from './rules/rules'
import BScroll from 'better-scroll'
import Comments from '../commonComponents/comments/comments'
export default {
  name: 'EatDetail',
  data () {
    return {
      title: ''
    }
  },
  components: {
    SimpleHeader,
    Facility,
    Rules,
    Comments
  },
  methods: {
    getTitle () {
      var id = this.$route.params.id
      switch (id) {
        case '1': this.title = '炒菜房'; break
        case '2': this.title = '火锅房'; break
        case '3': this.title = '烘焙房'; break
      }
    }
  },
  mounted () {
    this.getTitle()
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.eatDetail
  .content-wrapper
    position absolute
    top 50px
    left 0
    right 0
    bottom 60px
    overflow hidden
    .img-wrapper
      overflow hidden
      width 100%
      height 0
      padding-bottom 72%
      background-color #eee
      img
        width 100%
  .bottom-pay
    position fixed
    bottom 0
    left 0
    right 0
    padding 0 13px
    box-sizing border-box
    display flex
    flex-direction row
    height: 54px;
    box-shadow: 0px -1px 1px 0px rgba(239, 239, 239, 1);
    border: 1px solid rgba(239, 239, 239, 1);
    .money
      display inline-block
      flex 1
      line-height 54px
    .button
      display inline-block
      width: 80px;
      height: 40px;
      line-height 40px
      margin auto 0
      border-radius: 10px;
      background-color: rgba(255, 233, 138, 1);
      color: rgba(16, 16, 16, 1);
      font-size: 14px;
      text-align: center;
      font-family: Microsoft Yahei;
      border: 1px solid rgba(255, 255, 255, 0);

</style>
