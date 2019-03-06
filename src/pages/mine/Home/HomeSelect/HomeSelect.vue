<template>
  <div>
    <table>
      <router-link>
        <tr>
          <td class="first"><img src="./id.png" alt=""></td>
          <td>身份认证</td>
        </tr>
      </router-link>
      <tr>
        <td class="first"><img src="./appointment.png" alt=""></td>
        <td>我的预约</td>
      </tr>
      <tr>
        <td class="first"><img src="./feedback.png" alt=""></td>
        <td>反馈中心</td>
      </tr>
      <tr>
        <td class="first"><img src="./feedback.png" alt=""></td>
        <td>设置</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HomeSelect'
}
</script>

<style lang="stylus" scoped>
  table
    width 90%
    margin auto
    //margin 10px
    tr
      width 100%
      .first
        margin-left 10px
        width 20%
      td
        border-bottom 1px solid #EFEEEE
        vertical-align: middle
        text-align: left
</style>
