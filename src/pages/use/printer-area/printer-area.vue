<template>
  <div class="printer-area">
    <div class="left">
      <div class="title">您附近的打印机</div>
      <div class="printer-list">
        <printer-list :printerList="printerList.slice(0,4)"></printer-list>
      </div>
    </div>
    <router-link to="/printer" tag="div" class="see-detail">
      <see-detail></see-detail>
    </router-link>
  </div>
</template>

<script>
import SeeDetail from '../see-detail/see-detail'
import PrinterList from '../printer-list/printer-list'
export default {
  name: 'PrinterArea',
  components: {
    SeeDetail,
    PrinterList
  },
  props: {
    printerList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.printer-area
  margin 10px 20px 0
  display flex
  flex-direction row
  border-radius: 10px;
  box-shadow: 1px 1px 3px 3px rgba(170, 170, 170, 0.25);
  border: 1px solid rgba(255, 255, 255, 0);
  .left
    flex 1
    padding 8px 0 0 9px
    box-sizing border-box
    .title
      color $color-text-l
      font-size $font-size-medium
      margin-bottom 16px
</style>
