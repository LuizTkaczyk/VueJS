<template>
  <section class="section-news">
    <div class="container">
      <app-section-news-individual
        v-for="noticias in news"
        :key="noticias.id"
        :imgName="noticias.img"
        :imgInfo="noticias.imgInfo"
        :newsTitle="noticias.title"
        :newsDate="noticias.date"
      >
        <template #title>
          <!-- <h2 @click="goToPage(`/news/${noticias.id}`)">
            {{ noticias.title }} -->

          <!-- as noticias tem mais de um paramentro, por isso passa o nome, mais os params, e por fina tranforma ela em uma tag h2 -->
          <router-link
            :to="{ name: 'notice', params: { idnotice: noticias.id } }"
            tag="h2"
            >{{ noticias.title }}</router-link
          >
        </template>
        <p>{{ noticias.content | truncate(200) }}</p>
      </app-section-news-individual>
    </div>
  </section>
</template>

<script>
import AppSectionNewsIndividual from "./AppSectionNewsIndividual.vue";
import { mapGetters } from "vuex";
export default {
  components: { AppSectionNewsIndividual },

  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      news: "getNews",
    }),
  },
  methods: {
    // goToPage(page) {
    //   this.$router.push(page);
    // },
  },
};
</script>
<style>
.section-news {
  padding: 50px 0;
  margin-top: 25px;
  background-color: olivedrab;
}
</style>