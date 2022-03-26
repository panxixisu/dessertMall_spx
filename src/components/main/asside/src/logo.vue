<template>
  <div class="wrapper">
    <img src="@/assets/img/cake.svg" class="right" alt="" />
    <transition name="logo">
      <img v-if="!collapse" src="@/assets/img/logo.svg" class="left" alt="" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 58px;
}
img {
  /* padding: 5px 5px 0px; */
  object-fit: cover;
  background-color: #001529;
  /* height: 100%; */
}
.right {
  width: 50px;
  height: 50px;
  position: sticky;
  left: 8px;
}
.left {
  width: 130px;
  padding-top: 5px;
  /* transition: all 2s; */
}
.logo-enter-from {
  opacity: 0;
}
.logo-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.logo-enter-active,
.logo-leave-active {
  transition: all 1s ease;
}

@font-face {
  font-family: 'iconfont'; /* Project id 3237871 */
  src: url('iconfont.woff2?t=1646925769790') format('woff2'),
    url('iconfont.woff?t=1646925769790') format('woff'),
    url('iconfont.ttf?t=1646925769790') format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
