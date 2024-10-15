<template>
  <v-container class="login-container">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <h2 class="text-h4 mb-4">Iniciar sesión</h2>
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="email"
            label="Correo electrónico"
            type="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Contraseña"
            type="password"
            required
          ></v-text-field>
          <v-btn type="submit" color="primary" block>Iniciar sesión</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.login-container {
    margin-top: 50px; /* Espacio superior */
}

h2 {
    color: #FF5722; /* Color de encabezado */
}
</style>

  