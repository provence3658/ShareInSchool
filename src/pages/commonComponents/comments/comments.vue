<template>
  <div class="comments">
    <div class="top">
      <div class="title">评价(<span>{{comments.number}}</span>)</div>
      <div class="seeMore">查看全部></div>
    </div>
    <div class="summery">
      <div
        class="commentKinds"
        v-for="(item, index) in this.comments.lists"
        :key="index"
      >
        {{item.type}}({{item.number}})
      </div>
    </div>
    <div class="desc">
      <div class="userinfo">
        <div class="img-wrapper">
          <img :src="comments.lists[0].list[0].img" alt="">
        </div>
        <span class="username">{{comments.lists[0].list[0].user}}</span>
      </div>
      <div class="usercom">{{comments.lists[0].list[0].comment}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  data () {
    return {
      comments: {
        number: 266,
        lists: [
          {
            type: '好评',
            number: 210,
            list: [
              {
                img: 'https://pro.modao.cc/uploads4/images/3198/31980019/v2_poo1gt.jpg',
                comment: '和寝室友一起使用，方便实惠，我们做的特别开心，吃的也特别开心。',
                user: '依依'
              }
            ]
          }, {
            type: '中评',
            number: 50,
            list: []
          }, {
            type: '差评',
            number: 6,
            list: []
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.comments
  padding 0 20px
  box-sizing border-box
  margin-top 10px
  .top
    display flex
    flex-direction row
    .title
      flex 1
      display inline-block
      font-weight bold
      height 28px
      line-height 28px
    .seeMore
      display inline-block
      height 28px
      line-height 28px
  .summery
    margin-top 10px
    .commentKinds
      display inline-block
      padding 5px
      width: 69px;
      height: 23px;
      line-height: 20px;
      border-radius: 50px;
      background-color: rgba(182, 203, 241, 0.45);
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0);
      margin-right 10px
  .desc
    .userinfo
      margin 10px 0
      .img-wrapper
        display inline-block
        width: 32px;
        height: 32px;
        border-radius 16px
        img
          width 100%
      .username
        display inline-block
        vertical-align top
    .usercom
      line-height 24px
</style>
