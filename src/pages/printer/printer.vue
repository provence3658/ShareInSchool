<template>
  <div class="printer">
    <simple-header :title="title"></simple-header>
    <div class="content-wrapper">
      <my-filter></my-filter>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader'
import MyFilter from './filter/filter'
export default {
  name: 'Printer',
  data () {
    return {
      title: '打印机'
    }
  },
  components: {
    SimpleHeader,
    MyFilter
  }
}
</script>

<style lang="stylus" scoped>
.printer
  .content-wrapper
    position absolute
    top 50px
    left 0
    right 0
    bottom 0
    overflow hidden
</style>
