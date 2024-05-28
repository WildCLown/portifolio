import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#000d41',
        secondary: '#e9c227',
        blackText: '#212121',
        primaryText: '#06afab',
        textBoard: '#222',
        signaturePrimary: "#1C6586",
        signaturePrimaryText: "#181C1F"
      },
    },
  },
});
