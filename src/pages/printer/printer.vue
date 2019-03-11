<template>
  <div class="printer">
    <simple-header :title="title"></simple-header>
    <div class="content-wrapper">
      <my-filter></my-filter>
      <list :list="printerList"></list>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader1'
import MyFilter from './filter/filter'
import List from './list/list'
import axios from 'axios'
export default {
  name: 'Printer',
  data () {
    return {
      title: '打印机',
      printerList: []
    }
  },
  components: {
    SimpleHeader,
    MyFilter,
    List
  },
  methods: {
    getUseInfo () {
      axios.get('/api/index.json').then(this.getUseInfoSucc)
    },
    getUseInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.printerList = data.printerList
      }
    }
  },
  mounted () {
    this.getUseInfo()
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
