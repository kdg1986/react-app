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
  plugins: [      
    new HtmlWebPackPlugin({
        template: './public/index.html', // target
        filename: 'index.html' // output
        
    }),
    new MiniCssExtractPlugin({
        filename: './css/style.css',
        chunkFilename: "[id].css"
    }),    
  ],
  resolve: webpackConfig.resolve
};
