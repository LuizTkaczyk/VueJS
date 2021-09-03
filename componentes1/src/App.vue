<template>
  <div id="app">
    <AppHeader @game-selected="changeGame" />
  
    <AppSection :jogo="jogo" />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter.vue";
import AppSection from "./components/AppSection.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppSection,
   
  },

  data(){
    return{
      jogo: 'luta'
    }
  },
  methods: {
    changeGame(value){
        this.jogo = value
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani&display=swap");
</style>
