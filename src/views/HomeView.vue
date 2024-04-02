<script setup>
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore()

const {increment} = useCounter

// La referencias reactivas y las propiedades computadas las tengo que destructurar de la siguiente manera

const {count, double} = storeToRefs(useCounter)
</script>

<template>
  <main>
    <h1>Home counter: {{ count }}</h1>
    <h1>Double: {{ double }}</h1>
    <button @click="increment">Increment</button>
  </main>
</template>
