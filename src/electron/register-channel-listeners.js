const electron = require('electron');
const path = require("path");
const fs = require('fs');

const app = electron.app;
const ipcMain = electron.ipcMain;

const CHANNELS = {
    SAVE_SETTINGS: 'SAVE_SETTINGS',
    LOAD_SETTINGS: 'LOAD_SETTINGS'
}

function loadFileAtPath(filePath) {
    // Create an empty file if it doesn't already exist
    fs.writeFileSync(filePath, '', {flag: 'a'});
    const data = fs.readFileSync(filePath);

    return data.length > 0 ? JSON.parse(data.toString()) : null;
}

function saveFileAtPath(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data));
}

function buildSettingsFilePath(fileName) {
    const userDataPath = app.getPath('userData');
    return path.join(userDataPath, fileName);
}

module.exports.registerChannelListeners = function () {

    ipcMain.handle(CHANNELS.LOAD_SETTINGS, async (event, fileName) => {
        const filePath = buildSettingsFilePath(fileName);
        return loadFileAtPath(filePath);
    });

    ipcMain.handle(CHANNELS.SAVE_SETTINGS, async (event, fileName, data) => {
        const filePath = buildSettingsFilePath(fileName);
        saveFileAtPath(filePath, data);

        return true;
    });
}

module.exports.unregisterChannelListeners = function () {
    ipcMain.removeHandler(CHANNELS.LOAD_SETTINGS);
    ipcMain.removeHandler(CHANNELS.SAVE_SETTINGS);
}
