<!-- 跑马灯 -->
<template>
  <div class="content-wrapper">
    <div class="component-wrapper">
      <div class="content-header">全滚动</div>
      <Marquee></Marquee>
    </div>
    <div class="component-wrapper">
      <div class="content-header">仅有文字滚动</div>
      <Marquee2></Marquee2>
    </div>
    <div class="component-wrapper">
      <div class="content-header">滚动到最后一条出现滚动回弹效果</div>
      <Marquee3></Marquee3>
    </div>
    <div class="component-wrapper">
      <div class="content-header">使用element组件</div>
      <p>关键属性： translateY 和 scale</p>
      <div class="marquee-warpper">
        <Marquee4></Marquee4>
      </div>
    </div>
  </div>
</template>

<script>
import Marquee from "components/Marquee/index";
import Marquee2 from "components/Marquee/index2";
import Marquee3 from "components/Marquee/index3";
import Marquee4 from "components/Marquee/index4";

export default {
  components: {
    Marquee,
    Marquee2,
    Marquee3,
    Marquee4,
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
.component-wrapper {
  padding: 10px;
  &:not(:first-child) {
    margin-top: 30px;
  }
}


.marquee-warpper{
  display: inline-block;
  width: 388px;;
}
</style>