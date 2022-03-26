<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'"
        ><logo :collapse="isCollapse" /><aside-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <bread-crumb @foldClick="handleFoldClick" :fold="isCollapse" />
          <user-info />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import BreadCrumb from '@/components/main/header/breadcrumb.vue'
import UserInfo from '@/components/main/header/userInfo.vue'
import { Logo, AsideMenu } from '@/components/main/asside/index'
export default defineComponent({
  components: { BreadCrumb, UserInfo, Logo, AsideMenu },

  setup() {
    //定义导航栏是否折叠
    const isCollapse = ref(false)
    watchEffect(() => {
      console.log('iscollapse变化')
      console.log(isCollapse.value)
    })
    const handleFoldClick = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}
.page-header {
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
}
.page-content {
  height: calc(100% - 58px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 58px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
