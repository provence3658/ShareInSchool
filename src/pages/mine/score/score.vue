<template>
  <div>
    <simple-header :title="title"></simple-header>
    <Content></Content>
  </div>
</template>

<script>
import SimpleHeader from '../../commonComponents/SimpleHeader/SimpleHeader2'
import Content from './Content/content'
export default {
  name: 'Score',
  components: {
    SimpleHeader,
    Content
  },
  data () {
    return {
      title: '积分明细'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
</style>
