<template>
  <div class="list">
    <list-item
      v-show="IsAll || item.condition=='ok'"
      v-for="(item,index) in List"
      :key="index"
      :printerId="item.id"
      :waitNum="item.waitNum"
      :condition="item.condition"
      :location="item.location"></list-item>
  </div>
</template>

<script>
import ListItem from '../list-item/list-item'
export default {
  name: 'List',
  props: {
    List: Array,
    state: String
  },
  components: {
    ListItem
  },
  computed: {
    IsAll: function () {
      if (this.state === 'all') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
