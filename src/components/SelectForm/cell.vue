<!-- 格子 -->
<template>
  <div>
    {{text}}
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>