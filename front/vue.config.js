const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    entry: "./src/main.js",
    devServer: {
        hot: true,
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000,
    },
  },
  publicPath: '',
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
