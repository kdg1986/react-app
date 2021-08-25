const webpackConfig = require("./webpack.config");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = webpackConfig();

module.exports = () => {  
  return {
    ...config,
    mode: 'production', //[ production, development, none ]
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },        
      },
      minimizer: [ 
        new UglifyJsPlugin({          
          uglifyOptions: {
            warnings: false,            
          },
          chunkFilter: (chunk) => {            
            if (chunk.name === 'vendor') {
              return false;
            }   
            return true;
          }
        }),
      ],
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
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'static/images',
                name: '[name].[ext]?[hash]',
              }
            }
          ],
      },
        {
          test: /\.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }
      ]
    },  
  }
};