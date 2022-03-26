import { createStore } from 'vuex'
import { loginModule } from './login/login'
import { IRootState } from './type'
export default createStore<IRootState>({
  state: {
    name: 'spx'
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})
