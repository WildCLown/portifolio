<template>
  <v-app-bar app color="primary" dark>
    <v-layout row wrap class="d-flex align-center">
      <v-flex pl-5 xs4>
        <v-layout row wrap class="align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 d-inline-block"
            contain
            :src="require('../assets/icons/GT.png')"
            width="60"
          />
          <label class="primaryText--text text-h4 font-weight-bold">
            Gabriel Teixeira's Portifolio
          </label>
        </v-layout>
      </v-flex>
      <v-flex xs8>
        <v-layout row wrap text-right pr-5>
          <v-flex>
            <v-btn color="primary" large>
              <label class="primaryText--text text-h4 font-weight-bold">
                Home
              </label>
            </v-btn>
            <v-btn color="primary" large>
              <label class="primaryText--text text-h4 font-weight-bold">
                Resume
              </label>
            </v-btn>
            <v-btn color="primary" large>
              <label class="primaryText--text text-h4 font-weight-bold">
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
  name: "HeaderTest",
  data() {
    return {};
  },
};
</script>
