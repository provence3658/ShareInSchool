<template>
  <div class="list">
    <list-item
      v-show="state === 'all' || item.condition==='空闲'"
      class="list-item"
      v-for="(item, index) in List"
      :key="index"
      :washerId="item.id"
      :condition="item.condition"
      :secondsToEnd="item.secondsToEnd"
      @res="getResponse"></list-item>
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
  },
  methods: {
    getResponse (data) {
      this.$emit('response', data)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  padding 0 20px
  .list-item
    margin 10px
    float left
</style>
