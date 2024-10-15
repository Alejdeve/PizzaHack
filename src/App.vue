<script setup>
// Importaciones necesarias
import { computed, onMounted } from 'vue';
import { useUserStore } from './stores/user';
import { useRouter } from 'vue-router';

// Inicializar el store de usuario y el router
const userStore = useUserStore();
const router = useRouter();

// Computed para obtener el usuario actual
const user = computed(() => userStore.user);

// Cargar información del usuario al montar el componente
onMounted(async () => {
  await userStore.fetchUser();
});

// Función para manejar el cierre de sesión
const handleLogout = async () => {
  await userStore.signOut();
  router.push('/');
};
</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>PizzaHack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!user" to="/login" text>Iniciar sesión</v-btn>
      <v-btn v-if="!user" to="/register" text>Registrarse</v-btn>
      <v-btn v-if="user" @click="handleLogout" text>Cerrar sesión</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
/* Estilos para la barra de navegación */
.v-app-bar {
    background-color: #FF5722; /* Color de fondo */
    color: white; /* Color de texto */
}
</style>



