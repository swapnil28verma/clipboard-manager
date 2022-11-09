const url = require("url");
const path = require("path");

const BrowserWindow = require('electron').BrowserWindow;

module.exports = function () {
    let mainWindow = new BrowserWindow({
        width: 1366,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadURL(
        url.format({
            // IMP: This path needs to be correct. If getting cannot load local resource error, double check if
            // this path is pointing to the correct directory or not. It should point to the 'dist' directorty
            // on the root level
            pathname: path.join(__dirname, `../../dist/scratchy/index.html`),
            protocol: "file:",
            slashes: true
        })
    );
    return mainWindow;
}
