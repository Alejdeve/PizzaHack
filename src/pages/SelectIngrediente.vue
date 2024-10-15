<template>
    <v-container>
      <h2 class="text-h4 mb-4">Selecciona tus ingredientes</h2>
      <v-card>
        <v-card-text>
          <v-checkbox
            v-for="ingredient in ingredients"
            :key="ingredient.name"
            v-model="selectedIngredients"
            :label="`${ingredient.name} (${ingredient.price.toFixed(2)}€)`"
            :value="ingredient.name"
            :disabled="selectedIngredients.length >= 10 && !selectedIngredients.includes(ingredient.name)"
          ></v-checkbox>
          <v-alert
            v-if="selectedIngredients.length >= 10"
            type="warning"
            class="mt-3"
          >
            Puedes seleccionar un máximo de 10 ingredientes.
          </v-alert>
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
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { usePizzaStore } from '../stores/pizza';
  
  const router = useRouter();
  const pizzaStore = usePizzaStore();
  
  const ingredients = [
    { name: 'Pepperoni', price: 2 },
    { name: 'Carne molida', price: 2 },
    { name: 'Pollo', price: 1.8 },
    { name: 'Jamón', price: 1.8 },
    { name: 'Chorizo', price: 2 },
    { name: 'Piña', price: 0.5 },
    { name: 'Tomate', price: 0.5 },
    { name: 'Pepino', price: 1 },
    { name: 'Maíz dulce', price: 1.5 },
    { name: 'Queso adicional', price: 1 },
  ];
  
  const selectedIngredients = ref([]);
  
  const proceedToResume = () => {
    pizzaStore.setIngredients(selectedIngredients.value);
    router.push('/resume');
  };
  </script>
  