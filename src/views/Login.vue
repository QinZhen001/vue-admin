<!-- login -->
<template>
  <div class="login-page">
    <div class="center">login</div>
    <div class="tip">
      <p>用户名：admin</p>
      <p>密码：admin</p>
      <p>跳过验证登录成功</p>
    </div>
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
    <div class="center" @click="goRegister">去注册</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    async onLogin() {
      if(
        this.form.username == "admin" &&
        this.form.password == "admin"
      ){
          this.$store.commit("user/saveUser", {
          username:"admin",
          token:"admin"
        });
        return this.loginSuccess()
      }

      // 省略掉前端的验证
      let res = await this.$http.userLogin({
        username: this.form.username,
        password: this.form.password
      });
      console.log("res", res);
      if (res.data.code == 200) {
        this.$message.success(res.data.msg);
        let { username = "", token = "" } = res.data.data;
        this.$store.commit("user/saveUser", {
          username,
          token
        });
        this.loginSuccess()
      } else {
        this.$message.error(res.data.msg);
      }
    },
    loginSuccess(){
   // 登录成功后 重定向
        const loading = this.$loading({
          lock: true,
          text: "登陆成功 自动跳转",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        setTimeout(() => {
          loading.close();
          this.redirect();
        }, 2000);
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
    goRegister() {
      this.$router.push({
        path: "/register"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.center {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}

.tip {
  margin-bottom: 20px;
  padding: 5px;
  width:300px ;
  border: 1px solid red;
}
</style>