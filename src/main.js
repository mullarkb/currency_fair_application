import Vue from 'vue'
import App from './App.vue'
import VerificationCode from 'vue-verification-code'
Vue.use(VerificationCode)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
