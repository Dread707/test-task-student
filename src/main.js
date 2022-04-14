import Vue from 'vue';
import App from './components/app/App.vue';
import vuetify from './plugins/vuetify';
import VueGridLayout, {GridItem, GridLayout } from 'vue-grid-layout';
import VueTheMask from 'vue-the-mask';
import Toast from "vue-toastification";
import store from "@/store";
// import { makeServer } from "./server"
import moment from "moment";

import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;

Vue.prototype.$moment = moment;

Vue.use(VueGridLayout);
Vue.use(VueTheMask);
Vue.use(Toast, {maxToasts: 3,});

Vue.component('grid-item', GridItem);
Vue.component('grid-layout', GridLayout);

// if (process.env.NODE_ENV === "development") {
//   makeServer()
// }

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
