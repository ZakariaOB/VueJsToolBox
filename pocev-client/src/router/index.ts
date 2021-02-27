import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Sandbox from "../views/_sandbox/sandbox.vue";
import PeSlidingMenu from "../components/sliding-menu/pe-sliding-menu.vue";
import PeVueSandBox from "pages/VueJs/pe-vue-sandbox.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "PeSlidingMenu",
    component: PeSlidingMenu
  }/*,
  {
    path: "/vue-sandbox",
    name: "PeVueSandBox",
    component: PeVueSandBox
  }
  /*,
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/sandbox",
    name: "Sandbox",
    component: Sandbox
  },
  {
    path: "/peslidingmenu",
    name: "PeSlidingMenu",
    component: PeSlidingMenu  
  }*/
];

const router = new VueRouter({
  mode: "history",
  base: '/spa/',
  routes
});

export default router;
