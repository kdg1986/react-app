// In renderer process (web page).
// NB. Electron APIs are only accessible from preload, unless contextIsolation is disabled.
// See https://www.electronjs.org/docs/tutorial/process-model#preload-scripts for more details.
const { ipcRenderer,contextBridge } = require('electron');
//console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
});

//window.ipcRenderer = require('electron').ipcRenderer;
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);


