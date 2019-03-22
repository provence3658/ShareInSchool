<template>
  <div class="wrapper">
    <div class="label">筛选：</div>
    <div class="majorSelect">
      <select name="" id="">
        <option value="" v-for="(item,index) in major" :key="index">{{item.option}}</option>
      </select>
    </div>
    <div class="placeSelect">
      <select name="" id="">
        <option value="" v-for="(item,index) in place" :key="index">{{item.option}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sift',
  data () {
    return {
      major: [
        {
          id: '0',
          option: '物联网'
        },
        {
          id: '1',
          option: '计算机'
        },
        {
          id: '2',
          option: '软件工程'
        },
        {
          id: '2',
          option: '动画专业'
        }
      ],
      place: [
        {
          id: '0',
          option: '雅苑3号楼'
        },
        {
          id: '1',
          option: '雅苑4号楼'
        },
        {
          id: '2',
          option: '雅苑5号楼'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    top 3.125rem
    height 3.125rem
    display flex
    flex-direction row
    position fixed
    width 100%
    align-items center
    .label
      display flex
      flex 1
      text-align center
      align-items center
      justify-content center
      line-height 3.125rem
    .majorSelect
      display flex
      flex 3
      select
        height 1.875rem
        width 11.25rem
        border-radius .3125rem
    .placeSelect
      display flex
      flex 2
      select
        width 6.875rem
        height 30px
        border-radius .3125rem
</style>
