//requisições do Vuex - importanto o Vuex
import Vue from 'vue'
import Vuex from 'vuex'

//separando em módulos
import jogoModule from './modules/jogoModule'
import newsModule from './modules/newsModule'
import meuJogoModule from './modules/meuJogoModule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        jogoModule,
        newsModule,
        meuJogoModule
    }

})