import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Googleapps from "./views/Googleapps.vue";
import Starbucks from "./views/Starbucks.vue";
import Dataviz from "./views/Dataviz.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/googleapps",
      name: "Googleapps",
      component: Googleapps
    },
    {
      path: "/starbucksStores",
      name: "StarbucksStores",
      component: Starbucks
    },
    {
      path: "/Datagraphs",
      name: "Datagraphs",
      component: Dataviz
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
