import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue2Filters from 'vue2-filters'
import store from './store/store'
import router from './router/routes'

//usando os filtros importados
Vue.use(Vue2Filters)

Vue.config.productionTip = false

// //Guarda de rota global
// router.beforeEach((to, from, next) =>{
//   console.log(to, from)
//   next()
// })

// router.afterEach(() => {
//   console.log('Página carregada com sucesso')
// })


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
