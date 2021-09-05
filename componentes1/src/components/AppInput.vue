<template>
  <input
    type="text"
    class="form-control"
    placeholder="Digite o seu jogo favorito"
    :value="meuJogo"
    @keyup="updateJogoName($event.target.value)"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters({
    meuJogo: "getMeusJogos",
  }),
  methods: mapActions(["updateJogoName"]),
};
</script>

<style scoped>
</style>

