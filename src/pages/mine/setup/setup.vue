<template>
  <div>
    <simple-header :title="title"></simple-header>
    <Content></Content>
  </div>
</template>

<script>
import SimpleHeader from '../../commonComponents/SimpleHeader/SimpleHeader1'
import Content from './Content/content'
export default {
  name: 'Setup',
  components: {
    SimpleHeader,
    Content
  },
  data () {
    return {
      title: '设置'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
</style>
