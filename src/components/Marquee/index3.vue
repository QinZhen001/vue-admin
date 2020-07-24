<!-- 跑马灯 -->
<template>
  <div class="marquee" ref="marquee">
      <ul class="marquee-group">
        <li
          v-for="(item,index) in list"
          :key="index"
          v-show="item.show"
          class="marquee-item"
        >{{item.text}}</li>
      </ul>
  </div>
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
  {
    text: "6分钟前 涂善宝 成功签单正价课 444",
    show: false,
  },
  {
    text: "6分钟前 涂善宝 成功签单正价课 555",
    show: false,
  },
];

export default {
  name: "marquee3",
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
    if (this.autoPlay) {
      // this.play();
    }
  },
  destroyed() {
    this.destroy();
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
    destroy() {
      if (this.intervalId) {
        clearTimeout(this.intervalId);
        this.intervalId = null;
      }
    },
  },
};
</script>


<style lang='scss' scoped>
.marquee {
  width: 344px;
  height: 30px;
  border-radius: 4px;
  background: rgba(246, 247, 249, 1);
  .marquee-group {
    display: block;
    .marquee-item {
      height: 30px;
      width: 100%;
      line-height: 30px;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      color: rgba(102, 102, 102, 1);
    }
  }
}


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