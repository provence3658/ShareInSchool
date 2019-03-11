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
  name: 'Balance',
  components: {
    SimpleHeader,
    Content
  },
  data () {
    return {
      title: '余额'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
