<template>
  <div class="importFrom">
    <div class="spot">其他方式导入</div>
    <div class="method">
      <div class="img-wrapper">
        <img src="./wechat.png" alt="">
      </div>
      <div class="right">
        <div class="title">微信</div>
        <div class="desc">导入并打印您聊天或者收藏中的文件</div>
      </div>
    </div>
    <div class="method">
      <div class="img-wrapper">
        <img src="./qq.jpg" alt="">
      </div>
      <div class="right">
        <div class="title">QQ</div>
        <div class="desc">导入并打印您聊天或者收藏中的文件</div>
      </div>
    </div>
    <div class="method">
      <div class="img-wrapper">
        <img src="./wps.png" alt="">
      </div>
      <div class="right">
        <div class="title">WPS</div>
        <div class="desc">导入并打印您创建的WPS文件</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'importFrom'
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.importFrom
  margin-left 15px
  .spot
    font-size $font-size-large
    margin-bottom 5px
  .method
    width: 283px;
    height: 70px;
    line-height: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 2px 2px 5px 3px rgba(170, 170, 170, 0.25);
    border: 1px solid rgba(255, 255, 255, 0);
    display flex
    flex-direction row
    margin 7px 0
    .img-wrapper
      width 40px
      height 40px
      padding 15px
      img
        width 100%
    .right
      flex 1
      padding 13px 0 15px
      text-align left
      .title
        font-size $font-size-medium-x
      .desc
        font-size $font-size-small
</style>
