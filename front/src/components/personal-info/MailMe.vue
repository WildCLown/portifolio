<template>
  <v-layout 
    row wrap 
    justify-center 
    text-center
  >
    <v-flex 
      lg1 xs12
      :class="{'pb-3': !$vuetify.breakpoint.lgAndUp,'pr-2' : $vuetify.breakpoint.lgAndUp}"
    >
      <v-layout row wrap justify-center>
        <v-flex lg12 xs8 class="module-border-wrap">
          <v-img
            contain
            :src="require('@/assets/monke/monkeBook.png')"
          />
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex lg5 xs12
      class="
        blackText--text
        font-weight-black
        rounded-lg
        border
        module-border-wrap
      "
    >
      <v-layout row wrap class="module pa-3" fill-height>
        <v-flex xs12 pb-2>
          Liked my background?
        </v-flex>
        <v-flex xs12 pb-2>
          Willing me in your project?
        </v-flex>
        <v-flex xs12 pb-2>
          Try mailing me! but it's easier through LinkedIn
        </v-flex>
        <v-flex xs12>
          <v-btn  
            color="primary"
            class="primaryText--text text-h6 font-weight-bold"
            v-bind:href="mailHref">
            Enviar email
          </v-btn>
        </v-flex>
      </v-layout>
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
  .module-border-wrap {
    position: relative;
    background: linear-gradient(to left, #a01620, #041350);
    border-radius: 10px 30px;
    padding: 3px;
  }
  .module {
    background: #222;
    color: white;
  }
</style>

