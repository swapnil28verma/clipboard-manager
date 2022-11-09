const electron = require('electron');
const remoteMain = require("@electron/remote/main");

const scratchyApp = require('./src/electron/scratchy-app')

const app = electron.app;

// TODO: Remove this before packaging
require('electron-reload')(path.join(__dirname, 'dist'));
remoteMain.initialize();

let mainWindow;

function startApp() {

    mainWindow = scratchyApp.initialiseApp();
    remoteMain.enable(mainWindow.webContents);

    mainWindow.on('closed', function () {
        mainWindow = null
    });
}

app.on('ready', () => {
    startApp();
});

app.on('window-all-closed', function (event) {
    scratchyApp.unregisterChannelListeners();
    event.preventDefault();
    event.returnValue = false;
});

app.on('activate', function () {
    if (mainWindow === null) {
        startApp();
    }
});

app.on('quit', function() {
    scratchyApp.unregisterAll();
})
