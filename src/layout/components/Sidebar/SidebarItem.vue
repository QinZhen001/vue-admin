<!--  -->
<template>
  <div v-if="!item.hidden">
    <div>13132</div>
    <template
      v-if="hasOneShowingChild(item.children,item)"
    >
      <router-link class="item" :to="calcTo(onlyOneChild)">
        <el-menu-item :index=" onlyOneChild.path" :class="{'submenu-title-noDropdown':!isNest}" >
          <span>111</span>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="item.path" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>

export default {
  name: "SidebarItem",
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  mounted() {},
  methods: {
    calcTo(route){
      debugger
      if(route.name){
        debugger
        return "" + route.name
      }
      return ""
    },
    hasOneShowingChild(children = [], parent) {
      console.log(123,children)
      debugger
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        }
        return true;
      });

      if (showingChildren.length == 1) {
        this.onlyOneChild = showingChildren[0];
        return true;
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent,
          path: "",
          noShowingChildren: true
        };
        return true;
      }
      return false;
    },
  }
};
</script>
<style lang='scss' scoped>
  .item{
    display: inline-block;
    width: 100%;
    height: 50px;
  }
</style>