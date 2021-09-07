// interface
import { RouteRecordRaw } from "vue-router";
//pages
// import Home from "../pages/Home.vue";
import Lucky from "../pages/Lucky.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Lucky },
  { path: "/lucky", component: Lucky },
];

export default routes;
