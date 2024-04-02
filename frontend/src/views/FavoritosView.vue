<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavoritos = useFavoritosStore()

const { favoritos } = storeToRefs(useFavoritos)
const { remove } = useFavoritos
</script>
<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul v-else class="list-group mt-2">
        <li v-for="pokemon in favoritos" :key="pokemon.id" class="d-flex justify-content-between align-items-center gap-2 list-group-item">
            <div>
                {{ pokemon.name }}
            </div>
            <div >
                <RouterLink :to="`/pokemons/${pokemon.name}`" class=" btn btn-sn me-1 btn-primary">Mas informacion</RouterLink>
                <button @click="remove(pokemon.id)" class=" btn btn-sn btn-danger">Eliminar</button>
            </div>
        </li>

    </ul>
</template>