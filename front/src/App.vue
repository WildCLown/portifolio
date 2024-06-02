<template>
  <v-app>
    <mail-signature />
  </v-app>
</template>

<script>
import MailSignature from '@/components/projects/MailSignature.vue';
export default {
  name: "App",

  components: {
    MailSignature
  },
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