<!--  -->
<template>
  <div class="content-wrapper">
    <Deferred></Deferred>
    <div>{{ test }}</div>
  </div>
</template>

<script>
import Deferred from "./components/Deferred";

export default {
  components: {
    Deferred,
  },
  props: {},
  computed: {
    test({ e }) {
      return e;
    },
  },
  data() {
    return {
      a: [1, 2, 4, 5, 6],
      b: "bbb",
      c: true,
      d: {
        xxx: "xxx",
      },
      e: 1,
    };
  },
  mounted() {
    // setInterval(() => {
    //   this.e = this.e + 1;
    //   console.log("this.e", this.e);
    // }, 1000);
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>