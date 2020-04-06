<!-- 子组件 用于测试作用域插槽 -->
<template>
  <div class>
    我是子组件
    <slot :user="user">
      {{user.firstName}}
    </slot>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user: {
        firstName: "111",
        lastName: "222"
      }
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>