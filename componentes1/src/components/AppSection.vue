<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <h3>Você está vendo noticias sobre jogos de {{ jogo }}</h3>
      </div>
    </div>

    <app-banner />
    <app-section-news />
  </div>
</template>

<script>
import AppBanner from "./AppSectionBanner.vue";
import AppSectionNews from "./AppSectionNews.vue";

export default {
  components: {
    AppBanner,
    AppSectionNews,
  },

  props:{
      jogo: String
  }
};
</script>

<style scoped>
</style>