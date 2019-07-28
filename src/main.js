import Vue from 'vue'
import App from './App.vue'
// lib for user verification: https://www.npmjs.com/package/vue-verification-code
import VerificationCode from 'vue-verification-code'
Vue.use(VerificationCode)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
