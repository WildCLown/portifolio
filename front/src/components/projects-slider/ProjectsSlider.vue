<template>
    <v-card
      class="mx-auto"
      elevation="24"
      max-width="50%"
    >
      <v-carousel
        :continuous="true"
        :show-arrows="true"
        hide-delimiters
        class="justify-center"
      >
        <v-carousel-item
          v-for="(project, i) in projects"
          :key="i"
          delimiter-icon="mdi-square"
        >
          <v-sheet
            :color="project.textSide.backgroundColor"
            tile
            style="height: 100%"
          >
            <v-layout raw wrap>
              <v-flex xs6>
                <v-card outlined style="border: none; border-radius: 0; height: 100%">
                  <v-card-title class="text-h6 justify-center" style="border-radius: 0;">
                    {{project.projectName}}
                  </v-card-title>
                  <v-card-text style="height: 100%" :style="project.imgSide.backgroundColor">
                    <v-layout row wrap align-center style="height: 100%">
                      <v-flex pa-6 mb-15>
                        <v-img
                          :src="project.imgSide.imageSrc"
                        />
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex 
                xs6 
                height="100%" 
                pa-4>
                <v-layout
                  row wrap
                  class="text-h5"
                  pa-5>
                  <v-flex mb-10 xs12>
                    {{ project.textSide.message }}
                  </v-flex>
                  <v-flex xs12 mb-10>
                    <p>
                      Local: {{ project.textSide.projectHosted}}
                    </p>
                  </v-flex>
                  <v-flex v-if="project.textSide.buttonGoTo != null" class="text-center" xs12>
                    <v-btn v-on:click="redirectPage(project.textSide.buttonGoTo)">
                      Preview Project
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </template>
  
  <script>
  import cyberImage from "@/assets/projectsImg/CyberSource.svg"
  import stoolitLogo from "@/assets/projectsImg/Stoolit.png"

  export default {
    name: "ProjectsSlider",
    
    data() {
      return {
        projects: [
          {
            projectName: 'Stoolit',
            textSide: {
              backgroundColor: 'blue',
              textColor: "white",
              message: [
                "Stoolit was a game developed which intends to provide user",
                "an experience not only in main screen view, but also",
                "in it's controller, providing mini-games and challenges when",
                "interacting with objects through the gameplay.",
                "An Unity project with Air console developed along with college friends."
              ].join(" "),
              projectHosted: "Private project",
              buttonGoTo: "https://www.youtube.com/watch?v=ePslfyGNGEk&t"
            },
            imgSide: {
              backgroundColor: 'background-color: grey;',
              imageSrc: stoolitLogo
            }
          },
          {
            projectName: 'CyberSource 3DS',
            textSide: {
              backgroundColor: 'green',
              textColor: "white",
              message: [
                "Three-Domain Secure is a protocol to level-up security",
                "in online transaction aiming to reduce frauds and",
                "therefore payment reversals.",
                "In this project was able to prove leadership skills",
                "and end to end architecture development using Kotlin."
              ].join(" "),
              projectHosted: "Acqio's Internal system",
              buttonGoTo: null
            },
            imgSide: {
              backgroundColor: 'background-color: grey;',
              imageSrc: cyberImage
            }
          },
          {
            projectName: 'Bezier Curves',
            textSide: {
              backgroundColor: 'orange',
              textColor: "white",
              message: [
                "Bezier Curves was a challenging project for college discipline",
                "Graphic Processing, which purpose was create a tool that was able",
                "to create bezier curves according to given ancor points, and giving",
                "the number of interations that the curve may have."
              ].join(" "),
              projectHosted: "Here, go to Projects - Bezier Curves",
              buttonGoTo: null
            },
            imgSide: {
              backgroundColor: 'background-color: grey;',
              imageSrc: stoolitLogo
            }
          },
        ]
      }
    },
    methods: {
    redirectPage(link){
      window.open(link, '_blank').focus()
    }
  },
  };
  </script>
  