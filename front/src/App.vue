<template>
  <v-app>
    <header-test />

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HeaderTest from "./components/HeaderTest.vue";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
    HeaderTest,
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