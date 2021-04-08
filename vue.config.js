module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/figma-website-template/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
          prependData: `
          @import "@/assets/scss/global.scss";
          `
      }
    }
  }
};