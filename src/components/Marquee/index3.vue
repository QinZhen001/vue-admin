<!-- 跑马灯 -->
<template>
  <div class="marquee" ref="marquee">
    <ul class="marquee-group" ref="marqueeGroup">
      <li v-for="(item,index) in list" :key="index" class="marquee-item">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
const list = [
  {
    text: "6分钟前 涂善宝 成功签单正价课 111",
    // show: true,
  },
  {
    text: "6分钟前 涂善宝 成功签单正价课 222",
    // show: true,
  },
  {
    text: "6分钟前 涂善宝 成功签单正价课 333",
    // show: true,
  },
];

export default {
  components: {},
  props: {
    interval: {
      type: Number,
      default: 3000,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    // 循环效果 (最后一项无缝切换到第一项)
    loop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      list: list,
      marquee: null,
      index: 0,
      intervalId: null,
      marginTop: 0,
    };
  },
  mounted() {
    if (this.interval) {
      const marqueeGroup = this.$refs.marqueeGroup;
      const second = this.interval / 1000;
      marqueeGroup.style.transition = `margin-top ${second}s`;
    }
    if (this.autoPlay) {
      this.intervalId = setInterval(this.play, this.interval);
    }
  },
  destroyed() {
    this.destroy();
  },
  methods: {
    play() {
      const marqueeGroup = this.$refs.marqueeGroup;
      console.log(marqueeGroup);
      if (this.index === this.list.length - 1) {
        // 到达最后一项
        this.marginTop = 0;
        this.index = 0;
      } else {
        this.marginTop -= 30;
        this.index += 1;
      }
      marqueeGroup.style.marginTop = this.marginTop + "px";
    },
    destroy(){
      if(this.intervalId){
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    }
  },
};
</script>


<style lang='scss' scoped>
.marquee {
  position: relative;
  width: 344px;
  height: 30px;
  border-radius: 4px;
  overflow: hidden;
  font-family: "PingFangSC-Regular", "PingFang SC";
  .marquee-group {
    display: block;
    .marquee-item {
      display: block;
      height: 30px;
      width: 100%;
      line-height: 30px;
      box-sizing: border-box;
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      color: rgba(102, 102, 102, 1);
      background: rgba(246, 247, 249, 1);
    }
  }
}
</style>