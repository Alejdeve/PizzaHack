// src/plugins/webfontloader.js

import WebFont from 'webfontloader'; // Cambiado a 'import'

export const loadFonts = () => {
  WebFont.load({
    google: {
      families: ['Roboto:400,500,700'], // Agrega más familias de fuentes aquí si lo deseas
    },
  });
};