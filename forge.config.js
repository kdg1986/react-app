module.exports = {
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "my_new_app"
      }
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: [
        "darwin"
      ]
    },
    {
      name: "@electron-forge/maker-deb",
      config: {}
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {}
    }
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        "mainConfig": "./webpack.ele.main.config.js",
        "renderer": {
          "config": "./webpack.ele.renderer.config.js",
          "entryPoints": [
            {
              "html": "./public/index.html",
              "js": "./src/index.js",
              "name": "main_window"
            }
          ]
        }
      }
    ]
  ]
}