import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '空白页',
      navHide: true,
      auth: true,
      keepAlive: true
    }
  }
];
// 自动化注册路由
const routerContext = require.context('./', true, /\.js$/)
routerContext.keys().forEach(fileName => {
  // 如果是根目录的 index.js 、不处理
  if (fileName.startsWith('./index')) {
    return
  }
  // 获取组件配置
  const componentConfig = routerContext(fileName)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  console.log('componentConfig :>> ', componentConfig);
  routes = routes.concat(componentConfig.default || routerModule)
})


const router = new VueRouter({
  routes
});

export default router;
