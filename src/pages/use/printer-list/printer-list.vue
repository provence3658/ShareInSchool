<template>
  <div class="printer-list">
    <div class="printer-wrapper" v-for="(item, index) in printerList" :key="index">
      <each-printer
        class="printer-item"
        :printerId="item.id"
        :waitNum="item.waitNum"
        :condition="item.condition"></each-printer>
    </div>
  </div>
</template>

<script>
import EachPrinter from '../each-printer/each-printer'

export default {
  name: 'PrinterList',
  components: {
    EachPrinter
  },
  data () {
    return {
      printerList: [
        {
          id: '0001',
          condition: 'wait',
          waitNum: 2
        }, {
          id: '0002',
          condition: 'wait',
          waitNum: 1
        }, {
          id: '0003',
          condition: 'ok',
          waitNum: 0
        }, {
          id: '0004',
          condition: 'ok',
          waitNum: 0
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.printer-list
  .printer-wrapper
    float left
  .printer-item
    margin 0 12px
</style>
