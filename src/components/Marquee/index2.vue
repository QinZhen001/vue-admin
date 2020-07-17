<!-- 跑马灯 -->
<template>
  <div class="marquee" ref="marquee">
    <div class="marquee-group" ref="marqueeGroup">
      <transition-group name="marqueeGroup" tag="div">
        <div
          v-for="(item,index) in list"
          :key="index"
          v-show="item.show"
          class="marquee-item"
        >{{item.text}}</div>
      </transition-group>
    </div>
  </div>
</template>

<script>
const list = [
  {
    text: "6分钟前 涂善宝 成功签单正价课 111",
    show: false
  },
  {
    text: "6分钟前 涂善宝 成功签单正价课 222",
    show: false
  },
  {
    text: "6分钟前 涂善宝 成功签单正价课 333",
    show: false
  },
  {
    text: "6分钟前 涂善宝 成功签单正价课 444",
    show: true
  },
  {
    text: "6分钟前 涂善宝 成功签单正价课 555",
    show: false
  }
];

export default {
  name: "marquee",
  components: {},
  props: {
    // interval: {
    //   type: Number,
    //   default: 3000
    // },
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
      marquee: null,
      index: 0,
      interval: null
    };
  },
  mounted() {
    // setTimeout()
    this.setMarqueeHeight();
    this.initMarquee();
    if (this.autoPlay) {
      this.play();
    }
  },
  destroyed() {
    this.destroy();
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
      // this.$refs.marqueeGroup.style.height = height + "px";
    },
    initMarquee() {},
    play() {
      if (this.interval) {
        clearInterval(this.interval);
      }
      // this.index = this.index >= this.list.length ? 0 : this.index + 2;
      // this.list = this.list.map((item, index) => {
      //   let show = this.index === index;
      //   return {
      //     ...item,
      //     show
      //   };
      // });

      // this.interval = setInterval(function(){
      //   this.list = this.list.map((item,index)=>{
      //     let show = this.index === index
      //     return {
      //       ...item,
      //       show
      //     }
      //   })
      // }.bind(this), 3000);
    },
    destroy() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.marquee {
  width: 344px;
  height: 30px;
  border-radius: 4px;
  overflow-y: hidden;
  font-family: "PingFangSC-Regular", "PingFang SC";
  .marquee-group {
    position: relative;
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
      background: rgba(246, 247, 249, 1);
    }
  }
  // .play {
  //   animation: verticalDown 10s infinite;
  // }
}

$--md-fade-transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1),
  opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) !default;

.marqueeGroup-enter-active,
.marqueeGroup-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: $--md-fade-transition;
  transform-origin: center top;
}
.marqueeGroup-enter,
.marqueeGroup-leave-active {
  opacity: 0;
  transform: scaleY(0);
}

@keyframes verticalDown {
  from {
    margin-top: 0;
  }
  to {
    margin-top: -100px;
  }
}
</style>