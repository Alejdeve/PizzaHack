<template>
  <v-container class="resume-container">
    <h2 class="text-h4 mb-4">Resumen de tu pedido</h2>
    <v-card>
      <v-card-title>Detalles de la pizza</v-card-title>
      <v-card-text>
        <p><strong>Masa:</strong> {{ massType }}</p>
        <p><strong>Ingredientes:</strong></p>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient">
            {{ ingredient }}
          </li>
        </ul>
        <p><strong>Precio total:</strong> {{ totalPrice.toFixed(2) }}€</p>
      </v-card-text>
    </v-card>
    <v-btn color="primary" class="mt-4" @click="confirmOrder">
      Confirmar pedido
    </v-btn>
  </v-container>
</template>

<style scoped>
.resume-container {
    margin-top: 50px; /* Espacio superior */
}

h2 {
    color: #FF5722; /* Color de encabezado */
}
</style>

  