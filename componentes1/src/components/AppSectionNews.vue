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
export default {
  components: { AppSectionNewsIndividual },

  data() {
    return {
      news: [],
    };
  },
  created() {
    this.news = [
      {
        id: 1,
        title: "Mortal Kombat x Street Figher",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accusantium sapiente neque tempora doloremque. Iusto, eos illo!",
        date: "2021-09-03",
        img: "streetgif.gif",
        imgInfo: "Noticia1",
      },
      {
        id: 2,
        title: "Mortal Kombat XII lançado",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accusantium sapiente neque tempora doloremque. Iusto, eos illo!",
        date: "2021-09-03",
        img: "mortalgif.gif",
        imgInfo: "Noticia2",
      },
      {
        id: 3,
        title: "TKOF - Campeonato aberto",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accusantium sapiente neque tempora doloremque. Iusto, eos illo!",
        date: "2021-09-03",
        img: "tkgif.gif",
        imgInfo: "Noticia3",
      },
    ];
  },
};
</script>
<style scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: olivedrab;
}
</style>