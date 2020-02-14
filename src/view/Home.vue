<!-- home -->
<template>
  <div class>
    home
    <div>{{}}</div>
    <el-button type="primary" @click="login" :disabled=false>去登陆</el-button>
    <el-button type="primary">去注册</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    login() {
    //   console.log("login");
      this.$router.push({
          path:"/login"
      })
    }
  },
  computed: {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>