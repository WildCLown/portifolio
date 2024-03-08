<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <header-teixa/>
    </v-app-bar>
    <v-layout class="mt-16"/>
    <v-layout v-if="isHomePage" row wrap>
      <v-flex xs12>
        <personal-info />
      </v-flex>
      <v-flex xs12>
        <projects-slider/>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="isBazierProject">
      <v-flex xs12>
        <bezier-curves/>
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
import BezierCurves from './components/projects-html/BezierCurves.vue';
export default {
  name: "App",

  components: {
    HeaderTeixa,
    FooterTeixa,
    PersonalInfo,
    ProjectsSlider,
    BezierCurves,
  },

  data: () => ({
    isHomePage: true,
    isBazierProject: false
  }),
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