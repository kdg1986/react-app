const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, options) => {    
  options = options || {};
  return {
    entry: "./src/index.js",    
    output: {
      filename: "static/[name].[hash].js",
      chunkFilename: 'static/[name].[chunkhash].chunk.js',
      path: path.resolve(__dirname + "/build"),
      publicPath : "/"
    },
    mode: options.mode || 'development', //[ production, development, none ]    
    module: { //loaders
      rules: [ ...require('./webpack.loaders') ]
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
    resolve: require('./webpack.alias'),
    devServer: {
      contentBase: path.resolve(__dirname + "/build"),
      index: "index.html",
      port: 3000,
      historyApiFallback: true,
    },
  }  
};