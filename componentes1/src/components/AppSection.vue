<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <h3>Você está vendo noticias sobre jogos de {{ jogo }}</h3>
      </div>
    </div>

    <component :is="currentComponent"></component>

    <div class="container">
        <div class="row my-club mt-5">
            <div class="col-6">
                <h2>Seu jogo favorito é :{{ meuJogo }}</h2>
            </div>
            <div class="col-6">
                <app-input v-model="meuJogo"/>
            </div>
        </div>
    </div>


  </div>
</template>

<script>
import AppBanner from "./AppSectionBanner.vue";

import AppInput from './AppInput.vue'

export default {
  components: {
    AppBanner,
    //aplicando o lazy loading (somente quando o conteúdo é realmente requisitado)
    AppSectionNews: ()=> import('./AppSectionNews.vue'),
    AppInput
  },

  props:{
      jogo: String,
      currentComponent:String
  },

  data(){
      return{
          meuJogo: 'Lutas',
         
      }
  }
};
</script>

<style scoped>
</style>