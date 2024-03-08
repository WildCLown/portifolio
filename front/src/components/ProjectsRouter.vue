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
            <label class="primaryText--text text-h4 font-weight-light">
                Projects
            </label>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  import { mergeProps } from 'vue'

  export default {
    name: "ProjectRouter",
    data: () => ({
      items: [
        { title: 'Bezier Curve' },
        { title: 'Click Me2' },
        { title: 'Click Me3' },
        { title: 'Click Me4' },
      ],
    }),
    props: {

    },
    methods: {
      mergeProps,
    },
  }
</script>