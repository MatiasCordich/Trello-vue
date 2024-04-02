<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <RouterLink to="/" class="navbar-brand" href="#">
        <img src="@/assets/logo.svg" alt="" width="30" height="24">
        PokeAPI
      </RouterLink>
      <div>
        <RouterLink class="btn btn-outline-primary me-2" to="/">Home</RouterLink>
        <RouterLink class="btn btn-outline-primary me-2" to="/pokemons">Pokemons</RouterLink>
        <RouterLink class="btn btn-outline-primary" to="/favoritos">Favoritos</RouterLink>
      </div>
    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>

</template>


