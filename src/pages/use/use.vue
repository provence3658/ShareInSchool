<template>
  <div class="use">
    <m-header></m-header>
    <use-swiper class="use-swiper"></use-swiper>
    <use-icons></use-icons>
    <printer-area></printer-area>
    <washer-area></washer-area>
    <book-area class="book-area"></book-area>
    <tab></tab>
  </div>
</template>

<script>
import UseSwiper from './swiper/swiper'
import UseIcons from './icon/icon'
import PrinterArea from './printer-area/printer-area'
import MHeader from '../commonComponents/m-header/m-header'
import Tab from '../commonComponents/tab/tab'
import WasherArea from './washer-area/washer-area'
import BookArea from './book-area/book-area'

export default {
  components: {
    UseSwiper,
    UseIcons,
    PrinterArea,
    MHeader,
    Tab,
    WasherArea,
    BookArea
  }
}
</script>

<style lang="stylus" scoped>
.use
  .use-swiper
    margin-top 50px
  .book-area
    margin-bottom 60px
</style>
