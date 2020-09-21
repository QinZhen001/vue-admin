<!--  -->
<template>
 <div>我是middle</div>
</template>

<script>
export default {
 components: {},
 props: {},
 data () {
  return {
  };
 },
 mounted(){
   console.log(this.prop)
   console.log('this.$attr',this.$attr)
   console.log('this.$prop',this.$prop)
 },
 methods: {}
}

</script>
<style lang='scss' scoped>
</style>