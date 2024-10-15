import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '../supabaseClient'; // Importa tu cliente de Supabase

export const useUserStore = defineStore('user', () => {
    const user = ref(null);
    const loading = ref(false);
    const error = ref(null);

    // Función para registrarse
    const signUp = async (email, password) => {
        loading.value = true;
        error.value = null;
        const { data, error: signupError } = await supabase.auth.signUp({
            email,
            password,
        });
        if (signupError) {
            error.value = signupError.message;
        } else {
            user.value = data.user;
        }
        loading.value = false;
    };

    // Función para iniciar sesión
    const signIn = async (email, password) => {
        loading.value = true;
        error.value = null;
        const { data, error: loginError } = await supabase.auth.signIn({
            email,
            password,
        });
        if (loginError) {
            error.value = loginError.message;
        } else {
            user.value = data.user;
        }
        loading.value = false;
    };

    // Función para cerrar sesión
    const signOut = async () => {
        await supabase.auth.signOut();
        user.value = null;
    };

    // Función para obtener el usuario actual
    const fetchUser = async () => {
        const { data } = await supabase.auth.getUser();
        user.value = data.user;
    };

    return {
        user,
        loading,
        error,
        signUp,
        signIn,
        signOut,
        fetchUser,
    };
});

