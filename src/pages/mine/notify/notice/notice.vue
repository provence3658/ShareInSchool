<template>
    <router-link
      to="/mine/detail"
    >
      <div class="wrapper">
        <div class="list">
          <div class="photo">
            <img src="./pic.png" alt="">
          </div>
          <div class="intro">
            <div class="name">享校官方号</div>
            <div class="content">您刚才使用的炒菜房没有及时打扫，也没有将电饭煲放在正确的位置！请务必在30分钟内清理，并将电饭煲归位，否则将扣信用分，可能会对您之后的预约造成一定的影响哦！</div>
          </div>
        </div>
      </div>
    </router-link>
</template>

<script>
export default {
  name: 'notice'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    flex-direction column
    .list
      display flex
      flex-direction row
      height 90px
      justify-content center
      align-items center
      .photo
        height 100%
        display flex
        justify-content center
        align-items center
        flex 1
        img
          width 50px
      .intro
        justify-content center
        height 100%
        border-bottom 1px solid #f8f8f8
        display flex
        flex-direction column
        width 260px
        font-size 13px
        flex 3
        .name
          font-weight bold
          margin-bottom 10px
        .content
          overflow hidden
          text-overflow ellipsis
</style>
