<template>
  <v-row justify-center no-gutters>
    <v-col 
      cols="12"
      class="
        blackText--text
        font-weight-black
        rounded-lg
        text-center
        justify-center
        module
        pa-3
      "
    >
      <v-row
        justify-center
      >
        <v-col cols="12">
          <p>
            Liked my background and are willing me in your team?
          </p>
          <p>
            Try mailing me! I'm always open to interesting opportunities.
          </p>
          <p>
            Althought, it's easier to contact me through LinkedIn.
          </p>
        </v-col>
        <v-col cols="12">
          <v-btn  
            color="primary"
            class="primaryText--text text-h6 font-weight-bold"
            target="_blank"
            v-bind:href="mailHref">
            Send Email
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        mailHref: [
          "mailto:gtsa.wildclown@gmail.com?",
          "subject=Contact through portifolio&",
          "body=Hello Gabriel! I've just seen your portifolio!"
        ].join("")
      }
    },
  }
</script>
<style scoped>
  .module {
    background: #222;
    color: white;
  }
</style>