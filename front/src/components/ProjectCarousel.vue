<template>
  <v-row justify-center no-gutters>
    <v-col cols="12">
      <v-carousel 
        hide-delimiters
        dark
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right"
        height="auto"
        class="testRound"
      >
        <v-carousel-item
          v-for="(project,i) in projects"
          :key="i"
          cover
        >
          <v-row 
            justify-center 
            no-gutters 
            :class="cardSize.textSize"
            class="font-weight-bold"
            rounded-lg
          >
            <v-col
              cols="12"
              class="bg-primary py-3"
            >
              <p class="text-center">
                {{project.projectName}}
              </p>
            </v-col>
            <v-col
              v-if="mdAndUp"
              :style="{backgroundColor: project.imgSide.backgroundColor, height: cardHeight}"
              class="d-flex justify-center pa-16"
            >
              <v-img
              :src="project.imgSide.imageSrc">
              </v-img>
            </v-col>
            <v-col
              :cols="mdAndUp ? 6 : 12"
              :style="{
                height: cardHeight,
                color: project.textSide.textColor,
                background: project.textSide.backgroundColor
              }"
              class="d-flex justify-center pa-16 text-h5"

            >
              <v-row>
                <v-col cols="12">
                  <p>
                    {{project.textSide.message}}
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex justify-center" v-if="project.textSide.buttonGoTo != null">
                  <v-btn
                    color="primary"
                    class="primaryText--text text-h6 font-weight-bold"
                    target="_blank"
                    v-bind:href="project.textSide.buttonGoTo"
                  >
                    Check Project
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>
<script setup>
  import { useDisplay } from 'vuetify'
  const { mdAndUp } = useDisplay()
</script>
<script>
  import cyberImage from "@/assets/projectsImg/CyberSource.svg"
  import stoolitLogo from "@/assets/projectsImg/Stoolit.png"
  import bezierCurves from "@/assets/projectsImg/bezierCurves.png"
  import ribbitCapital from "@/assets/projectsImg/ribbit.png"
  import accessLoans from "@/assets/projectsImg/accessLoansIcon.png"
  import acqioIcon from "@/assets/projectsImg/acqio.svg"

  export default {
    data () {
      return {
        cardHeight: "500px",
        projects: [
          {
            projectName: 'Stoolit',
            textSide: {
              backgroundColor: '#1E6F50',
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
              backgroundColor: '#063f94',
              imageSrc: stoolitLogo
            }
          },
          {
            projectName: 'CyberSource 3DS',
            textSide: {
              backgroundColor: '#202A44',
              textColor: "white",
              message: [
                "Three-Domain Secure is a protocol to level-up security",
                "in online transaction aiming to reduce frauds and",
                "therefore payment reversals.",
                "In this project was able to prove leadership skills",
                "and end to end architecture development using Kotlin.",
                "This project reduced transactions reversal by over",
                "50% in our first customers."
              ].join(" "),
              projectHosted: "Acqio's Internal system",
              buttonGoTo: null
            },
            imgSide: {
              backgroundColor: 'grey',
              imageSrc: cyberImage
            }
          },
          {
            projectName: 'Ribbit API Integration',
            textSide: {
              backgroundColor: '#1FC676',
              textColor: "#000000",
              message: [
                "Now called Validifi, Ribbit integration was Access Loans project",
                "that by receiving client personal information and concent through open banking funcionality,",
                "would verify data sent, collecting bank cashflow in order",
                "to analyse if the onboarding user requesting loan is or not a good payer",
                "This project reduced in about 25% requests cost",
                "for SNBNY operations."
              ].join(" "),
              projectHosted: "Access Loans customer onboarding flow",
              buttonGoTo: null
            },
            imgSide: {
              backgroundColor: '#FFFFFF',
              imageSrc: ribbitCapital
            }
          },
          {
            projectName: 'Access Loans Make a Payment',
            textSide: {
              backgroundColor: '#2F549E',
              textColor: "#E0E0E0",
              message: [
                "Design and created Access Loans Backend system to receive and",
                "process payments for ACH transactions, the system would receive",
                "internal payment requests, create ACH Paymment data which would be",
                "inserted in a queue to be processed by a third party system.",
              ].join(" "),
              projectHosted: "Access Loans customer loan details",
              buttonGoTo: null
            },
            imgSide: {
              backgroundColor: '#B2EBF2',
              imageSrc: accessLoans
            }
          },
          {
            projectName: 'Acqio Franchisee portal',
            textSide: {
              backgroundColor: '#333333',
              textColor: "#D3D3D3",
              message: [
                "Along with Pricing team, developed routes that would aggregate data",
                "and return time sensitive data in order to allow franchisee to",
                "keep up with their lojits sales, and also to allow them to",
                "know their commission and receives for given payment plans"
              ].join(" "),
              projectHosted: "Acqio Franchisee portal",
              buttonGoTo: null
            },
            imgSide: {
              backgroundColor: '#D3D3D3',
              imageSrc: acqioIcon
            }
          },
          {
            projectName: 'Bezier Curves',
            textSide: {
              backgroundColor: '#FF9B4E',
              textColor: "#000000",
              message: [
                "Bezier Curves was a challenging project for college discipline",
                "Graphic Processing, which purpose was create a tool that was able",
                "to create bezier curves according to given ancor points, and giving",
                "the number of interations that the curve may have."
              ].join(" "),
              projectHosted: "Here, go to Projects - Bezier Curves using Desktop",
              buttonGoTo: null
            },
            imgSide: {
              backgroundColor: 'white',
              imageSrc: bezierCurves
            }
          }
        ],
      }
    },
    computed: {
      isMobile() {
        return true;
      },
      cardSize: {
        get: function() {
          return { 
            textSize: !this.$vuetify.display.mobile? 'text-h6' : 'subtitle-1'
          }
        }
      }
    }
  }
</script>
<style scoped>
  .testRound {
    border-radius: 8px;;
  }
</style>