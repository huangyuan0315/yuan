<template>
  <div id="app">
    <menus><span class="yuan">源</span></menus>
   <!-- <el-collapse-transition> -->
     <transitions>
      <router-view/>
     </transitions>
   <!-- </el-collapse-transition> -->
  </div>
</template>
<script>
import dynamicRouting from "./router/addroute";
const menus = () => import("@/components/Menus");
const transitions = () => import("@/components/Transition");
export default {
  name: "App",
  data() {
    return {};
  },
  components: { menus,transitions },
  beforeDestroy() {
    this.addRoute = null;
  },
  methods: {
    addRoute() {
      const route_me = [];
      for (let i in dynamicRouting) {
        if (dynamicRouting.hasOwnProperty(i) === true) {
          const rs = {
            path: "/" + i,
            component: dynamicRouting[i],
            name: i
          };
          route_me.push(rs);
          // 强制更新子组件
          // this.$forceUpdate();
        }
      }
      this.$root.MENUS = route_me;
      const base = this.$router.options.routes;
      console.log(base,route_me,base.concat(route_me));
      
      this.$router.options.routes = base.concat(route_me);
      this.$router.addRoutes(this.$router.options.routes);
      console.log(this.$router.options);
    }
  },
  mounted() {
    this.addRoute();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.yuan {
  position: absolute;
  right: 30px;
  line-height: 58px;
  color: red;
}
</style>
