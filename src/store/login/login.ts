import { Module } from 'vuex'
import { AccountLogin } from '@/service/login/login'
import Storage from '@/util/storage'
import { ElMessage } from 'element-plus'
import request from '@/service/index'
//登录模块相关数据存放以及逻辑
export const loginModule={
  namespaced: true,
  state() {
    return {
      MuserInfo: Storage.getCache('MuserInfo',false)|| '',
      Mphonenumber: Storage.getCache('Mphonenumber')
        ? Storage.getCache('MAccountId')
        : '',
      Mtoken: Storage.getCache('Mtoken',false)|| ''
    }
  },
  getters: {},
  mutations: {
    changeuserInfo(state:any,data:any){
      state.MuserInfo = data

    },
    changephoneNumber(state:any, phonenumber: string) {
      state.Mphonenumber = phonenumber
    },
    changeToken(state:any, token: string) {
      state.Mtoken = token
    }
  },
  actions: {
    //用户登录以及生成token
    async Alogin(context:any, payload: any) {
      try {
        const loginResult: any = await AccountLogin(payload.account)
        const userInfo = loginResult.data.data
        if (loginResult.data.code === "101") {
          context.commit("changeuserInfo", userInfo);
          context.commit("changeToken",userInfo.token);
          Storage.setCache(loginResult.data.data,'MuserInfo',false);
          Storage.setCache(loginResult.data.data.token,'Mtoken',false);
          ElMessage({
            message: loginResult.data.msg,
            type: 'success',
           })
        }else{
          ElMessage({
            message: loginResult.data.msg,
            type: 'warning',
           })
           Storage.clearUserCache()
           return
        }

      } catch (error) {
        ElMessage.error('服务器开小差了~')
        request.loading?.close()
        return
      }
      // 用户是否记住密码
      if (payload.isKeepPasswordRef.value) {
        Storage.setCache(payload.account.phonenumber, 'Mphonenumber')
        Storage.setCache(payload.account.password, 'MAccountPassword')
        Storage.setCache('1', 'MisKeepPassword')
      } else {
        Storage.clearUserCache()
      }
      payload.router.push({
        name: 'Home'
      })
    }
  }
}
