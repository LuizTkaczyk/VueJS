<template>
  <div id="app">
    <AppHeader
      @game-selected="changeGame"
      @change-component="changeComponent"
    />

    <AppSection  :current-component="currentSectionComponent" />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter.vue";
import AppSection from "./components/AppSection.vue";
//import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppSection,
  },

  data() {
    return {
      currentSectionComponent: "AppBanner",
    };
  },
  methods: {
    ...mapActions(['changeJogos']),

    /*
    jogo: function(value){
      this.$store.dispatch('changeJogo', value)
    },
  */

    /*
    ...mapMutations({
      jogo:'setJogo'
    }),
*/
    changeGame(value) {
     this.$store.commit('setJogo', value)
    },
    changeComponent(value) {
      let component;
      switch (value) {
        case "home":
        default:
          component = "AppBanner";
          break;
        case "news":
          component = "AppSectionNews";
          break;
      }

      this.currentSectionComponent = component;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani&display=swap");
</style>
