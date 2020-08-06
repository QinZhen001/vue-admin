<!-- 跑马灯 -->
<template>
  <el-carousel
    class="marquee"
    :height="height"
    :direction="direction"
    :autoplay="autoPlay"
    :indicator-position="indicatorPosition"
    :interval="interval"
    :loop="loop"
  >
    <el-carousel-item v-for="(item,index) in list" :key="index">
      <h3 class="medium">{{ item.text }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
const list = [
  {
    text: "6分钟前 涂善宝 成功签单正价课 111",
    show: true,
  },
  {
    text: "6分钟前 涂善宝 成功签单正价课 222",
    show: false,
  },
  {
    text: "6分钟前 涂善宝 成功签单正价课 333",
    show: false,
  },
];

export default {
  components: {},
  props: {
    interval: {
      type: Number,
      default: 6000,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: "vertical",
    },
    height: {
      type: String,
      default: "30px",
    },
    indicatorPosition: {
      type: String,
      default: "none",
    },
    loop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      list: list,
      children: [],
      marquee: null,
      index: 0,
      intervalId: null,
    };
  },
  mounted() {},
  destroyed() {},
  methods: {
    play() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(
        function () {
          this.index = this.index >= this.list.length ? 0 : this.index + 1;
          this.list = this.list.map((item, index) => {
            let show = this.index === index;
            return {
              ...item,
              show,
            };
          });
        }.bind(this),
        this.interval
      );
    },
  },
};
</script>


<style lang='scss' scoped>
.marquee {
  background: rgba(246, 247, 249, 1);
}

.el-carousel__item {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>