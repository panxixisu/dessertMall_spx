import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Storage from '@/util/storage'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  },

  {
    path: '/home',
    name: 'Home',
    redirect: '/home/order',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/main/home.vue'),
    children: [
      {
        path: 'order',
        name: 'Order',
        meta: {
          name: '订单管理,未发货'
        },
        component: () => import('../components/main/main/orderlist/order.vue')
      },
      {
        path: 'order/refund',
        name: 'Refund',
        meta: {
          name: '订单管理,申请退款'
        },
        component: () => import('../components/main/main/orderlist/refund.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    console.log('beforeach')
    const token = Storage.getCache('token')

    if (token === null || token === '') {
      console.log('回到登录')
      next('/login')
    } else {
      next()
    }
  }
})
export default router
