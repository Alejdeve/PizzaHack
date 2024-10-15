<template>
  <v-container class="home-container">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="welcome-title">Bienvenido a PizzaHack</h1>
        <p class="welcome-text">
          Crea tu pizza favorita con los mejores ingredientes y al mejor precio.
        </p>
        <v-btn color="primary" to="/login" class="my-custom-button">Iniciar sesión</v-btn>
        <v-btn color="secondary" to="/register" class="my-custom-button">Registrarse</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const message = ref("¡Bienvenido a PizzaHack!"); // Mensaje para el encabezado (si lo necesitas)
</script>

<style scoped>
.home-container {
  margin-top: 50px; /* Espacio superior */
}

.welcome-title {
  font-size: 2.5rem; /* Tamaño de fuente */
  color: #FF5722; /* Color de texto */
  margin-bottom: 20px; /* Espacio inferior */
}

.welcome-text {
  font-size: 1.2rem; /* Tamaño de texto */
  margin-bottom: 20px; /* Espacio inferior */
}

.my-custom-button {
  margin: 10px; /* Espaciado alrededor de los botones */
  border-radius: 5px; /* Bordes redondeados */
}
</style>


  