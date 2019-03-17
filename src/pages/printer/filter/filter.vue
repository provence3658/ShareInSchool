<template>
  <div class="filter">
    <div class="all" @click="toggle()" :class="{ active: this.state === 'all'}">全部</div>
    <div class="free" @click="toggle()" :class="{ active: this.state === 'free'}">空闲</div>
  </div>
</template>

<script>
export default {
  name: 'MyFilter',
  data () {
    return {
      state: 'all'
    }
  },
  methods: {
    toggle () {
      if (this.state === 'all') {
        this.state = 'free'
      } else {
        this.state = 'all'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.filter
  text-align center
  padding 10px
  font-size 0
  .all
    display inline-block
    width 50px
    height 38px
    line-height 38px
    border 1px solid #000
    border-radius 10px 0 0 10px
    font-size $font-size-medium
  .free
    display inline-block
    width 50px
    height 38px
    line-height 38px
    border 1px solid #000
    border-radius 0 10px 10px 0
    font-size $font-size-medium
  .active
    background-color $color-theme
</style>
