<script setup>

import { useGetData } from '../composables/getData';
import { useFavoritosStore } from '@/store/favoritos';

import { useRoute, useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';

// Con este hook accedemos a los parametros de nuestra URL
const route = useRoute()

// Este hook me da funcionalidades de enrutamiento por ejemplo volver a tras a una ruta
const router = useRouter()

const back = () => {
  router.push('/pokemons')
}

const useFavoritos = useFavoritosStore()

// Destructuramos nuestro compasable con lo que queremos usar y obtener

const { data, getData, loading, errorData } = useGetData()
const { add, findPokemon } = useFavoritos



getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)


</script>

<template>
  <p v-if="loading">Cargando informacion...</p>
  <div 
    class="mt-2 alert alert-danger" 
    v-if="errorData"
    >
    No existe el pokemon
  </div>
  <div v-if="data">
    <img :src="data.sprites?.front_default" alt="pokemon-img">
    <h1>Pokemon: {{ $route.params.name }}</h1>
    <RouterLink
      to="/favoritos" 
      :disabled="findPokemon(data.name)" 
      @click="add(data)" 
      class="btn btn-primary mb-2">
      Agregar a Favoritos
    </RouterLink>
  </div>
  <button 
    class="btn btn-outline-primary" 
    @click="back">
    Volver
  </button>
</template>
