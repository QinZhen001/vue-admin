<!-- 跑马灯 -->
<template>
  <el-carousel class="marquee" :height="height" :direction="direction" :autoplay="autoPlay" :indicator-position="indicatorPosition" :interval="interval">
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
  // {
  //   text: "6分钟前 涂善宝 成功签单正价课 444",
  //   show: false,
  // },
  // {
  //   text: "6分钟前 涂善宝 成功签单正价课 555",
  //   show: false,
  // },
];

export default {
  name: "marquee4",
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
    indicatorPosition:{
      type:String,
      default:'none'
    }
    // loop: {
    //   type: Boolean,
    //   default: true
    // }
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
  mounted() {
    // if (this.autoPlay) {
    //   this.play();
    // }
  },
  destroyed() {
    // this.destroy();
  },
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
    // destroy() {
    //   if (this.intervalId) {
    //     clearTimeout(this.intervalId);
    //     this.intervalId = null;
    //   }
    // },
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

// .marquee {
//   width: 344px;
//   height: 30px;
//   border-radius: 4px;
//   overflow-y: hidden;
//   font-family: "PingFangSC-Regular", "PingFang SC";
//   background: rgba(246, 247, 249, 1);
//   .marquee-group {
//     position: relative;
//     .marquee-item {
//       position: absolute;
//       top: 0;
//       left: 0;
//       height: 30px;
//       width: 100%;
//       line-height: 30px;
//       box-sizing: border-box;
//       overflow: hidden;
//       text-align: center;
//       font-weight: 400;
//       font-size: 14px;
//       color: rgba(102, 102, 102, 1);
//     }
//   }
// }

// .marqueeGroup-enter-active,
// .marqueeGroup-leave-active {
//   transform: translateY(0);
//   transition: all 2s ease-out;
//   // transform-origin: center top;
// }

// .marqueeGroup-enter {
//   margin-top: 30px;
//   transform: translateY(100%);
// }

// .marqueeGroup-leave-to {
//   margin-top: 0;
//   transform: translateY(-100%);
// }
</style>