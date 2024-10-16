<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view id="background" class="pt-2"/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
<style scoped>
  #background {
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(53,19,255,1) 74%);
  }
</style>

