import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'styles/reset.scss'
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
