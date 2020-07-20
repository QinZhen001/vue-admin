<!-- 跑马灯 -->
<template>
  <div class="content-wrapper">
    <div class="component-wrapper">
      <Marquee></Marquee>
    </div>
    <div class="component-wrapper">
      <!-- <Marquee2></Marquee2> -->
    </div>
  </div>
</template>

<script>
import Marquee from "@/components/Marquee/index";
import Marquee2 from "@/components/Marquee/index2";

export default {
  components: {
    Marquee,
    Marquee2
  },
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.component-wrapper {
  padding: 10px;
  &:not(:first-child){
    margin-top: 20px;
  }
}
</style>