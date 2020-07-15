<template>
  <div id="app" v-clickoutside="handleClose">
    <router-view />
  </div>
</template>

<script>
import Clickoutside from "./directives/clickoutside";

export default {
  name: "App",
  directives: { Clickoutside },
  components: {},
  methods:{
    handleClose(){
      console.log(1111)
    }
  }
};
</script>

<style>
</style>
