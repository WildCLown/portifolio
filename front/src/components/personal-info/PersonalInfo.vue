<template>
  <v-layout row wrap>
    <v-flex 
      lg3 
      xs12
      :class="{'pb-3': !$vuetify.breakpoint.lgAndUp,'pr-2' : $vuetify.breakpoint.lgAndUp}"
    >
      <image-area  
        :class="{'justify-center': !$vuetify.breakpoint.lgAndUp,'justify-end' : $vuetify.breakpoint.lgAndUp}"
      />
    </v-flex>
    <v-flex
      lg9
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
    <v-layout
      row wrap
      pa-6
      class="module"
      fill-height
      ref="informationFormated" 
      justify-start
    >
      <v-flex xs12 pb-2>
        {{ informationText }}
      </v-flex>
      <v-flex xs12 style="color: #6CCDFD">
        BackEnd:
      </v-flex>
      <v-flex xs12 pb-2>
        {{ backEndStacks }}
      </v-flex>
      <v-flex xs12 style="color: #E9B86E">
        FrontEnd:
      </v-flex>
      <v-flex xs12 pb-2>
        {{ frontEndStacks }}
      </v-flex>
      <v-flex xs12 pb-2>
        {{ personalInfo }}
      </v-flex>
      <v-flex xs12 style="color: #89D358">
        {{ linkedinPerson }}
      </v-flex>
      <v-flex xs12>
        "{{ linkedinDescribe }}"
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
    background: #222;
    color: white;
  }
</style>
