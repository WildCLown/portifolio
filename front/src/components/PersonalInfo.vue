<template>
  <v-row class="justify-center">
    <v-col :cols="isDesktop">
      <WhosGabriel/>
    </v-col>
    <v-col :cols="isDesktop">
      <ProjectCarousel/>
    </v-col>
    <v-col :cols="isDesktop">
      <ContactMe/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    isDesktop() {
      return !this.$vuetify.display.mobile? "8" : "11";
    },
  },
};
</script>

