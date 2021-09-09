module.exports = {
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "client"
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
      config: {
        name: "client"
      }
    }
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack.ele.main.config.js",        
        renderer: {
          config: "./webpack.ele.renderer.config.js",
          entryPoints: [
            {
              "html": "./public/index.html",
              "js": "./electron/index.ele.js",
              "name": "main_window",
              "preload": {
                "js": "./electron/preload.js"
              },              
            }
          ]
        }
      }
    ]
  ]
}