<template>
  <div id="login">
    <login-pannel />
  </div>
</template>

<script>
import LoginPannel from './cpns/login-pannel'
export default {
  components: {
    LoginPannel
  },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
#login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
