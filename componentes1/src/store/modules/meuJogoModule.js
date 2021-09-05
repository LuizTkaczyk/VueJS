export default{
    state:{
        meuJogo: 'Lutas',
    },
    getters:{
        getMeusJogos(state) {
            return state.meuJogo
        }
    },
    mutations:{
        setJogoNome(state, newName){
            state.meuJogo = newName
        }
    },
    actions:{
        updateJogoName(context, value){
            context.commit('setJogoNome', value)

        }
    }
}