export default {
    state:{
        jogo: "luta",
    },
    getters:{
        getJogos(state) {
            return state.jogo
        },
    },
    mutations:{
        setJogo(state, newValue){
            state.jogo = newValue
        }
    },
    actions:{
        changeJogo(context, value){
            context.commit('setJogo', value)

        }
    }
}