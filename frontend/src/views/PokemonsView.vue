<script setup>

import { RouterLink } from 'vue-router';
import { useGetData } from '../composables/getData';

// Una vez llamado el useGetData desestructuro lo que quiero obtener del composalbe que es la funcion para obtener la data y la data

const { data, getData, loading, errorData } = useGetData()

getData('https://pokeapi.co/api/v2/pokemon')


</script>

<template>
  <h1>Pokemons</h1>
  <p v-if="loading">Cargando informacion...</p>
  <div class="mt-2 alert alert-danger" v-if="errorData">{{ errorData }}</div>
  <div v-if="data">
    <ul class="list-group mb-2">
      <li class="list-group-item" v-for="pokemon in data.results">
        <RouterLink :to="`/pokemons/${pokemon.name}`">
          {{ pokemon.name }}
        </RouterLink>
      </li>
    </ul>
    <button 
    :disabled="!data.previous"
    class="btn btn-success me-2" @click="getData(data.previous)">Previous
    </button>
    <button 
    :disabled="!data.next"
    class="btn btn-warning" @click="getData(data.next)">Next</button>
  </div>
</template>