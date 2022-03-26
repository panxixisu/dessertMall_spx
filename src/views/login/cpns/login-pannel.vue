<template>
  <div class="login_pannel">
    <div class="title">甜品后台管理系统</div>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><user /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="loginAccountRef" />
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="loginPhoneRef" />
      </el-tab-pane>
    </el-tabs>

    <el-button
      type="primary"
      size="large "
      style="width: 100%; margin-top: 10px"
      @click="loginEvent"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from 'vue'
import { Iphone } from '@element-plus/icons-vue'
import { User } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    Iphone,
    User,
    LoginAccount,
    LoginPhone
  },
  setup() {
    /**
     * 定义属性
     */
    const currentTab = ref('account')
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()

    //用户点击登录,选择相应
    const loginEvent = () => {
      if (currentTab.value === 'account') {
        loginAccountRef.value?.login()
      } else {
        loginPhoneRef.value?.login()
      }
    }

    return {
      loginAccountRef,
      loginPhoneRef,
      loginEvent,
      currentTab
    }
  }
})
</script>

<style lang="less" scoped>
.login_pannel {
  width: 350px;

  margin-bottom: 120px;

  .title {
    width: 100%;
    font-weight: bold;
    font-size: 30px;
  }
}
.el-form-item--default {
  margin: 10px;
}

.demo-tabs {
  width: 340px;
  margin-top: 10px;
  height: 190px;
}

.el-tabs--border-card > .el-tabs__content {
  max-width: 460px;
}
</style>
