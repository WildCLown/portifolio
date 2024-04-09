<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          large
          v-bind="attrs"
          v-on="on"
        >
            <label :class=projecClassProps>
                Projects
            </label>
        </v-btn>
      </template>
      <v-list color="primary">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          class="justify-center"
        >
          <v-btn
            color="primary"
            class="clickable primaryText--text font-weight-light"
            v-on:click="setProject(index+1)"
            :disabled="isProjectPermited(item.desktopOnly)"
          >
            {{ item.title }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  export default {
    name: "ProjectRouter",
    data: () => ({
      items: [
        { 
          title: 'Bezier Curve', 
          desktopOnly: true
        },
        { 
          title: 'Mail Signature', 
          desktopOnly: true 
        },
      ],
    }),
    methods: {
      setProject(projectNumber) {
        this.$emit('set-project', projectNumber);
      },
      isProjectPermited(project) {
        return !this.$vuetify.breakpoint.lgAndUp && project
      }
    },
    computed: {
      projecClassProps: function() {
        let propClass = ['primaryText--text','font-weight-light']
        if(this.$vuetify.breakpoint.lgAndUp){
          propClass.push('text-h4')
        }
        return propClass.join(' ')
      },
    }
  }
</script>
<style scoped>
  .clickable{
    cursor: pointer;
  }
  .v-btn--is-elevated {
    box-shadow: none;
  }
</style>