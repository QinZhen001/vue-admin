<!--  -->
<template>
  <div>
    <h2>I'm an heavy page</h2>
    <h2>我要渲染一个耗时组件</h2>
    <Heavy v-if="defer(3)"></Heavy>
     <!-- <Heavy></Heavy> -->
  </div>
</template>

<script>
import Heavy from "./Heavy";
import defer from '../mixins/defer'

export default {
  mixins:[
    defer()
  ],
  components: {
    Heavy,
  },
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>