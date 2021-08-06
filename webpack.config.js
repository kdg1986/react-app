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
      filename: "./static/[name].[hash].js",
      path: path.resolve(__dirname + "/build"),
    },
    mode: options.mode || 'development', //[ production, development, none ]    
    module: { //loaders
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: "/node_modules",
          use: ['babel-loader'],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: false /* 최적화옵션*/ } 
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html', // target
          filename: 'index.html' // output
      }),
      new MiniCssExtractPlugin({
          filename: './css/style.css'
      }),
      new CleanWebpackPlugin(),      
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@COMPONENTS': path.resolve(__dirname, 'src/components/'),
        '@COMMON': path.resolve(__dirname, 'src/components/common'),
        '@STYLE': path.resolve(__dirname, 'src/css'),
      },
    },
    devServer: {
      contentBase: path.resolve(__dirname + "/build"),
      index: "index.html",
      port: 3000
    },
  }  
};