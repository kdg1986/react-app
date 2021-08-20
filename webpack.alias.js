const path = require("path");
module.exports = {
    alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@COMPONENTS': path.resolve(__dirname, 'src/components/'),
        '@COMMON': path.resolve(__dirname, 'src/components/common'),
        '@STYLE': path.resolve(__dirname, 'src/css'),
      },
}