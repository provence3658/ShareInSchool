<template>
  <div>
    <table>
      <tr @click="pageRouter(idRZ)">
        <td class="first"><img src="./id.png" alt=""></td>
        <td>身份认证</td>
      </tr>
      <tr @click="pageRouter(appointment)">
        <td class="first"><img src="./appointment.png" alt=""></td>
        <td>我的预约</td>
      </tr>
      <tr @click="pageRouter(mybook)">
        <td class="first"><img src="./feedback.png" alt=""></td>
        <td>我的书籍</td>
      </tr>
      <tr @click="pageRouter(feedback)">
        <td class="first"><img src="./feedback.png" alt=""></td>
        <td>反馈中心</td>
      </tr>
      <tr @click="pageRouter(setup)">
        <td class="first"><img src="./setup.png" alt=""></td>
        <td>设置</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HomeSelect',
  data () {
    return {
      idRZ: {
        path: 'idrz',
        name: '身份认证'
      },
      appointment: {
        path: 'appointment',
        name: '我的预约'
      },
      feedback: {
        path: 'feedback',
        name: '反馈中心'
      },
      setup: {
        path: 'setup',
        name: '设置'
      },
      mybook: {
        path: 'mybook',
        name: '我的书籍'
      }
    }
  },
  methods: {
    pageRouter: function (param) {
      console.log(param)
      this.$router.push({name: param.path, params: { title: param.name }})
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  table
    width 95%
    margin auto
    font-size $font-size-medium
    tr
      width 100%
      border-bottom  1px solid #EFEEEE
      .first
        padding-left 15px
        width 20%
        height 50px
        // padding 10px
        //border 1px solid black
        img
          width 30px
      td
        vertical-align: middle
        text-align: left
</style>
