const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vuejs-projet-web/'
      : '/',
  transpileDependencies: true,
  devServer: {
    https: true,
  },
  configureWebpack: {
    resolve: {
      fallback: {
        "https": require.resolve("https-browserify"),
        "http": require.resolve("stream-http"),
        "url": require.resolve("url/"),
        "process": require.resolve("process/browser")
      }
    }
  }
});