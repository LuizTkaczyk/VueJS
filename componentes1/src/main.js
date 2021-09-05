import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue2Filters from 'vue2-filters'
import store from './store/store'

//usando os filtros importados
Vue.use(Vue2Filters)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
