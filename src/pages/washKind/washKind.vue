<template>
  <div class="washKind">
    <simple-header :title="title"></simple-header>
    <div class="container">
      <cube-radio-group>
        <cube-radio
          v-for="(option, index) in options"
          :key="index"
          v-model="selected"
          :option="option"
          position="right"
          :hollow-style="true"
          class="option">
          <img :src="option.imgUrl" alt="">
          <div class="title">{{option.label}}</div>
          <div class="price">{{option.price}}</div>
        </cube-radio>
      </cube-radio-group>
    </div>
    <transition name="fade">
      <div class="bottom-pay" v-show="selected>0">
        <div class="say">需要支付</div>
        <div class="money">{{getMoney}}</div>
        <div class="button">确认支付</div>
      </div>
    </transition>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader1'
export default {
  name: 'washKind',
  components: {
    SimpleHeader
  },
  data () {
    return {
      title: '洗衣种类',
      selected: 0,
      options: [
        {
          label: '筒自洁',
          value: 1,
          imgUrl: require('./v2_plh3bb.png'),
          price: '￥0'
        },
        {
          label: '单脱水',
          value: 2,
          imgUrl: require('./v2_plh3c0.png'),
          price: '￥1'
        },
        {
          label: '正常洗',
          value: 3,
          imgUrl: require('./v2_plh3bo.png'),
          price: '￥4'
        }
      ]
    }
  },
  computed: {
    getMoney: function () {
      if (!this.selected) {
        return ''
      } else {
        return this.options[this.selected - 1].price
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable.styl"
.fade-enter-active, .fade-leave-active {
  transition all 1s ease
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height 0
}
.washKind
  position absolute
  top 0
  bottom 0
  width 100%
  overflow hidden
  .container
    margin-top 50px
    padding 0 20px
    box-sizing border-box
    .option
      position relative
      width: 300px;
      height: 100px;
      line-height: 20px;
      border-radius: 10px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0);
      margin-top 10px
      img
        width 60px
        height 60px
      .title
        margin-left 20px
        font-size $font-size-medium-x
      .price
        position absolute
        right 40px
  .bottom-pay
    position absolute
    bottom 0
    width: 100%
    height: 70px
    line-height: 69px
    border: 1px solid rgba(255, 255, 255, 0)
    padding 0 13px
    box-sizing border-box
    display flex
    flex-direction row
    .money
      display inline-block
      flex 1
      font-size $font-size-large-x
      font-weight bold
    .button
      display inline-block
      width: 122px;
      height: 38px;
      line-height 38px
      border-radius: 4px;
      background-color: rgba(150, 198, 202, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 14px;
      text-align: center;
      font-family: Microsoft Yahei;
      border: 1px solid rgba(150, 198, 202, 1);
      margin auto 0
</style>
