<template>
  <div class="printer">
    <simple-header :title="title"></simple-header>
  </div>
</template>

<script>
import SimpleHeader from '../commonComponents/SimpleHeader/SimpleHeader2'
export default {
  name: 'Printer',
  data () {
    return {
      title: '打印机'
    }
  },
  components: {
    SimpleHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>
