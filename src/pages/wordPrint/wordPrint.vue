<template>
  <div class="wordPrint">
    <simple-header :title="title"></simple-header>
    <div class="container" ref="wrapper">
      <div>
        <print-from></print-from>
        <import-from></import-from>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader2'
import PrintFrom from './printFrom/printFrom'
import ImportFrom from './importFrom/importFrom'
import BScroll from 'better-scroll'
export default {
  name: 'wordPrint',
  data () {
    return {
      title: '文档打印'
    }
  },
  components: {
    SimpleHeader,
    PrintFrom,
    ImportFrom
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
        // console.log(this.scroll)
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.wordPrint
  .container
    position absolute
    top 50px
    left 0
    right 0
    bottom 0
    overflow hidden
    padding 15px 24px 0
    box-sizing border-box
</style>
