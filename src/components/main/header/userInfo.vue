<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick"
            ><el-icon><circle-close /></el-icon>退出登录</el-dropdown-item
          >
          <el-dropdown-item
            ><el-icon><message /></el-icon>用户信息</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { CircleClose, Message } from '@element-plus/icons'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    CircleClose,
    Message
  },
  setup() {
    const store = useStore()

    const name = store.state.loginModule.accountid

    // const router = useRouter()
    // const handleExitClick = () => {
    //   localCache.deleteCache('token')
    //   router.push('/main')
    // }

    return {
      name
      // handleExitClick
    }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  width: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
