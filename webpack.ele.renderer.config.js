const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules: [ ...require('./webpack.ele.rules'),...require('./webpack.loaders') ]
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
    new CleanWebpackPlugin(),      
  ],
  resolve: require('./webpack.alias')
};
