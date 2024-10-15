
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importar estilos de Vuetify
import { loadFonts } from './webfontloader'; // Si estás usando fuentes personalizadas

loadFonts(); // Cargar fuentes

export default createVuetify({
  // Aquí puedes añadir configuraciones adicionales
});
