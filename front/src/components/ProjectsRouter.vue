<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          block
          dark
          size="x-large"
          :class="projecClassProps"
        >
          Projects
        </v-btn>
      </template>
      <v-list color="primary">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          class="justify-center"
        >
          <v-btn
            block
            color="primary"
            class="clickable primaryText--text font-weight-bold"
            size="x-large"
            @click="setProject(item.projectPage)"
            :disabled="isMobileDisabled(item.desktopOnly)"
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
  data() {
    return {
      items: [
        { 
          title: 'Bezier Curve',
          projectPage: 'BezierCurve',
          desktopOnly: true
        },
        { 
          title: 'Mail Signature',
          projectPage: 'MailSignature',
          desktopOnly: false
        },
      ],
    };
  },
  computed: {
    isDesktop() {
      return !this.$vuetify.display.mobile;
    },
  },
  methods: {
    setProject(project) {
      window.location.href = `/${project}`;
    },
    isMobileDisabled(projectRendered){
      if(this.$vuetify.display.mobile){
        return projectRendered
      }
      return false
    }
  },
};
</script>
