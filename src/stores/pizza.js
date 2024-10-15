import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '../supabaseClient'; // Asegúrate de importar tu cliente de Supabase

export const usePizzaStore = defineStore('pizza', () => {
    const pizzas = ref([]);
    const loading = ref(false);
    const error = ref(null);

    // Función para agregar una nueva pizza
    const addPizza = async (pizzaData) => {
        loading.value = true;
        error.value = null;
        const { data, error: addError } = await supabase
            .from('pizzas') // Asegúrate de que la tabla 'pizzas' exista en tu base de datos
            .insert([pizzaData]);
        if (addError) {
            error.value = addError.message;
        } else {
            pizzas.value.push(data[0]);
        }
        loading.value = false;
    };

    // Función para obtener todas las pizzas del usuario
    const fetchPizzas = async (userId) => {
        loading.value = true;
        error.value = null;
        const { data, error: fetchError } = await supabase
            .from('pizzas')
            .select('*')
            .eq('user_id', userId); // Asegúrate de tener una columna 'user_id' en tu tabla
        if (fetchError) {
            error.value = fetchError.message;
        } else {
            pizzas.value = data;
        }
        loading.value = false;
    };

    return {
        pizzas,
        loading,
        error,
        addPizza,
        fetchPizzas,
    };
});
