<template>
  <v-layout>
    <v-flex xs12 class="module-border-wrap">
      <v-img
        class="xs-12 roundedImg"
        contain
        :src="require('@/assets/Teixa.jpg')"
      />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ImageArea",
};
</script>
<style scoped>
.border {
  background-color: var(--v-primary-base);
  border: 6px solid var(--v-theme-blackText) !important;
}
.roundedImg {
  border-radius: 10px 30px;
}
.module-border-wrap {
  position: relative;
  background: linear-gradient(to right, #a01620, #041350);
  padding: 3px;
  border-radius: 10px 30px;
}
</style>
