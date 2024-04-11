<template>
  <v-layout 
    row 
    wrap 
    class="ma5 clickable" 
    v-on:click="redirectPage(objectName['link'])" 
    v-on:mouseover="isHovered = true" 
    v-on:mouseleave="isHovered = false"
  >
    <v-flex xs4 :class="imageClass">
      <v-img
        :src="images[objectName['source']]"
      />
      
    </v-flex>
    <v-flex xs8 class="align-center align-self-center">
      <span>
        {{ objectName["source"] }}
      </span>
    </v-flex>
  </v-layout>
</template>

<script>
import instagram from "@/assets/icons/social/instagram.svg"
import github from "@/assets/icons/social/github.svg"
import twitch from "@/assets/icons/social/twitch.svg"
import linkedin from "@/assets/icons/social/linkedin.svg"

export default {
  name: "FooterImage",
  data() {
    return {
      isHovered: false,
      images: {
        "Insta" : instagram,
        "GitHub": github,
        "Twitch": twitch,
        "Linkedin": linkedin
      }
    };
  },
  computed: {
    imageClass: function() {
      return this.isHovered? "px-1 my-1" : "px-2 my-2"
    }
  },
  methods: {
    redirectPage(link){
      window.open(link, '_blank').focus()
    }
  },
  props: {
    objectName: {
      type: Object,
      default: () => {
        return { 
          source: "pei",
          link: "pow"
          };
      },
    }
  },
};
</script>
<style scoped>
  .clickable{
    cursor: pointer;
  }
</style>
