import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

import Alert from './components/Navbar.vue'
Vue.component('app-alert', Alert)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')