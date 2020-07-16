<!--  -->
<template>
  <div v-if="!item.hidden">
    <div>13132</div>
    <template
      v-if="hasOneShowingChild(item.children,item) && 
       onlyOneChild.name &&
       onlyOneChild.meta.title"
    >
      <el-menu-item
        :index="onlyOneChild.path"
        :class="{'submenu-title-noDropdown':!isNest}"
        @click="navTo(onlyOneChild)"
      >
        <span>{{onlyOneChild.meta.title}}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else ref="subMenu" :index="item.path" popper-append-to-body>
      <template slot="title">
        <span>{{calcSubmenuTitle(item)}}</span>
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
  computed: {},
  mounted() {},
  methods: {
    calcSubmenuTitle(item) {
      if (item.meta && item.meta.title) {
        return item.meta.title;
      }
      return item.name || "暂无名字";
    },
    navTo({ name, path }) {
      if (!name) {
        console.error(`${path}路由 缺少name属性`);
      }
      this.$router.push({
        name
      });
    },
    hasOneShowingChild(children = [], parent) {
      console.log(123, children);
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
    }
  }
};
</script>
<style lang='scss' scoped>
.item {
  display: inline-block;
  width: 100%;
  height: 50px;
}
</style>