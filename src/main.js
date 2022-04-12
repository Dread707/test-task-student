import Vue from 'vue'
import App from './components/app/App.vue'
import vuetify from './plugins/vuetify';
import VueGridLayout from 'vue-grid-layout';
import store from "@/store";
// import { makeServer } from "./server"
import moment from "moment";

Vue.config.productionTip = false

Vue.prototype.$moment = moment;

Vue.use(VueGridLayout)

// if (process.env.NODE_ENV === "development") {
//   makeServer()
// }

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
