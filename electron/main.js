const { app, BrowserWindow, Menu, Tray  } = require('electron');

let tray;
let trayClose=false;
const trayIconPath = require('path').resolve(__dirname,'../../electron/icon/tray.jpg');
function createWindow(){
    this.mainWindow = new BrowserWindow({    
      width : 1024,
      height : 768,
      fullscreenable : true,
      webPreferences: {
        nodeIntegration: false,
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
      }    
    });
}
createWindow.prototype.windowInit = function(){
    this.mainWindow.removeMenu();
    this.mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);  
    this.mainWindow.webContents.openDevTools();

    this.mainWindow.on('minimize',(event) => {
      event.preventDefault();
      this.mainWindow.hide();
    });
    this.mainWindow.on('close', (event) => {    
        if(!trayClose){
            event.preventDefault();
            this.mainWindow.hide();
        }
        return false;
    });
    this.mainWindow.hide();
}
createWindow.prototype.systemTray = function(){
  tray = new Tray(trayIconPath); 
  const myMenu = Menu.buildFromTemplate([    
    {type: 'separator'},   
    {label: '종료', type: 'normal', click: ()=>{ 
      trayClose = true;
      app.quit(); 
    }}
  ])
  tray.setToolTip('electron tray')
  tray.setContextMenu(myMenu);
  tray.on('double-click',() => {
    this.mainWindow.show();
  }) 
}

app.on('ready', ()=>{
  const window = new createWindow();
  window.windowInit();
  window.systemTray();
});

app.on('window-all-closed', () => {
    console.log( process.platform )
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/*
app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
*/