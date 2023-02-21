const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',

  transpileDependencies: true,
  // accept pdf files
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]'
      })
  },

});