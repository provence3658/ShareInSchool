<template>
  <div class="m-header">
    <div class="icon" @click="goback"></div>
    <div class="text">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .m-header
    position fixed
    top 0
    width 100%
    height 50px
    background-color $color-theme
    z-index 100
    display flex
    flex-direction row
    padding 1px
    box-sizing border-box
    .icon
      position absolute
      top 0
      left 0
      display inline-block
      width 48px
      height 48px
      background-image url('return.png')
    .text
      display inline-block
      vertical-align top
      font-size $font-size-large-x
      line-height 50px
      flex 1
      text-align center
</style>
