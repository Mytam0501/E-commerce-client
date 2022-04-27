module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy:  "https://ttstore-cosmetic.herokuapp.com/"
  }
}
