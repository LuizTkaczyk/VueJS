<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <h3>Você está vendo noticias sobre jogos de {{ jogo }}</h3>
      </div>
    </div>

    <transition name="fade-view" mode="out-in" >
      <router-view></router-view>
    </transition>

    <!-- <component :is="currentComponent"></component> -->

    <div class="container">
      <div class="row my-club mt-5">
        <div class="col-6">
          <h2>Seu jogo favorito é : {{ meuJogo }}</h2>
        </div>
        <div class="col-6">
          <app-input />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapState } from "vuex";
import AppInput from "./AppInput.vue";

//entre chaves para importar somente o mapGetters
import { mapGetters } from "vuex";

export default {
  components: {
    AppInput,
  },

  props: {
    currentComponent: String,
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      jogo: "getJogos",
      meuJogo: "getMeusJogos",
    }),

    /*
    //capturando lá do arquivo store.js e trazendo para o AppSection
    ...mapState(["jogo", "meuJogo"]),
    */
  },
};
</script>

<style scoped>
.fade-view-enter, .fade-view-leave-to{
  opacity: 0;
}
.fade-view-enter-active, .fade-view-leave-active{
  transition: opacity .5s ease-in-out;
}
</style>