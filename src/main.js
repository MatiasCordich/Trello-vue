import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Implementamos Pinia en nuestra app

import { createPinia } from 'pinia'

// Instancio Pinia

const pinia = createPinia()


const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
