const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
                outputPath: 'images',
                name: '[name].[ext]?[hash]',
            }
          },
        ],
    },
    {
        test: /\.html$/,
        use: [
        {
            loader: "html-loader",
            options: { minimize: false } 
        }
        ]
    },
    {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
    }
          
]