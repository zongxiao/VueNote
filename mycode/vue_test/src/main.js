import Vue from 'vue'
import App from './App.vue'
import {allMixin} from './mixin'
Vue.config.productionTip = false;
Vue.mixin(allMixin)
new Vue({
  render: h => h(App)
}).$mount("#app")