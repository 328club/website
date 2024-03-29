import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routers";

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
