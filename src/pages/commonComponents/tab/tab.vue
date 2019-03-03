<template>
  <div class="tab">
    <router-link
      tag="div"
      to="/use"
      class="tab-item"
      @click.native="switchTo('/use')"
    >
      <div class="img-wrapper">
        <img class="img-content" :src="'/use' === $route.path ? tabImg[0].selected : tabImg[0].normal">
      </div>
      <p class="tab-link">
        享用
      </p>
    </router-link>
    <router-link
      tag="div"
      to="/eat"
      class="tab-item"
      @click.native="switchTo('/eat')"
    >
      <div class="img-wrapper">
        <img class="img-content" :src="'/eat' === $route.path ? tabImg[1].selected : tabImg[1].normal">
      </div>
      <p class="tab-link">
        享吃
      </p>
    </router-link>
    <router-link
      tag="div"
      to="/play"
      class="tab-item"
      @click.native="switchTo('/play')"
    >
      <div class="img-wrapper">
        <img class="img-content" :src="'/play' === $route.path ? tabImg[2].selected : tabImg[2].normal">
      </div>
      <p class="tab-link">
        享玩
      </p>
    </router-link>
    <router-link
      tag="div"
      to="/mine"
      class="tab-item"
      @click,native="switchTo('/mine')"
    >
      <div class="img-wrapper">
        <img class="img-content" :src="'/mine' === $route.path ? tabImg[3].selected : tabImg[3].normal">
      </div>
      <p class="tab-link">
        我的
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      tabImg: [
        { normal: require('./use2.png'), selected: require('./use1.png') },
        { normal: require('./eat2.png'), selected: require('./eat1.png') },
        { normal: require('./play2.png'), selected: require('./play1.png') },
        { normal: require('./my2.png'), selected: require('./my1.png') }
      ],
      path: '/use'
    }
  },
  methods: {
    switchTo (path) {
      this.path = path
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable.styl'
  .tab
    position fixed
    left 0
    bottom 0
    width 100%
    z-index 100
    display flex
    height 50px
    line-height 50px
    font-size $font-size-small-s
    .tab-item
      flex 1
      text-align center
      position relative
      .img-wrapper
        position absolute
        top 0
        left 0
        right 0
        bottom 1rem
        .img-content
          width 30%
      .tab-link
        position absolute
        right 0
        left 0
        bottom 0
        height 1rem
        line-height 1rem
        color $color-text-l
      &.router-link-active
        .tab-link
          color: $color-text-d
</style>
