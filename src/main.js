import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Buefy);

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBqDoOOTB4VdJdxDoLZS-RJM2Rpmwpep7s",
    libraries: "places" // necessary for places input
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
