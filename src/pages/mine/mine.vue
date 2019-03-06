<template>
  <div>
      <home-header></home-header>
      <icon></icon>
      <home-select></home-select>
      <tab></tab>
  </div>
</template>

<script>
import HomeHeader from './Home/HomeHeader/HomeHeader'
import Tab from '../commonComponents/tab/tab'
import Icon from './Home/Icon/Icon'
import HomeSelect from './Home/HomeSelect/HomeSelect'
export default {
  components: {
    HomeHeader,
    Tab,
    Icon,
    HomeSelect
  }
}
</script>

<style lang="stylus" scoped>

</style>
