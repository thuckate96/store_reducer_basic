var path = require("path")
module.exports = {
  entry: "./src/App.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [{
      loader: "babel-loader",
      query: {
        presets: ["react", "es2015", "stage-2"]
      },
      test: /\.jsx?$/,
      exclude: /node_modules/
    }]
  }
}
