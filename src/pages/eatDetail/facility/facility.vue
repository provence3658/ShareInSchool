<template>
  <div class="facility">
    <div class="title">配有</div>
    <div class="info">电磁炉、多功能锅、电饭煲</div>
    <div class="album">
      <faci-img
        v-for="(item, index) in facilities"
        :key="index"
        :data="item"
      ></faci-img>
    </div>
  </div>
</template>

<script>
import FaciImg from '../faci-img/faci-img'
export default {
  name: 'Facility',
  data () {
    return {
      facilities: [
        {
          imgUrl: 'https://pro.modao.cc/uploads3/images/3014/30148553/v2_plisij.jpg',
          title: '多功能锅'
        }, {
          imgUrl: 'https://pro.modao.cc/uploads3/images/3014/30148643/v2_pliskr.jpg',
          title: '电磁炉'
        }, {
          imgUrl: 'https://pro.modao.cc/uploads3/images/3014/30148672/v2_plislj.jpg',
          title: '电饭煲'
        }
      ]
    }
  },
  components: {
    FaciImg
  }
}
</script>

<style lang="stylus" scoped>
.facility
  padding 0 0 0 20px
  .title
    font-weight bold
    height 28px
    line-height 28px
  .info
    height 28px
    line-height 28px
</style>
