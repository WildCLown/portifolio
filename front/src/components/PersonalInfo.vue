<template>
  <v-layout ma-8 row wrap>
    <v-flex lg2 xs12 pr-2>
      <image-area class="justify-end" :class="(this.$vuetify.breakpoint.lgAndUp? 'justify-end' : 'justify-center')"/>
    </v-flex>
    <v-flex
      lg10
      xs12
      class="
        blackText--text
        font-weight-black
        rounded-lg
        pa-2
        border
        module-border-wrap
      "
    >
    <v-layout row wrap class="module" ref="informationFormated">
      <v-flex xs12>
        <p>
          {{ informationText }}
        </p>
        <p>
          <span style="color: #6CCDFD">
            BackEnd:
          </span>
          <span>
            {{ backEndStacks }}
          </span>
          <span style="color: #E9B86E; padding-left: 30px">
            FrontEnd:
          </span>
          <span>
            {{ frontEndStacks }}
          </span>
        </p>
        <p>
          {{ personalInfo }}
        </p>
        <p>
          <span style="color: #89D358">
            {{linkedinPerson}}
          </span>
          "{{ linkedinDescribe }}"
        </p>
      </v-flex>
    </v-layout>
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
      informationText: "Full Stack software engineer at Acqio",
      backEndStacks: "Kotlin & Java | Ruby | Node | Go.",
      frontEndStacks: "Vue & Javascript Vanilla",
      personalInfo: "I will not lie, I'm the kind of person who struggles to describe myself, so I'll let here one of my Linkedin recomendations:",
      linkedinPerson: "Vitor Sousa once said:",
      linkedinDescribe: "Gabriel was my colleague during our BSc CS course at UFPE, where he consistently demonstrated a leadership impetus in coordinating teams. His contagious enthusiasm not only facilitated team commitment but also contributed to our collective dedication to hard work on a daily basis. As we worked together at Acqio, I witnessed Gabriel further improve these skills. Notably, he excelled in simultaneously contributing to two different teams with distinct backgrounds, showcasing not only his leadership abilities but also his productivity in coding."
    };
  },
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
  width: 100%;
  height: 100%;
  background: #222;
  color: white;
  padding: 2rem;
}
</style>
