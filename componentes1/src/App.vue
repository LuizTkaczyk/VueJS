<template>
  <div id="app">
    <AppHeader
      @game-selected="changeGame"
      @change-component="changeComponent"
    />

    <AppSection :jogo="jogo" :current-component="currentSectionComponent" />

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

  data() {
    return {
      jogo: "luta",
      currentSectionComponent: "AppBanner",
    };
  },
  methods: {
    changeGame(value) {
      this.jogo = value;
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
