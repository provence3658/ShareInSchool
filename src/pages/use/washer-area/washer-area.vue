<template>
  <div class="washer-area">
    <div class="left">
      <div class="title">雅苑3号楼洗衣机情况</div>
      <div class="washer-list">
        <washer-condition></washer-condition>
      </div>
    </div>
    <div class="see-detail">
      <see-detail></see-detail>
    </div>
  </div>
</template>

<script>
import WasherCondition from '../washer-condition/washer-condition'
import SeeDetail from '../see-detail/see-detail'

export default {
  name: 'WasherArea',
  components: {
    WasherCondition,
    SeeDetail
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.washer-area
  margin 10px 20px 0
  display flex
  flex-direction row
  border-radius: 10px;
  box-shadow: 1px 1px 3px 3px rgba(170, 170, 170, 0.25);
  border: 1px solid rgba(255, 255, 255, 0);
  .left
    flex 1
    padding 8px 0 0 9px
    box-sizing border-box
    .title
      color $color-text-l
      font-size $font-size-medium
      margin-bottom 16px
</style>
