<template>
  <div class="eat">
    <m-header></m-header>
    <list :data="kitchens" class="list"></list>
    <tab></tab>
  </div>
</template>

<script>
import MHeader from '../commonComponents/m-header/m-header'
import Tab from '../commonComponents/tab/tab'
import List from '../commonComponents/list/list'
export default {
  components: {
    MHeader,
    Tab,
    List
  },
  data () {
    return {
      kitchens: [
        {
          title: '炒菜房',
          location: '雅苑3-302',
          rate: 5,
          labels: ['78次/周', '1~3人'],
          price: '8/小时'
        }, {
          title: '炒菜房',
          location: '雅苑3-302',
          rate: 5,
          labels: ['78次/周', '1~3人'],
          price: '8/小时'
        }, {
          title: '炒菜房',
          location: '雅苑3-302',
          rate: 5,
          labels: ['78次/周', '1~3人'],
          price: '8/小时'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
