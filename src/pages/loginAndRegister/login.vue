<template>
  <div>
    <Lhead></Lhead>
    <LContent></LContent>
    <Other></Other>
  </div>
</template>

<script>
import Lhead from './LRhead/Lhead'
import Other from './other/other'
import LContent from './content/Lcontent'
export default {
  name: 'Login',
  components: {
    Lhead,
    Other,
    LContent
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
</style>
