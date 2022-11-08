const electron = require('electron');
const url = require("url");
const path = require("path");
const remoteMain = require("@electron/remote/main");

const { registerChannelListeners, unregisterChannelListeners } = require('./src/electron/register-channel-listeners');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;

// TODO: Remove this before packaging
require('electron-reload')(path.join(__dirname, 'dist'));
remoteMain.initialize();

let mainWindow;

function createWindow() {
    registerChannelListeners();
    mainWindow = new BrowserWindow({
        width: 1366,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    remoteMain.enable(mainWindow.webContents);

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/scratchy/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    mainWindow.on('closed', function () {
        mainWindow = null
    });
}

app.on('ready', () => {
    globalShortcut.register('CommandOrControl+Alt+X', createWindow);
    createWindow();
});

app.on('window-all-closed', function (event) {
    unregisterChannelListeners();
    event.preventDefault();
    event.returnValue = false;
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});

app.on('quit', function() {
    globalShortcut.unregisterAll();
    unregisterChannelListeners();
})
