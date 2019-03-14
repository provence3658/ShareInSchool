<template>
  <div class="printFrom">
    <div class="item">
      <div class="img-wrapper color1">
        <img src="./1.png" alt="">
      </div>
      <div class="title">本地文件</div>
      <div class="desc">手机中的本地文件</div>
    </div>
    <div class="item">
      <div class="img-wrapper color2">
        <img src="./2.png" alt="">
      </div>
      <div class="title">相册</div>
      <div class="desc">在A4纸上打印图片</div>
    </div>
    <div class="item">
      <div class="img-wrapper color3">
        <img src="./3.png" alt="">
      </div>
      <div class="title">复印扫描</div>
      <div class="desc">扫描纸质文件并打印</div>
    </div>
    <div class="item">
      <div class="img-wrapper color4">
        <img src="./4.png" alt="">
      </div>
      <div class="title">历史文档</div>
      <div class="desc">曾经打印过的文档</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintFrom'
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.printFrom
  .item
    width: 126px;
    height: 126px;
    line-height: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 2px 2px 5px 3px rgba(170, 170, 170, 0.25);
    border: 1px solid rgba(255, 255, 255, 0);
    float left
    margin 15px
    .img-wrapper
      width: 66px;
      height: 66px;
      line-height: 20px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius: 50%
      margin 10px 30px 0
      padding 12px
      box-sizing border-box
      img
        width 42px
        height 42px
    .color1
      background-color #BDEEF5
    .color2
      background-color #FEE5BD
    .color3
      background-color #FDD0CB
    .color4
      background-color #C6E5FE
    .title
      font-size $font-size-large
    .desc
      font-size $font-size-small
</style>
