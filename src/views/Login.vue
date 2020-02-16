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
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <div class="" @click="goRegister">
        去注册
    </div>
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
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    async onLogin() {
      // 省略掉前端的验证
      let res = await this.$http.userLogin({
        username: this.form.username,
        password: this.form.password
      });
      console.log("res",res)
      if (res.data.code == 200) {
         this.$message.success(res.data.msg)
        let { username = "", token = "" } = res.data.data;
        this.$store.commit("user/saveUser", {
          username,
          token
        });
        // 登录成功后 重定向
        const loading = this.$loading({
          lock: true,
          text: "登陆成功 自动跳转",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        setTimeout(() => {
          loading.close();
          this.redirect()
        }, 2000);
      }else{
        this.$message.error(res.data.msg)
      }
    },
    redirect() {
      const { redirect = "" } = this.$route.query;
      // debugger
      if (redirect) {
        this.$router.replace({
          path: redirect
        });
      }
    },
    goRegister(){
      this.$router.push({
        path:"/register"
      })
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>