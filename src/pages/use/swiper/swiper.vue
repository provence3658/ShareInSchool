<template>
  <div class="wrapper">
    <swiper :options="swiperOption"                                    >
      <!-- slides -->
      <swiper-slide v-for="(banner, index) in banners" :key="index">
        <img class="swiper-img" :src="banner">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'UseSwiper',
  data () {
    return {
      banners: [
        'http://p1.music.126.net/O-j76l6vhuqZkg3pFVHKAQ==/109951163891240286.jpg',
        'http://p1.music.126.net/DGCJb2Bg6aDHrSv0JeDbxw==/109951163892196491.jpg',
        'http://p1.music.126.net/IhL990jngx1Ty6RJ1uCBmQ==/109951163891249852.jpg'
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true,
        speed: 1000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 46%
  background-color #eee
  .swiper-img
    width 100%
</style>
