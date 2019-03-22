<template>
  <div>
    <div>
      <SimpleHeader></SimpleHeader>
      <sift></sift>
    </div>
    <div class="content">
      <booklist></booklist>
    </div>
  </div>
</template>

<script>
import SimpleHeader from './SimpleHeader/SimpleHeader'
import sift from './sift/sift'
import booklist from './booklist/booklist'
export default {
  name: 'book',
  components: {
    SimpleHeader,
    sift,
    booklist
  }
}
</script>

<style lang="stylus" scoped>
  .content
    position fixed
    top 100px
    bottom 0
    left 0
    right 0
</style>
