module.exports = {
  outputDir: './build',
  css: {
    extract: false
  },

  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
