import { defineStore } from "pinia";
import { computed, ref } from "vue";

// Creamos nuestro Store en base a la Composition API

export const useCounterStore = defineStore('counter', () => {

  const count = ref(0)

  const increment = () => {
    count.value++
  }

  // La propiedad computada no cambia el estado de la variable reactiva sino que muestra transformada sin cambiar su valor sustancial

  const double = computed(() => count.value *2)

  return {
    count,
    increment,
    double
  }
})