// In renderer process (web page).
// NB. Electron APIs are only accessible from preload, unless contextIsolation is disabled.
// See https://www.electronjs.org/docs/tutorial/process-model#preload-scripts for more details.
//https://www.electronjs.org/docs/tutorial/process-model#preload-scripts
const { ipcRenderer,contextBridge } = require('electron');

//window.ipcRenderer = require('electron').ipcRenderer;
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);
contextBridge.exposeInMainWorld('isElectron', true);


