<!-- appMain 
   router-view 复用时组件不刷新的解决办法
    :key="key"
-->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style lang='scss' scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main{
   padding-top: 50px;
}
</style>