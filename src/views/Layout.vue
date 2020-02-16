<!-- layout -->
<template>
  <div class>
    layout
    <sidebar class="sidebar-container" />
    <div>
      <sidebar></sidebar>
    </div>
    <div>
      <app-main />
    </div>
  </div>
</template>

<script>
import AppMain from "@/components/AppMain.vue";
import Sidebar from "@/components/SideBar.vue";

export default {
  name: "Layout",
  components: {
    AppMain,
    Sidebar
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>