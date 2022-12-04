<template>
  <v-layout>
    <hello-world />
  </v-layout>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",

  components: { HelloWorld },

  data: () => ({
    //
  }),
};
</script>
