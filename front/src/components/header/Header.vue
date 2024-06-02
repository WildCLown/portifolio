<template>
    <v-layout
      row
      wrap
      class="align-center justify-space-between"
      dark
      :style="{background: $vuetify.theme.themes.dark.primary, position: 'fixed', zIndex: 99999, width: '100%'}"
    >
      <v-flex lg4 xs10 py-1>
        <v-layout row wrap class="align-center">
          <v-flex px-2 lg1 xs2 class="align-center">
            <v-img
              contain
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
      <v-flex lg6 v-if="this.$vuetify.breakpoint.lgAndUp">
        <v-layout row wrap text-right>
          <v-flex class="text-center" xs3>
            <v-btn
              block 
              color="primary"
              large
              v-on:click="setProject(0)"
              class="primaryText--text text-h6 font-weight-bold"
             >
              Home
            </v-btn>
          </v-flex>
          <v-flex class="text-center" xs3>
            <v-btn
              block
              color="primary"
              large
              v-bind:href="resumeLink"
              class="primaryText--text text-h6 font-weight-bold"
              target="_blank"
            >
              Resume
            </v-btn>
          </v-flex>
          <v-flex xs3>
            <projects-router 
              block
              color="primary" 
              large
              @set-project="setProject"
            />
          </v-flex>
          <v-flex class="text-center" xs3>
            <v-btn
              block 
              color="primary"
              large
              class="primaryText--text text-h6 font-weight-bold"
              v-on:click="toBottom"
            >
              Contact me
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
                block
                v-on:click="setProject(0)"
                color="primary"
                class="primaryText--text font-weight-light"
              >
                Home
              </v-btn>
            </v-list-item>
            <v-list-item class="justify-center">
              <v-btn
                block
                v-bind:href="resumeLink"
                target="_blank"
                color="primary"
                class="primaryText--text font-weight-light"
              >
                Resume
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
              <v-btn 
                block 
                class="primaryText--text font-weight-light"
                color="primary" 
                large
                v-on:click="toBottom"
              >
                Contact me
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-flex>
    </v-layout>
</template>

<script>
import ProjectsRouter from "@/components/header/ProjectsRouter.vue";
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