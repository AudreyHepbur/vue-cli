import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
// 自动化注册路由
const routerContext = require.context('./', true, /\.js$/)
routerContext.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = routerContext(fileName)
})

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
];

const router = new VueRouter({
  routes
});

export default router;
