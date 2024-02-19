const { defineConfig } = require('@vue/cli-service')
Vue.config.devtools = true
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData:
        `@import "@/assets/scss/main.scss";`
      }
    }
  }
})
