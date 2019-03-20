<template>
  <div class="list-item">
    <div class="id">编号：{{washerId}}</div>
    <img :src="switchPic()" alt="">
    <div class="condition">{{condition}}</div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    washerId: String,
    condition: String,
    secondsToEnd: Number
  },
  methods: {
    switchPic () {
      if (this.condition === '空闲') {
        return require('./free.png')
      } else if (this.condition === '运行中') {
        return require('./inuse.png')
      } else {
        return require('./fix.png')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.list-item
  width: 140px;
  height: 160px;
  line-height: 20px;
  border-radius: 10px;
  color: rgba(16, 16, 16, 1);
  text-align: center;
  box-shadow: 1px 1px 4px 0px rgba(170, 170, 170, 1);
  font-family: Roboto;
  border: 1px solid rgba(255, 255, 255, 0);
  .id
    font-size $font-size-medium
    height 24px
    line-height 24px
  img
    height 90px
    width 75px
    margin-top 5px
  .condition
    font-size $font-size-large
    height 30px
    line-height 30px
</style>
