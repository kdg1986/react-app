const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = require("./webpack.config")();


module.exports = {
  // Put your normal webpack config below here
  module: {
    rules: [ ...require('./webpack.ele.rules'),
      ...require("./webpack.loaders").concat([
        {
          test: /\.html$/,
          use: [
          {
              loader: "html-loader",
              options: { minimize: true } 
          }
          ]
        }        
      ])
    ]
  },
  plugins: webpackConfig.plugins,
  resolve: webpackConfig.resolve
};
