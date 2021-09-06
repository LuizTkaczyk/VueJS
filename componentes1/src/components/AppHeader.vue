<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand">
        <a href="#" class="link navbar-brand mr-auto">
          <img
            src="./../assets/games.png"
            alt=""
            class="img d-inline-block align-top"
            id="logo"
          />
          LATDS
        </a>

        <div class="links mr-2">
          <!--Rota criada para a home -->
          <router-link  class="btn mr-5" to="/">
            Inicio</router-link
          >

          <router-link  class="btn mr-5" to="/news"
            >Games</router-link
          >

          <!-- <a href="#" @click.prevent="$emit('change-component', 'home')" >Início</a>
          <a href="#"  @click.prevent="$emit('change-component', 'news')" class="btn mr-5">Games</a> -->
          <a href="#" class="btn mr-5">Gêneros</a>

          <select
            name="game"
            id="game-selected"
            class="form-control"
            @change="$emit('game-selected', $event.target.value)"
          >
            <option value="">Tipos de jogos</option>
            <option value="luta" selected>Luta</option>
            <option value="corrida">Corrida</option>
            <option value="aventura">Aventura</option>
          </select>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: black;
}

#logo {
  width: 100px;
  height: 50px;
}

.links {
  display: inline-flex;
}

.link {
  color: orange;
  font-size: 30px;
  font-family: "Rajdhani";
}

.links a {
  color: white;
}

.links a:focus {
  color: ye;
  outline: none !important;
  box-shadow: none !important;
}

.link-active {
  background-color: white;
  color: black !important;
}
</style>