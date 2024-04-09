<template>
    <v-layout
      row
      wrap
      class="align-center justify-space-between"
      dark
      :style="{background: $vuetify.theme.themes.dark.primary, position: 'fixed', zIndex: 99999, width: '100%'}"
      py-1
    >
      <v-flex lg5 xs10>
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
      <v-flex lg5 v-if="this.$vuetify.breakpoint.lgAndUp">
        <v-layout row wrap text-right>
          <v-flex class="text-center">
            <v-btn 
              color="primary"
              large
              v-on:click="setProject(0)"
             >
              <label class="primaryText--text text-h4 font-weight-light">
                Home
              </label>
            </v-btn>
          </v-flex>
          <v-flex class="text-center">
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
            <projects-router 
              color="primary" 
              large
              @set-project="setProject"
            />
          </v-flex>
          <v-flex class="text-center">
            <v-btn color="primary" large>
              <label
                class="primaryText--text text-h4 font-weight-light"
                v-on:click="toBottom"
              >
                Contact me
              </label>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex v-else xs2>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon
                color="primaryText">
                mdi-format-list-bulleted-square
              </v-icon>
            </v-btn>
          </template>
          <v-list color="primary">
            <v-list-item class="justify-center">
              <v-btn
                v-on:click="setProject(0)"
                color="primary"
              >
                <label class="primaryText--text font-weight-light">
                  Home
                </label>
              </v-btn>
            </v-list-item>
            <v-list-item class="justify-center">
              <v-btn
                v-bind:href="resumeLink"
                target="_blank"
                color="primary"
              >
                <label class="primaryText--text font-weight-light">
                  Resume
                </label>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-flex>
                <projects-router 
                color="primary" 
                large d-flex
                @set-project="setProject"
                />
              </v-flex>
            </v-list-item>
            <v-list-item>
              <v-btn color="primary" large v-on:click="toBottom">
                <label
                  class="primaryText--text font-weight-light"
                >
                  Contact me
                </label>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
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
        "https://drive.google.com/file/d/1c1ICK6_TvqwG0s8UEqJkQ_m1gCvHUjT4/view?usp=sharing",
    };
  },
  methods: {
    toBottom() {
      window.scrollTo(
        { top: document.body.scrollHeight, behavior: 'smooth' }
      );
    },
    setProject(projectNumber) {
      this.$emit('set-project', projectNumber);
    }
  },
};
</script>
<style scoped>
  .v-btn--is-elevated {
    box-shadow: none;
  }
</style>