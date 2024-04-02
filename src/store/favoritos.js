import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([])

    if (localStorage.getItem('pokemones')) {
        favoritos.value = JSON.parse(localStorage.getItem("pokemones"))
    }

    const add = (pokemon) => {
        favoritos.value.push(pokemon)
        localStorage.setItem('pokemones', JSON.stringify(favoritos.value))
    }

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        localStorage.setItem('pokemones', JSON.stringify(favoritos.value))
    }

    const findPokemon = (name) => favoritos.value.find(item => item.name === name)

    return {
        favoritos,
        add,
        remove,
        findPokemon
    }
})