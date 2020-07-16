<!--  -->
<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
      @select="handleSelect"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :base-path="route.path" :item="route"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

export default {
  components: {
    SidebarItem
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    routes() {
      let arr = [];
      this.$router.options.routes.forEach(item => {
        if (item.meunRoute) {
          arr.push(item);
        }
      });
      return arr;
    }
  },
  mounted() {},
  methods:{
   handleSelect(key, keyPath) {
        console.log(1111,key, keyPath);
      }
  }
}
</script>


<style lang='scss' scoped>
</style>