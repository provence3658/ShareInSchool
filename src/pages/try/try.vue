<template>
  <cube-button @click="showDialog">show dialog</cube-button>
</template>

<script>
export default {
  methods: {
    showDialog () {
      this.$createDialog({
        type: 'alert',
        title: 'Alert',
        content: 'dialog content'
      }).show()
    }
  }
}
</script>

<style>

</style>
