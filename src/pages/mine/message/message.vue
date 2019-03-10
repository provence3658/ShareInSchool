<template>
  <div>
    <simple-header></simple-header>
    <message-header></message-header>
  </div>
</template>

<script>
import SimpleHeader from '../../commonComponents/SimpleHeader/SimpleHeader'
import MessageHeader from './MessageHeader/MessageHeader'
export default {
  name: 'Message',
  components: {
    SimpleHeader,
    MessageHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>
