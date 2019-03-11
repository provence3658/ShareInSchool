<template>
  <div class="list" ref="wrapper">
    <div>
      <list-item
        v-for="(item, index) in data"
        :key="index"
        :data="item">
      </list-item>
    </div>
  </div>
</template>

<script>
import ListItem from '../list-item/list-item'
import BScroll from 'better-scroll'
export default {
  name: 'List',
  components: {
    ListItem
  },
  props: {
    data: {
      type: Array,
      default: () => ['']
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
        // console.log(this.scroll)
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.list
  position absolute
  top 50px
  left 0
  right 0
  bottom 60px
  overflow hidden
</style>
