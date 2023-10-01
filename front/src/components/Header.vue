<template>
  <v-app-bar app color="primary" dark>
    <v-layout row wrap class="d-flex align-center">
      <v-flex pl-5 lg5 xs11>
        <v-layout row wrap class="align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 d-inline-block"
            contain
            :src="require('../assets/icons/GT.png')"
            width="60"
          />
          <label class="primaryText--text text-h4 font-weight-light">
            {{
              this.$vuetify.breakpoint.lgAndUp
                ? "Gabriel Teixeira's Portifolio"
                : "Portifolio"
            }}
          </label>
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
    </v-layout>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderTeixa",
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
  },
};
</script>
