<template>
  <div class="localFile">
    <simple-header :title="title"></simple-header>
    <div class="container">
      <cube-tab-bar v-model="selectedLabel"
                    show-slider
                    :use-transition="disabled"
                    ref="tabNav"
                    :data="tabLabels">
      </cube-tab-bar>
      <div class="tab-slide-container">
        <cube-slide
          ref="slide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
          <!-- DOC -->
          <cube-slide-item>
            <cube-scroll>
              <ul class="list-wrapper">
                <li>
                  <cube-checkbox v-model="checked">
                    <img src="./word.png" class="avatar">
                    <span class="filename">实验报告.doc</span>
                  </cube-checkbox>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <!-- PPT -->
          <cube-slide-item>
            <cube-scroll>
              <ul class="list-wrapper">
                <li>
                  <cube-checkbox v-model="checked">
                    <img src="./ppt.png" class="avatar">
                    <span class="filename">课程设计答辩.ppt</span>
                  </cube-checkbox>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <!-- XLS -->
          <cube-slide-item>
            <cube-scroll>
              <ul class="list-wrapper">
                <li>
                  <cube-checkbox v-model="checked">
                    <img src="./xls.png" class="avatar">
                    <span class="filename">活动报名表.xls</span>
                  </cube-checkbox>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <!-- PDF -->
          <cube-slide-item>
            <cube-scroll>
              <ul class="list-wrapper">
                <li>
                  <cube-checkbox v-model="checked">
                    <img src="./pdf.png" class="avatar">
                    <span class="filename">课程设计答辩.pdf</span>
                  </cube-checkbox>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
          <!-- TXT -->
          <cube-slide-item>
            <cube-scroll>
              <ul class="list-wrapper">
                <li>
                  <cube-checkbox v-model="checked">
                    <img src="./ppt.png" class="avatar">
                    <span class="filename">学习小结.txt</span>
                  </cube-checkbox>
                </li>
              </ul>
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader1'
import { findIndex } from '../../common/js/util'
export default {
  name: 'LocalFile',
  components: {
    SimpleHeader
  },
  data () {
    return {
      title: '导入文件',
      selectedLabel: 'DOC',
      disabled: false,
      tabLabels: [{
        label: 'DOC'
      }, {
        label: 'PPT'
      }, {
        label: 'XLS'
      }, {
        label: 'PDF'
      }, {
        label: 'TXT'
      }],
      loop: false,
      autoPlay: false,
      showDots: false,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      scrollOptions: {
        /* lock x-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      checked: false
    }
  },
  methods: {
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
      console.log(current)
    },
    scroll (pos) {
      const x = Math.abs(pos.x)
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
      const deltaX = x / slideScrollerWidth * tabItemWidth
      this.$refs.tabNav.setSliderTransform(deltaX)
    }
  },
  computed: {
    initialIndex () {
      let index = 0
      index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
      return index
    }
  }
}
</script>

<style lang="stylus" scoped>
.localFile
  .container
    position absolute
    top 50px
    left 0
    right 0
    bottom 0
    overflow hidden
    padding 0 10px
    box-sizing border-box
    .list-wrapper
      .avatar
       vertical-align middle
</style>
