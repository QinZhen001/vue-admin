import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// global css
import '@/styles/index.scss' 

import App from './App.vue'
import router from "./router"
import store from "./store"
import axios from "./axios"

// permission control
 import './router/permission' 

// Vue.config.productionTip = false
Vue.prototype.$http = axios 
Vue.use(ElementUI);



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
