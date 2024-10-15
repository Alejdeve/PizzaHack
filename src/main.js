import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import vuetify from './plugins/vuetify';
import './style.css';

// Crear la aplicación Vue
const app = createApp(App);

// Usar Pinia para la gestión de estado
app.use(createPinia());

// Usar Vue Router para la navegación
app.use(router);

// Usar Vuetify para la UI
app.use(vuetify);

// Montar la aplicación en el DOM
app.mount('#app');
