<template>
  <v-app>
    <header-teixa />
    <v-main>
      <personal-info />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </v-main>
    <footer-teixa />
  </v-app>
</template>

<script>
import HeaderTeixa from "./components/Header.vue";
import FooterTeixa from "./components/Footer.vue";
import PersonalInfo from "./components/PersonalInfo.vue";
export default {
  name: "App",

  components: {
    HeaderTeixa,
    FooterTeixa,
    PersonalInfo,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.v-application {
  font-family: $body-font-family, sans-serif !important;
  .text-h4 {
    font-family: $body-font-family !important;
  }
}
</style>