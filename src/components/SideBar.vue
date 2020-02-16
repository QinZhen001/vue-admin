<!-- sidebar -->
<template>
  <div class>
    <div>显示当前用户的路由表</div>
    <div v-for="route in permissionRoutes" :key="route.path">{{route.path}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log(this.permissionRoutes);
    debugger;
  },
  methods: {},
  computed: {
    ...mapGetters(["permissionRoutes"])
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>