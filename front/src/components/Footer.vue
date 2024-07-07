<template>
  <v-footer
    color="primary"
    class="text-center d-flex flex-column"
  >
      <v-row>
        <v-col
          cols="4"
          v-for="social in socials"
          :key="social"
        >
          <v-btn
            :prepend-icon="social.icon"
            @click="openLink(social.link)"
            class="mx-4"
            variant="text"
            size="x-large"
            block
          >
            {{social.text}}
          </v-btn>
        </v-col>
      </v-row>
    <v-divider></v-divider>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      socials: [
        {
          icon: 'mdi-linkedin',
          text: 'LinkedIn',
          link: 'https://www.linkedin.com/in/gabrielteixeirasoares/'
        },
        {
          icon: 'mdi-github',
          text: 'GitHub',
          link: 'https://github.com/WildCLown'
        },
        {
          icon: 'mdi-twitch',
          text: 'Twitch',
          link: 'https://www.twitch.tv/wildclownbr'
        }
      ],
    }),
    methods: {
      openLink(link) {
        window.open(link, '_blank');
      }
    }
  }
</script>