<!-- 自定义命令 -->
<template>
  <div class="content-wrapper">
    <div class="content-header">自定义命令 repeat-click</div>
    <div class="parent">
      <button v-repeat-click="increase">长按我</button>
      <span class="text">{{number}}</span>
    </div>
  </div>
</template>

<script>
import RepeatClick from "@/directives/repeat-click";

export default {
  directives: { RepeatClick },
  components: {},
  props: {},
  data() {
    return {
      number: 0
    };
  },
  mounted() {},
  methods: {
    increase() {
      this.number++;
    }
  }
};
</script>


<style lang='scss' scoped>
.page {
  .text {
    margin-left: 20px;
    height: 30px;
    line-height: 30px;
    font-size: 22px;
  }
  .parent {
    padding: 10px;
    width: 500px;
    height: 500px;
    background: red;
  }
  .children {
    margin: 20px;
    width: 200px;
    height: 200px;
    background: rosybrown;
  }
}
</style> 