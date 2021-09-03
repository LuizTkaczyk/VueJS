<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand">
        <a href="#" class="link navbar-brand mr-auto">
          <img
            src="./../assets/logo.svg"
            alt=""
            class="img d-inline-block align-top"
            id="logo"
          />
          Luiz Antonio
        </a>

        <div class="links mr-2">
          <a href="" class="btn mr-5">Início</a>
          <a href="" class="btn mr-5">Times</a>
          <a href="" class="btn mr-5">Classificações</a>

          <select name="game" id="game-selected" class="form-control" @change="$emit('game-selected', $event.target.value)">
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
  width: 150px;
  height: 100%;
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
</style>