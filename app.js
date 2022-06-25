const {app, BrowserWindow} = require('electron');
const url = require("url");
const path = require("path");

// Enable live reload for all the files inside your project directory
const electronReload = require('electron-reload');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/clipboard-manager/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}
app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

electronReload(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
