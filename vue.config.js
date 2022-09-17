const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  css: {
    sourceMap: true
  },
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: "/"
})
