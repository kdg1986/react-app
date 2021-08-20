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