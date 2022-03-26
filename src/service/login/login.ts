import request from '../index'
import { IDataType, ILoginResult } from './type'
import { IAccount } from '@/views/login/config/type'
enum LoginApi {
  AccountLogin = 'user/accountLogin',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}
export function AccountLogin(user: IAccount) {
  return request.post({
    url: LoginApi.AccountLogin,
    data: user
    // isShowLoading: false
  })
}
