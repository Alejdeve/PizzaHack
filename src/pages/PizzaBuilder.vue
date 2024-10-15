<template>
  <v-container class="select-ingrediente-container">
    <h2 class="text-h4 mb-4">Selecciona tus ingredientes</h2>
    <v-card>
      <v-card-text>
        <v-checkbox
          v-for="ingredient in ingredients"
          :key="ingredient.name"
          v-model="selectedIngredients"
          :label="`${ingredient.name} (${ingredient.price}€)`"
          :value="ingredient.name"
          :disabled="selectedIngredients.length >= 10 && !selectedIngredients.includes(ingredient.name)"
        ></v-checkbox>
      </v-card-text>
    </v-card>
    <v-btn
      color="primary"
      class="mt-4"
      :disabled="selectedIngredients.length === 0"
      @click="proceedToResume"
    >
      Ver resumen del pedido
    </v-btn>
  </v-container>
</template>

<style scoped>
.select-ingrediente-container {
    margin-top: 50px; /* Espacio superior */
}

h2 {
    color: #FF5722; /* Color de encabezado */
}
</style>


  