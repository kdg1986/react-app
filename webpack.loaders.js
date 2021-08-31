module.exports = [    
    {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        loader: 'babel-loader',
        options: {    
            plugins: ['@babel/plugin-transform-runtime'],
        },          
    },
    {
      test: /\.(css|scss)$/,
      use: [
        {
          loader: require("mini-css-extract-plugin").loader,
          options: {
            //publicPath: 'build/static/images',
          }
        }
        ,{
          loader: "css-loader",
          options: {
            //url: false
          }
        },
        "sass-loader"
      ]
    }, 
    {
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,            
      type: "asset/resource",
    },
    {
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,            
      type: "asset",
      parser: {
        dataUrlCondition: {
          maxSize: 4 * 1024 // 4kb
        }
      }
    },
]