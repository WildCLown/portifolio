<template>
  <v-layout ma-8>
    <v-flex lg2 pr-2>
      <image-area class="justify-end"/>
    </v-flex>
    <v-flex
      lg10
      class="
        text-center
        blackText--text
        font-weight-black
        rounded-lg rounded-l-0
        pa-5
        border
        module-border-wrap
      "
    >
    <div class="module" ref="informationFormated">
      <span>
        {{ informationText }}
      </span>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>
import ImageArea from "@/components/personal-info/ImageArea.vue";
export default {
  name: "PersonalInfo",
  components: {
    ImageArea,
  },
  data() {
    return {
      informationText:
        "Heya Full Stack software engineer",
    };
  },
};
</script>
<style scoped>
.module-border-wrap {
  position: relative;
  background: linear-gradient(to left, #a01620, #041350);
  border-radius: 10px 30px;
}
.module {
  background: #222;
  color: white;
  padding: 2rem;
}
</style>
