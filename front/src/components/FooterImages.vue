<template>
  <v-layout>
    <v-flex class="text-center">
      <span>
        {{ objectName["link"] }}
      </span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "FooterImage",
  data() {
    return {};
  },
  props: {
    objectName: {
      type: Object,
      default: () => {
        return { link: "pei" };
      },
    },
  },
  methods: {},
};
</script>
