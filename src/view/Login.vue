<!-- login -->
<template>
  <div class="login-page">
    <div>login</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="重复密码">
        <el-input v-model="form.rePassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
        rePassword: ""
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    async onLogin() {
        console.log("this.$route",this.$route)
        debugger
      // 省略掉前端的验证
      let res = await this.$http.userLogin({
        username: this.form.username,
        password: this.form.password
      });
      if (res.data.code == 200) {
        let { username = "", token = "" } = res.data.data;
        this.$store.commit("saveUser", {
          username,
          token
        });

        // 登录成功后 重定向
        const redirectUrl = this.$route.params.redirect;
        console.log("redirectUrl", redirectUrl);
        debugger;
        this.$router.replace({
          path: redirectUrl
        });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>