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
  props: {
    printerList: Array
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
