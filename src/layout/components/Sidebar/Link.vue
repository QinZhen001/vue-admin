<!--  -->
<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot></slot>
  </component>
</template>

<script>
import { isExternal } from "@/utils/validate";

export default {
  components: {},
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.to);
    },
    type() {
      if (this.isExternal) {
        return "a";
      }
      return "router-link";
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: "_blank",
          // noopener 防止打开的页面就获得了前一个页面的控制权
          rel: "noopener"
        };
      }
      return {
        to:to
      }
    }
  }
};
</script>
<style lang='scss' scoped>
</style>