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
          imgUrl: 'https://github.com/provence3658/pic/blob/master/1.jpg?raw=true',
          labels: ['78次/周', '1~3人'],
          price: '8/小时'
        }, {
          title: '火锅房',
          location: '雅苑3-501',
          rate: 4.5,
          imgUrl: 'https://github.com/provence3658/pic/blob/master/2.jpg?raw=true',
          labels: ['82次/周', '3~5人'],
          price: '8/小时'
        }, {
          title: '烘焙房',
          location: '雅苑3-406',
          rate: 4,
          imgUrl: 'https://github.com/provence3658/pic/blob/master/3.jpg?raw=true',
          labels: ['68次/周', '1~3人'],
          price: '8/小时'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
