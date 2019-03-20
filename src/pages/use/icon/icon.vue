<template>
  <div class="icons">
    <div class="icon" v-for="(item, index) in icons" :key="index" @click="toPage(index)">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl">
      </div>
      <p class="icon-desc">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UseIcons',
  data () {
    return {
      icons: [
        {
          imgUrl: require('./printer.png'),
          title: '文档打印'
        },
        {
          imgUrl: require('./washingMachine.png'),
          title: '洗涤衣物'
        },
        {
          imgUrl: require('./book.png'),
          title: '旧书交易'
        },
        {
          imgUrl: require('./order2.png'),
          title: '我的订单'
        }
      ]
    }
  },
  methods: {
    toPage (index) {
      switch (index) {
        case 0: this.$router.push('/printer')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'

.icons
  overflow hidden
  width 100%
  height 0
  padding-bottom 25%
  margin-bottom 25px
  .icon
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      right 0
      left 0
      bottom 1rem
      .icon-img-content
        display block
        width 30px
        margin 0 auto
        margin-top 50%
        transform translateY(-50%)
    .icon-desc
      position absolute
      right 0
      left 0
      bottom 0
      height 1rem
      line-height 1rem
      text-align center
      color $color-text-d
</style>
