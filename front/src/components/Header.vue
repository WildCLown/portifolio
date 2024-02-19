<template>
    <v-layout row wrap class="align-center" >
      <v-flex lg5 xs11>
        <v-layout row wrap class="align-center">
          <v-flex lg1 xs2 class="align-center">
            <v-img
              class="mr-2"
              contain
              style="width: 80%"
              :src="require('@/assets/icons/GT.png')"
            />
          </v-flex>
          <v-flex xs10>
            <label class="primaryText--text text-h4 font-weight-light">
            {{
              this.$vuetify.breakpoint.lgAndUp
                ? "Gabriel Teixeira's Portifolio"
                : "Portifolio"
            }}
          </label>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex lg7 v-if="this.$vuetify.breakpoint.lgAndUp">
        <v-layout row wrap text-right pr-5>
          <v-flex>
            <v-btn color="primary" large>
              <label class="primaryText--text text-h4 font-weight-light">
                Home
              </label>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn
              color="primary"
              large
              v-bind:href="resumeLink"
              target="_blank"
            >
              <label class="primaryText--text text-h4 font-weight-light">
                Resume
              </label>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn color="primary" large>
              <label
                class="primaryText--text text-h4 font-weight-light"
                v-on:click="toBottom"
              >
                Contact me
              </label>
            </v-btn>
          </v-flex>
          <v-flex>
            <projects-router color="primary" large d-flex/>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex v-else xs1>
        B
      </v-flex>
    </v-layout>
</template>

<script>
import ProjectsRouter from "@/components/ProjectsRouter.vue";
export default {
  name: "HeaderTeixa",
  components: {
    ProjectsRouter
  },
  data() {
    return {
      resumeLink:
        "https://docs.google.com/document/d/17EynYhchMHIT1iBpN1ZeJMSKubLUtcaO/edit?usp=sharing&ouid=102972674160742966050&rtpof=true&sd=true",
    };
  },
  methods: {
    toBottom() {
      window.scrollTo(
        0,
        document.body.scrollHeight || document.documentElement.scrollHeight
      );
    },
    openBurguer() {
      
    }
  },
};
</script>
<style scoped>
  .v-btn--is-elevated {
    box-shadow: none;
  }
</style>