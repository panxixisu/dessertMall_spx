<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

const value1 = ref(1)
export default defineComponent({
  setup() {
    return {
      value1
    }
  }
})
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
