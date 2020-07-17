<!-- 跑马灯 -->
<template>
 <div class="content-wrapper">
   <Marquee></Marquee>
   <Marquee2></Marquee2>
 </div>
</template>

<script>
// import Marquee from  "@/components/Marquee/index"
import Marquee2 from "@/components/Marquee/index2"

export default {
 components: {
  //  Marquee,
   Marquee2
 },
 props: {},
 data () {
  return {
  };
 },
 mounted(){},
 methods: {}
}

</script>
<style lang='scss' scoped>
</style>