const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  outputDir: 'target/dist',
  assetsDir: 'static'
}
