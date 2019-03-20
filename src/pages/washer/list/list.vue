<template>
  <div class="list">
    <list-item
      v-show="state === 'all' || item.condition==='空闲'"
      class="list-item"
      v-for="(item, index) in List"
      :key="index"
      :washerId="item.id"
      :condition="item.condition"
      :secondsToEnd="item.secondsToEnd"></list-item>
  </div>
</template>

<script>
import ListItem from '../list-item/list-item'
export default {
  name: 'washerList',
  components: {
    ListItem
  },
  props: {
    List: Array,
    state: String
  }
}
</script>

<style lang="stylus" scoped>
.list
  .list-item
    margin 10px
    float left
</style>
