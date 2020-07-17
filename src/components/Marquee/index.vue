<!-- 跑马灯 -->
<template>
  <div class="marquee" ref="marquee">
    <div class="marquee-group" ref="marqueeGroup">
      <div v-for="(item,index) in list" :key="index" class="marquee-item">{{item}}</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

const list = [
  "6分钟前 涂善宝 成功签单正价课 111",
  "6分钟前 涂善宝 成功签单正价课 222",
  "6分钟前 涂善宝 成功签单正价课 333",
  "6分钟前 涂善宝 成功签单正价课 444"
];

export default {
  name: "marquee",
  components: {},
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      list: list,
      children: [],
      marquee: null
    };
  },
  mounted() {
    // setTimeout()
    this.setMarqueeHeight();
    this.initMarquee();
    this.play();
  },
  methods: {
    setMarqueeHeight() {
      this.children = this.$refs.marqueeGroup.children;
      let height = 0;
      // let marqueeWidth = this.$refs.marquee.clientHeight;
      for (let i = 0; i < this.children.length; i++) {
        const item = this.children[i];
        console.log(item.clientHeight);
        height += item.clientHeight;
      }
      this.$refs.marqueeGroup.style.height = height + "px";
    },
    initMarquee() {
      this.marquee = new BScroll(this.$refs.marquee, {
        scrollX: false,
        scrollY: true,
        momentum: false
      });
    },
    play() {
      let pageIndex = this.marquee.getCurrentPage().pageY + 1;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400);
      }, this.interval);
    }
  }
};
</script>
<style lang='scss' scoped>
.marquee {
  width: 344px;
  height: 30px;
  border-radius: 4px;
  .marquee-group {
    position relative .marquee-item {
      height: 30px;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
    }
  }
}
</style>