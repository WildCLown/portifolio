<template>
	<v-app-bar
		color="primary"
		scroll-behavior="hide"
	>
    <img
      width="60px"
      src="/GT.png"
    >
    <v-toolbar-title class="ml-2">
      Gabriel Teixeira's Portifolio
    </v-toolbar-title>

    <v-spacer/>
    <v-row>
      <v-col cols="3">
        <v-btn 
          size="x-large"
          block
          @click="toHome()"
        >
          Home
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn 
          size="x-large"
          block
          @click="toResume()"
        >
          Resume
        </v-btn>
      </v-col>
      <v-col cols="3">
        <projects-router/>
      </v-col>
      <v-col cols="3">
        <v-btn 
          size="x-large"
          block
          @click="toBottom()"
        >
          Contact Me
        </v-btn>
      </v-col>
    </v-row>
	</v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      resumeLink:
        "https://drive.google.com/file/d/1c1ICK6_TvqwG0s8UEqJkQ_m1gCvHUjT4/view?usp=sharing",
    };
  },
  methods: {
    toResume() {
      window.open(`https://drive.google.com/file/d/1fIuuBx19tzcLeH4ay-YfF4RYiutltRTB/view?usp=sharing`, '_blank');
    },
    toHome() {
      window.location.href = './';
    },
    toBottom() {
      window.scrollTo(
        { top: document.body.scrollHeight, behavior: 'smooth' }
      );
    }
  },
};
</script>