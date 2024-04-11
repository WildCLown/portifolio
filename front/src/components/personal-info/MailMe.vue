<template>
  <v-layout row wrap justify-center>
    <v-flex xs12>
        <span>
            Liked my background? Willing me in your project?
        </span>
    </v-flex>
    <v-flex xs12 class="module-border-wrap">
      <v-btn  style="color: white" 
        v-bind:href="mailHref">
        Enviar email
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "MailMe",
  data: () => ({
    mailHref: [
        "mailto:gtsa.wildclown@gmail.com?",
        "subject=Contact through portifolio&",
        "body=Hello Gabriel! I've just seen your portifolio!"
    ].join("")
  }),
};
</script>
<style scoped>

</style>
