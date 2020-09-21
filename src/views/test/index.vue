<!--  -->
<template>
  <div>
    测试$attr 我是父
    <Middle aaa="aaa" bbb="bbb" v-bind="obj"></Middle>
  </div>
</template>

<script>
import Middle from "./attr/middle";

export default {
  components: {
    Middle,
  },
  props: {},
  data() {
    return {
      obj: {
        ccc:"ccc",
        ddd:'ddd'
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>