<template>
  <v-layout mt-4>
    <v-flex xs4> </v-flex>
    <v-flex
      xs7
      class="
        text-center
        blackText--text
        font-weight-black
        rounded-lg rounded-l-0
        pa-5
        border
      "
    >
      <span>
        {{ informationText }}
      </span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "PersonalInfo",
  data() {
    return {
      informationText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    };
  },
};
</script>
<style scoped>
.border {
  background-color: var(--v-primary-base);
  border: 6px solid var(--v-theme-blackText) !important;
}
</style>
