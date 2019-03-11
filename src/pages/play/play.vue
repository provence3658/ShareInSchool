<template>
  <div class="play">
    <m-header></m-header>
    <list :data="movies" class="list"></list>
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
      movies: [
        {
          title: '寝室影院',
          location: '雅苑3-301',
          rate: 5,
          imgUrl: 'https://github.com/provence3658/pic/blob/master/4.jpg?raw=true',
          labels: ['78次/周', '1~3人'],
          price: '8/小时'
        }, {
          title: '寝室影院',
          location: '雅苑3-502',
          rate: 4.5,
          imgUrl: 'https://github.com/provence3658/pic/blob/master/4.jpg?raw=true',
          labels: ['82次/周', '3~5人'],
          price: '8/小时'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
