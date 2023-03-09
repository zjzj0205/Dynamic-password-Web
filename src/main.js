import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'reset-css';
import "./total.less"
// import JsEncrypt from 'jsencrypt'
// Vue.prototype.$jsEncrypt = JsEncrypt
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
