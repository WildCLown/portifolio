<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <header-teixa
        @set-project="setProject"
      />
    </v-app-bar>
    <v-layout class="mt-16"/>
    <v-layout v-if="definedProject == 0" row wrap>
      <v-flex xs12>
        <personal-info />
      </v-flex>
      <v-flex xs12 mb-5 mx-8>
        <projects-slider/>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex xs12 v-if="definedProject == 1">
        <bezier-curves/>
      </v-flex>
      <v-flex xs7 v-if="definedProject == 2">
        <mail-signature/>
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
    definedProject: 0
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