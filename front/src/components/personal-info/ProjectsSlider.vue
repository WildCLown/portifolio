<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 lg6>
      <v-card
        elevation="24"
        class="mx-auto"
      >
        <v-carousel
          :continuous="true"
          :show-arrows="true"
          hide-delimiters
        >
          <v-carousel-item
            v-for="(project, i) in projects"
            :key="i"
            delimiter-icon="mdi-square"
          >
            <v-sheet
              :color="project.textSide.backgroundColor"
              tile
              style="height: 100%;"
            >
              <v-layout raw wrap fill-height>
                <v-flex lg6 xs12 v-if="$vuetify.breakpoint.lgAndUp">
                  <v-layout 
                      row 
                      wrap
                      class="text-center"
                      fill-height
                      :style="{backgroundColor: project.imgSide.backgroundColor}"
                  >
                    <v-flex 
                      xs12
                      py-4
                      :style="{background: $vuetify.theme.themes.dark.primary}"
                      class="primaryText--text text-h6 font-weight-dark align-self-start"
                    >
                      {{project.projectName}}
                    </v-flex>
                    <v-flex 
                      xs12
                      pa-15
                      :style="{backgroundColor: project.imgSide.backgroundColor}"
                    >
                      <v-img
                        :src="project.imgSide.imageSrc"
                      />
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex 
                  lg6 xs12 
                >
                  <v-layout
                    row wrap
                    :class="cardSize.textSize"
                    :style="{color: project.textSide.textColor}"
                    class="font-weight-bold"
                  >
                    <v-flex 
                      xs12
                      :style="{background: $vuetify.theme.themes.dark.primary}"
                      class="primaryText--text text-h6 font-weight-dark align-self-start text-center py-2"
                      v-if="!$vuetify.breakpoint.lgAndUp"
                    >
                      {{project.projectName}}
                    </v-flex>
                    <v-flex xs12 py-5 px-15>
                      <p> {{ project.textSide.message }} </p>
                      <p> Local: {{ project.textSide.projectHosted}} </p>
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
    </v-flex>
  </v-layout>
</template>
<script>
  import cyberImage from "@/assets/projectsImg/CyberSource.svg"
  import stoolitLogo from "@/assets/projectsImg/Stoolit.png"
  import bezierCurves from "@/assets/projectsImg/bezierCurves.png"
  import ribbitCapital from "@/assets/projectsImg/ribbit.png"
  import accessLoans from "@/assets/projectsImg/projectSlider/accessLoansIcon.png"
  import acqioIcon from "@/assets/projectsImg/projectSlider/acqio.svg"
  export default {
    name: "ProjectsSlider",
    
    data() {
      return {
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
                "This project enabled a increase of transactions by over",
                "R$ 670000.00 per month in Acqio's operation."
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
                "that by receiving client personal information and concent,",
                "would verify data sent, collecting bank cashflow in order",
                "to analyse if the new user requesting loan is or not a good payer",
                "This project reduced operation costs by more than U$ 100000.00",
                "for SNBNY operations."
              ].join(" "),
              projectHosted: "Access Loans customer onboarding flow",
              buttonGoTo: null
            },
            imgSide: {
              backgroundColor: 'white',
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
        ]
      }
    },
    computed: {
      cardSize: {
        get: function() {
          return { 
            textSize: this.$vuetify.breakpoint.lgAndUp? 'text-h6' : 'subtitle-1'
          }
        }
      }
    },
    methods: {
      redirectPage(link){
        window.open(link, '_blank').focus()
      },
    },
  };
</script>
<style scoped>
  .hiddenScroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .hiddenScroll::-webkit-scrollbar {
    display: none;
  }
</style>
  