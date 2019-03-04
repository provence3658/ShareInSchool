<template>
  <div class="book-list">
    <div class="book-item" v-for="(item, index) in bookList" :key="index">
      <img class="book-img" :src="item.imgUrl">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data () {
    return {
      bookList: [
        {
          imgUrl: require('./textbook1.png')
        }, {
          imgUrl: require('./textbook2.png')
        }, {
          imgUrl: require('./textbook3.png')
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.book-list
  .book-item
    float left
    width 64px
    height 64px
    .book-img
      width 100%
</style>
