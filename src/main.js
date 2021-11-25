import Vue from 'vue'
import App from './App.vue'
// import Epp from './Epp.vue'
import router from "./router";

import Vuetify from 'vuetify'; 
import 'vuetify/dist/vuetify.min.css';


Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App),
  vuetify: new Vuetify(),
}).$mount('#app')
