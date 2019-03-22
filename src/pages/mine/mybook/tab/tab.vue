<template>
  <div class="tab">
    <cube-tab-bar
      :showSlider=true
      :useTransition=false
      v-model="selectedLabel"
      :data="tabs"
      ref="tabBar"
      class="border-bottom-1px">
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop=false
        :auto-play=false
        :show-dots=false
        :initial-index="index"
        ref="slide"
        @change="onChange"
        @scroll="onScroll"
        :options="slideOptions">
        <cube-slide-item>
          <onsale></onsale>
        </cube-slide-item>
        <cube-slide-item>
          <saled></saled>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import saled from '../saled/saled'
import onsale from '../onsale/onsale'
export default {
  name: 'tab',
  data () {
    return {
      index: 0,
      tabs: [{
        label: '出售中'
      }, {
        label: '已出售'
      }],
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    selectedLabel: {
      get () {
        return this.tabs[this.index].label
      },
      set (newVal) {
        this.index = this.tabs.findIndex((value) => {
          return value.label === newVal
        })
      }
    }
  },
  methods: {
    onChange (current) {
      this.index = current
    },
    onScroll (pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = -pos.x / slideWidth * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    }
  },
  components: {
    onsale,
    saled
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
  .tab
    >>> .cube-tab//  改变tab原有高度
      padding 15px 0
      $tab-active-color black
    display flex
    flex-direction column
    height 100%
    .cube-tab-bar
      // background $color-theme
    .slide-wrapper
      flex 1
      overflow hidden
    .slide-wrapper
      background #f8f8f8
</style>
