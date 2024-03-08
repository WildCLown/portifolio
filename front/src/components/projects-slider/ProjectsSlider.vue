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
          >
            <v-layout raw wrap>
              <v-flex xs6>
                <v-card outlined style="border: none; border-radius: 0;">
                  <v-card-title class="text-h6 justify-center" style="border-radius: 0;">
                    {{project.projectName}}
                  </v-card-title>
                  <v-img
                  :src="project.imageSrc"
                  cover
                  >
                    
                  </v-img>
                </v-card>
              </v-flex>
              <v-flex 
                xs6 
                height="100%" 
                pa-4
                class="text-h5 text-center">
                <span>
                  {{ project.textSide.message }}
                </span>
                <p></p>
              </v-flex>
            </v-layout>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </template>
  
  <script>
  import cyberImage from "@/assets/projectsImg/CyberSource.png"
  export default {
    name: "ProjectsSlider",
    
    data() {
      return {
        projects: [
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
              projectHosted: "Acqio",
              buttonGoTo: "https://google.com.br"
            },
            imageSrc: cyberImage
          },
          {
            projectName: 'Stoolit',
            textSide: {
              backgroundColor: 'blue',
              textColor: "white",
              message: "message text",
              buttonGoTo: "https://google.com.br"
            },
            imageSrc: "@/assets/projectsImg/CyberSource.png"
          },
        ]
      }
    },
  };
  </script>
  