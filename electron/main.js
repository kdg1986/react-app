const { app, BrowserWindow, ipcMain  } = require('electron');
const {Menu, Tray} = require('electron');

const createWindow = () => {
  // Create the browser window.

  const mainWindow = new BrowserWindow({    
    width : 1024,
    height : 768,
    fullscreenable : true,
    webPreferences: {
      nodeIntegration: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }    
  });

  mainWindow.removeMenu();

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  let tray;
  //트레이 아이콘
  function initTrayIconMenu(){
    tray = new Tray( require('path').resolve(__dirname,'../../electron/icon/tray.jpg') ); 
    const myMenu = Menu.buildFromTemplate([
      {label: '1번', type: 'normal', checked: true, click: ()=>{console.log('1번클릭!')} },  //checked는 기본선택입니다.
      {label: '2번', type: 'normal', click: ()=>{console.log('2번클릭!')}},
      {label: '3번', type: 'normal', click: ()=>{console.log('3번클릭!')}}
    ])
    tray.setToolTip('트레이 아이콘!')
    tray.setContextMenu(myMenu)
  }

  initTrayIconMenu();
  
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
})
