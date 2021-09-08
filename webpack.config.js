//https://webpack.kr/guides/csp/
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = (env, options) => {    
  options = options || {};
  return {
    entry: "./src/index.js",
    output: {
      filename: "static/[name].[hash].js",
      chunkFilename: 'static/[name].[chunkhash].chunk.js',
      assetModuleFilename: 'images/[hash][ext][query]',
      path: path.resolve(__dirname + "/build"),
      publicPath : "/",
      clean: true,
      pathinfo: false,
    },
    mode: options.mode || 'development', //[ production, development, none ]    
    module: { //loaders
      rules: [
        ...require("./webpack.loaders").concat([
          {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader",
                options: { minimize: false } 
            }
            ]
          }
        ])
      ]
    },
    plugins: [      
      new HtmlWebPackPlugin({
          title: 'REACT-APP',
          template: './public/index.html', // target
          filename: 'index.html' // output
          
      }),
      new MiniCssExtractPlugin({
          filename: './css/[name]_[id].css',
          chunkFilename: "css/[name]_[id].css"
      }),
      new webpack.DefinePlugin({
        ELASTIC_URL: JSON.stringify("http://kdg1986.synology.me:9200"),        
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@COMPONENTS': path.resolve(__dirname, 'src/components/'),
        '@COMMON': path.resolve(__dirname, 'src/components/common'),
        '@STYLE': path.resolve(__dirname, 'src/css'),
        '@ELECTRON': path.resolve(__dirname, 'electron/'),    
      },      
    },    
    devServer: {
      contentBase: path.resolve(__dirname + "/build"),
      index: "index.html",
      port: 3000,
      historyApiFallback: true,
    },
  }  
};
