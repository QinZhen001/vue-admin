<!-- 自定义命令 -->
<template>
  <div class="content-wrapper">
    <div class="content-header">自定义命令 clickoutside</div>
    <div class="parent">
      <span class="text">parent</span>
      <div class="children" v-clickoutside="handleClose">
        <span class="text">children</span>
      </div>
    </div>
  </div>
</template>

<script>
import Clickoutside from "@/directives/clickoutside";

export default {
  directives: { Clickoutside },
  components: {},
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleClose() {
      decodeURI
      const str = "点击了children外面";
      console.log(str);
      // alert(str);
    }
  }
};
</script>


<style lang='scss' scoped>
.page {
  .text{
    line-height: 30px;
    font-size: 22px;
  }
  .parent {
    padding: 10px;
    width: 500px;
    height: 500px;
    background: red;
  }
  .children{
    margin: 20px;
    width: 200px;
    height: 200px;
    background: rosybrown;
  }
}
</style> 