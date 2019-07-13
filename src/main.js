import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { FormSelectPlugin } from "bootstrap-vue";
import "vue-loading-overlay/dist/vue-loading.css";
import { NavbarPlugin } from "bootstrap-vue";
import { VBTooltip } from "bootstrap-vue";
import { VBTooltipPlugin } from "bootstrap-vue";
import { TooltipPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(FormSelectPlugin);
Vue.use(NavbarPlugin);
Vue.use(VBTooltipPlugin);
Vue.directive('b-tooltip', VBTooltip);
Vue.use(TooltipPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
