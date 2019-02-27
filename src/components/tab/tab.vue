<template>
  <div class="tab">
    <router-link
      tag="div"
      to="/use"
      class="tab-item"
    >
      <span class="tab-link">
        享用
      </span>
    </router-link>
    <router-link
      tag="div"
      to="/eat"
      class="tab-item"
    >
      <span class="tab-link">
        享吃
      </span>
    </router-link>
    <router-link
      tag="div"
      to="/play"
      class="tab-item"
    >
      <span class="tab-link">
        享玩
      </span>
    </router-link>
    <router-link
      tag="div"
      to="/mine"
      class="tab-item"
    >
      <span class="tab-link">
        我的
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable.styl'
  .tab
    position fixed
    left 0
    bottom 0
    width 100%
    z-index 100
    display flex
    height 44px
    line-height 44px
    font-size $font-size-medium
    .tab-item
      flex 1
      text-align center
      .tab-link
        color $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
