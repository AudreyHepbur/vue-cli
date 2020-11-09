export default [
  {
    path: "/home",
    name: "name",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "首页",
      keepAlive: false
    }
  }
];
