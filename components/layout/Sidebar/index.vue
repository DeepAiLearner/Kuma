<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item 
        v-for="route in routes" 
        :key="route.path" 
        :item="route" 
        :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      const { routes } = this.$router.options
      const result = []
      // 有什么更好的排序方法吗？
      routes.forEach(item => {
        if (item.path === '/dashboard') {
          result.push(item)
        }
      })
      routes.forEach(item => {
        if (item.path !== '/dashboard') {
          result.push(item)
        }
      })
      return result
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
