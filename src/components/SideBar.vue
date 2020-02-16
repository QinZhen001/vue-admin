<!-- sidebar -->
<template>
  <div class>
        <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permissionRroutes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed:{
       ...mapGetters([
      'permissionRroutes',
    ]),
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>