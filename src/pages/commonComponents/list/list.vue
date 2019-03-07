<template>
  <div class="list">
    <list-item
      v-for="(item, index) in data"
      :key="index"
      :data="item">
    </list-item>
  </div>
</template>

<script>
import ListItem from '../list-item/list-item'
export default {
  name: 'List',
  components: {
    ListItem
  },
  props: {
    data: {
      type: Array,
      default: ['']
    }
  }
}
</script>
<style lang="stylus" scoped>
 
</style>
 