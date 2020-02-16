<!-- redirect -->

<script>
export default {
  created() {
    const { params, query } = this.$route;
    const { path } = params;
    debugger;
    this.$router.replace({
      path: "/" + path,
      query
    });
  },
  render(h) {
    return h();
  }
};
</script>


<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>