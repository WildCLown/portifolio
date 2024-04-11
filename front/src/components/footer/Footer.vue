<template>
  <v-footer color="primary" dark>
    <v-layout row wrap class="d-flex justify-center">
      <v-flex
        class="justify-center primaryText--text text-h4 font-weight-light"
        xs5
      >
        <v-layout row wrap class="d-flex justify-space-between">
          <v-flex xs12 md3 v-for="(social, idx) in socials" :key="idx" class="pa-ma-4">
            <footer-images :objectName="social" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import FooterImages from "@/components/footer/FooterImages.vue";
export default {
  name: "FooterTeixa",
  components: {
    FooterImages,
  },
  data() {
    return {
      socials: [
        {
          source: "Linkedin",
          link: "https://www.linkedin.com/in/gabrielteixeirasoares/"
        },
        {
          source: "GitHub",
          link: "https://github.com/WildCLown"
        },
        {
          source: "Twitch",
          link: "https://twitch.tv/wildclownbr"
        },
      ],
    };
  },
};
</script>
