<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <header-teixa
        @set-project="setProject"
      />
    </v-app-bar>
    <v-layout row wrap justify-center align-center mt-12>
      <v-flex xs12 v-show="definedProject == project['portifolio']">
        <personal-info/>
        <projects-slider/>
      </v-flex>
      <v-flex xs12 v-show="definedProject == project['bezierCurves']">
        <bezier-curves />
      </v-flex>
      <v-flex xs7 v-show="definedProject == project['mailSignature']">
        <mail-signature />
      </v-flex>
    </v-layout>
    <footer-teixa />
  </v-app>
</template>

<script>
import HeaderTeixa from "@/components/Header.vue";
import FooterTeixa from "@/components/Footer.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";
import ProjectsSlider from '@/components/projects-slider/ProjectsSlider.vue';
import BezierCurves from '@/components/projects-html/BezierCurves.vue';
import MailSignature from '@/components/projects-html/MailSignature.vue';
export default {
  name: "App",

  components: {
    HeaderTeixa,
    FooterTeixa,
    PersonalInfo,
    ProjectsSlider,
    BezierCurves,
    MailSignature,
  },

  data: () => ({
    definedProject: 0,
    project: {
      portifolio: 0,
      bezierCurves: 1,
      mailSignature: 2
    }
  }),
  methods: {
    setProject(projectNumber){
      this.definedProject = projectNumber
    }
  }
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