<template>
  <div class="menu">
    <el-menu
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      default-active="/home/order "
      class="el-menu-vertical-demo"
      :collapse="collapse"
      router
    >
      <el-sub-menu index="1">
        <template #title>
          <!-- <el-icon><list /></el-icon> -->
          <i class="iconfont">&#xe897;</i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <template #title><span>待处理订单</span></template>
          <el-menu-item index="/home/order">未发货</el-menu-item>
          <el-menu-item index="/home/order/refund">申请退款</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="已处理订单">
          <el-menu-item index="1-3">已完成</el-menu-item>
          <el-menu-item index="1-3">已退款</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><message /></el-icon>
        <template #title>商品管理</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>营业额统计</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Message, Setting } from '@element-plus/icons'
// import eventBus from '@/util/bus'
export default defineComponent({
  components: {
    Message,
    Setting
  },
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    // const menu = ref('')
    const handleClick = (url: any) => {
      console.log(url)
    }

    // eventBus.on('changeActive', (payload) => {
    //   console.log(payload)
    //   console.log(menu)
    //   console.log(menu.value)
    // })
    return { handleClick }
  }
})
</script>

<style scoped lang="less">
.menu {
  width: 212px;

  // border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
@font-face {
  font-family: 'iconfont'; /* Project id 3237871 */
  src: url('iconfont.woff2?t=1646925769790') format('woff2'),
    url('iconfont.woff?t=1646925769790') format('woff'),
    url('iconfont.ttf?t=1646925769790') format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 22px;
  font-style: normal;
  margin: 0 5px 2px 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-menu-item {
  box-sizing: border-box;
}
// hover 高亮
.el-menu-item:hover {
  color: #fff !important; // 菜单
  background-color: #0a60bd;
}
.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}
</style>
