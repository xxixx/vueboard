import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Read from "../components/Read.vue";
import Create from "../components/Create.vue";
import Detail from "../components/Detail.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "read",
    component: Read,
  },
  {
    path: "/create/:contentId?",
    name: "create",
    component: Create,
  },
  {
    path: "/detail/:contentId",
    name: "detail",
    component: Detail,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
