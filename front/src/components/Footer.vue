<template>
  <v-footer color="primary" dark>
    <v-layout row wrap class="d-flex justify-center">
      <v-flex
        class="justify-center primaryText--text text-h4 font-weight-light"
        xs5
      >
        <v-layout row wrap class="d-flex justify-space-between">
          <v-flex xs3 v-for="(social, idx) in socials" :key="idx">
            <footer-images :objectName="social" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import FooterImages from "./FooterImages.vue";
export default {
  name: "FooterTeixa",
  components: {
    FooterImages,
  },
  data() {
    return {
      socials: [
        {
          link: "Insta",
          imageSrc: "",
        },
        {
          link: "GitHub",
          imageSrc: "",
        },
        {
          link: "Twitch",
          imageSrc: "",
        },
      ],
    };
  },
};
</script>
