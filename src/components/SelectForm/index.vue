<!--  -->
<template>
  <div
    ref="form"
    class="form"
    @mousedown.prevent="onMousedown"
    @mousemove.prevent="onMousemove"
    @mouseup.prevent="onMouseup"
  >
    <span class="cell" v-for="(item,index) in list" :key="index">
      <span class="text">{{item.text}}</span>
    </span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list: [],
      touches: {
        moveable: false,
        touch1: {
          x: 0,
          y: 0,
        },
        touch2: {
          x: 0,
          y: 0,
        },
      },
    };
  },
  mounted() {
    this.initList();
  },
  methods: {
    initList() {
      let arr = new Array(16).fill(true);
      this.list = arr.map((item, index) => {
        return {
          text: index,
        };
      });
      // console.log(this.list)
      // debugger
    },
    onMousedown(e) {
      console.log("onMousedown", e);
      console.log(this.$refs.form.children)
      this.$refs.form.children.forEach(item => {
        if(item.contains(e.target)){
          console.log("item",item)
          item.style = "background: red;"
        }
      })
    },
    onMousemove(e) {
      // console.log("onMousemove", e);
    },
    onMouseup(e) {
      console.log("onMouseup", e);
    },
  },
};
</script>
<style lang='scss' scoped>
.form {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  border-top: 1px solid #999;
  border-left: 1px solid #999;
  box-sizing: content-box;
  .cell {
    flex: 0 0 100px;
    height: 50px;
    position: relative;
    border-bottom: 1px solid #999;
    border-right: 1px solid #999;
    box-sizing: border-box;

    .text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>