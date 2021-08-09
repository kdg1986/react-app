const config = require("./webpack.config");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {  
  return {
    ...config()
    ,optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },        
      },      
    },
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
              options: { minimize: true } 
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [ ...config().plugins, new UglifyJsPlugin() ],
  }
};