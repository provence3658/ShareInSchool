<template>
  <div>
    <Rhead></Rhead>
    <RContent></RContent>
    <Other></Other>
  </div>
</template>

<script>
import Rhead from './LRhead/Rhead'
import Other from './other/other'
import RContent from './content/Rcontent'
export default {
  name: 'Login',
  components: {
    Rhead,
    Other,
    RContent
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
</style>
