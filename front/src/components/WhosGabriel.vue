<template>
    <v-row justify-center no-gutters class="module">
      <v-col cols="4">
        <v-img
          :src="profilePhoto">
        </v-img>
      </v-col>
      <v-col cols="8" class="pa-4">
        <v-row>
          <v-col cols="12"
            v-for="info in informations"
            :key="info.text"
          >
            <p v-if="info.title != '' ">
              {{info.title}}
            </p>
            <p>
              {{info.text}}
            </p>
          </v-col>
          <v-col cols="12">
            <p>
              Also, take a look on my <a target="_blank" v-bind:href="referenceSection"> LinkedIn references</a>!
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </template>
  <script>
    import gabrielImage from "@/assets/MainImage.jpg"
    export default {
      data () {
        return {
            informations: [
              {title:"", text:"Full Stack software engineer at Acqio"},
              {title:"BackEnd", text:"Kotlin & Java | Ruby | Node | Go."},
              {title:"FrontEnd", text:"Vue & HTML | Javascript Vanilla"},
              {title:"About me", text:"An enthusiast of software development experienced in Fintech field, I'm always looking for new challenges and opportunities to learn and grow"},
            ],
            referenceSection: "https://www.linkedin.com/in/gabrielteixeirasoares/details/recommendations",
            profilePhoto: gabrielImage
        };
      },
    }
  </script>
  <style scoped>
  .module {
    background: #222;
    color: white;
  }
  </style>