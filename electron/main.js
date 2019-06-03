const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');
const discoverDotFiles = require('./discover-files')

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    height: '800px',
    width: '800px',
    titleBarStyle: 'hiddenInset',
    frame: false,
    // vibrancy: 'appearance-based',
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

  // mainWindow.maximize()
  mainWindow.show()

  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    // mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);

  // Discover Common dot files
  const filesDiscovered = discoverDotFiles()
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('files-discovered', filesDiscovered)
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});