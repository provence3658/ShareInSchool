<template>
  <div class="use">
    <m-header></m-header>
    <use-swiper></use-swiper>
    <use-icons></use-icons>
    <printer-area></printer-area>
    <tab></tab>
  </div>
</template>

<script>
import UseSwiper from './swiper/swiper'
import UseIcons from './icon/icon'
import PrinterArea from './printer-area/printer-area'
import MHeader from '../commonComponents/m-header/m-header'
import Tab from '../commonComponents/tab/tab'
export default {
  components: {
    UseSwiper,
    UseIcons,
    PrinterArea,
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" scoped>

</style>
