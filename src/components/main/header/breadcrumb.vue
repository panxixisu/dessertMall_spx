<template>
  <div class="breadCrumb">
    <el-icon
      :size="20"
      v-if="isFold"
      style="margin-right: 15px; cursor: pointer"
      @click="foldHandleClick"
    >
      <expand />
    </el-icon>
    <el-icon
      :size="20"
      v-else
      style="margin-right: 15px; cursor: pointer"
      @click="foldHandleClick"
    >
      <fold />
    </el-icon>

    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        :to="'/home/order'"
        @click="handlePathClick('/home/order')"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ message.firstPath }}</el-breadcrumb-item>
      <el-breadcrumb-item :to="pathNow" @click="handlePathClick(pathNow)">{{
        message.secondPath
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, reactive } from 'vue'
import { Expand, Fold } from '@element-plus/icons'
import { useRouter, useRoute } from 'vue-router'
import eventBus from '@/util/bus'
export default defineComponent({
  components: {
    Expand,
    Fold
  },
  setup(props, { emit }) {
    //折叠导航栏
    const isFold = ref(false)
    const foldHandleClick = () => {
      isFold.value = !isFold.value

      emit('foldClick', isFold.value)
    }
    //根据当前路由规则决定面包屑内容
    const router = useRouter()
    const route = useRoute()
    const message = reactive({ firstPath: '', secondPath: '' })
    const pathNow = ref('')
    watch(
      route,
      (newvalue, oldvalue) => {
        pathNow.value = newvalue.path

        const res = JSON.stringify(newvalue.meta['name']).split('')
        res.pop()
        res.shift()
        message.firstPath = res.join('').split(',')[0]
        message.secondPath = res.join('').split(',')[1]
      },
      {
        immediate: true
      }
    )
    const handlePathClick = (pathNow: string) => {
      eventBus.emit('changeActive', pathNow)
    }
    return { foldHandleClick, isFold, route, message, pathNow, handlePathClick }
  }
})
</script>

<style scoped>
.breadCrumb {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
