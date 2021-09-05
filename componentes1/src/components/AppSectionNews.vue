<template>
  <section>
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
        <h2>
          {{ noticias.title }}
        </h2>
      </template>
      <p>{{ noticias.content | truncate(200) }}</p>
      </app-section-news-individual>
      
    </div>
  </section>
</template>

<script>
import AppSectionNewsIndividual from "./AppSectionNewsIndividual.vue";
import {mapGetters} from 'vuex'
export default {
  components: { AppSectionNewsIndividual },

  data() {
    return {
    
    };
  },
  computed:{
    ...mapGetters({
      news:'getNews'
    })
    
  }
};
</script>
<style scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: olivedrab;
}
</style>