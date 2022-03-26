<template>
  <div>
    <el-form :model="account" :rules="rules" ref="accountForm">
      <el-form-item label="账号" prop="phonenumber">
        <el-input v-model="account.phonenumber"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
    <div class="util">
      <el-checkbox
        v-model="isKeepPasswordRef"
        label="记住密码"
        size="large"
      ></el-checkbox>

      <el-link type="default">忘记密码</el-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ssrContextKey } from 'vue'
import { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
import { loginAccountRules } from '../config/rules'
import StorageUtil from '@/util/storage'
import { useStore } from 'vuex'
import { IAccount } from '../config/type'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    /**
     * 定义属性
     */
    //定义表单校验规则
    const rules = loginAccountRules
    const accountForm = ref<InstanceType<typeof ElForm>>()
    //用户是否选择记住密码
    let isKeepPassword = false
    if (StorageUtil.getCache('isKeepPassword')) {
      isKeepPassword = true
    }
    const isKeepPasswordRef = ref(isKeepPassword)

    const account = reactive({
      phonenumber: StorageUtil.getCache('Mphonenumber') ?? '',
      password: StorageUtil.getCache('MAccountPassword') ?? ''
    })

    const store = useStore()
    const router = useRouter()
    /**
     * 定义方法
     */
    //登录，点击登录时候需要校验规则
    const login = () => {
      accountForm.value?.validate((v) => {
        if (v) {
          store.dispatch('loginModule/Alogin', {
            account,
            isKeepPasswordRef,
            router
          })
          // console.log('正在登录中~')
        }
      })
    }
    return {
      account,
      isKeepPasswordRef,
      rules,
      login,
      accountForm
    }
  }
})
</script>

<style scoped lang="less">
.util {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  #forgetPass:hover {
    cursor: pointer;
    color: #409eff;
  }
}
</style>
