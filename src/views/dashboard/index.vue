<template>
  <div class="content-wrapper">
    dashboard
        <p @click="addd(obj)">{{obj.d}}</p>
        <p @click="adde(obj)"> {{obj.e}}</p>
    </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {
      obj:{}
    };
  },
  created() {
   
  },
  mounted() {
     this.obj = {d: 1};
      this.obj.e = 2;
  },
  methods: {
           addd(item) {
            item.d = item.d + 1;
            console.log('item--',item);
        },
        adde(item) {
            item.e = item.e + 1;
            console.log('item--',item);
        }
  }
};
</script>


<style lang='scss' scoped>
</style>