<!-- register -->
<template>
  <div class="register-page">
    <div>register</div>
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
        <el-button type="primary" @click="onRegister">注册</el-button>
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
    onRegister() {
      this.$http.userRegister({
        username: this.form.username,
        password: this.form.password,
        re_password: this.form.rePassword
      }).then(res => {
        this.$message(`${this.form.username} 注册成功！`, res);
        setTimeout(()=>{
          this.$router.go(-1)
        },3000)
      });
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>