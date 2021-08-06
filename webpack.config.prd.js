const config = require("./webpack.config");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    plugins: [ ...config().plugins, new UglifyJsPlugin() ],
  }
};