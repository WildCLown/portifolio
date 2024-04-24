<template>
  <v-app>
    <v-layout>
      <v-flex xs12>
        <header-teixa
          @set-project="setProject"
        />
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center align-center mt-12>
      <v-flex xs12 v-if="definedProject == project['portifolio']">
        <v-layout row wrap>
          <v-flex xs12 py-8 px-8>
            <personal-info/>
          </v-flex>
          <v-flex xs12 pb-8 px-8>
            <projects-slider/>
          </v-flex>
          <v-flex xs12 pb-8 px-8>
            <mail-me/>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 v-if="definedProject == project['bezierCurves']">
        <bezier-curves />
      </v-flex>
      <v-flex xs12 v-if="definedProject == project['mailSignature']">
        <mail-signature />
      </v-flex>
    </v-layout>
    <footer-teixa />
  </v-app>
</template>

<script>
import HeaderTeixa from "@/components/header/Header.vue";
import FooterTeixa from "@/components/footer/Footer.vue";
import PersonalInfo from "@/components/personal-info/PersonalInfo.vue";
import ProjectsSlider from '@/components/personal-info/ProjectsSlider.vue';
import MailMe from '@/components/personal-info/MailMe.vue';
import BezierCurves from '@/components/projects/BezierCurves.vue';
import MailSignature from '@/components/projects/MailSignature.vue';
export default {
  name: "App",

  components: {
    HeaderTeixa,
    FooterTeixa,
    PersonalInfo,
    ProjectsSlider,
    BezierCurves,
    MailSignature,
    MailMe
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