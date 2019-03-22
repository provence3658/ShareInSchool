<template>
  <div>
    <simple-header :title="title"></simple-header>
    <div class="content-wrapper" ref="wrapper">
      <tab></tab>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '../../commonComponents/SimpleHeader/SimpleHeader1'
import tab from './tab/tab'
export default {
  name: 'mybook',
  components: {
    SimpleHeader,
    tab
  },
  data () {
    return {
      title: '我的书籍'
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-wrapper
    position fixed
    top 50px
    left 0
    right 0
    bottom 0
</style>
