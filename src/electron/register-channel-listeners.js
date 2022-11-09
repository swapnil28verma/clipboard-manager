const electron = require('electron');
const path = require("path");
const fs = require('fs');

const createWindow = require('./electron-create-window');

const app = electron.app;
const ipcMain = electron.ipcMain;
const globalShortcut = electron.globalShortcut;

const CHANNELS = {
    SAVE_SETTINGS: 'SAVE_SETTINGS',
    LOAD_SETTINGS: 'LOAD_SETTINGS',
    REGISTER_NEW_SHORTCUT: 'REGISTER_NEW_SHORTCUT'
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

function startApp() {
    registerChannelListeners();
    createWindow();
}

const registerChannelListeners = function () {

    ipcMain.handle(CHANNELS.LOAD_SETTINGS, async (event, fileName) => {
        const filePath = buildSettingsFilePath(fileName);
        return loadFileAtPath(filePath);
    });

    ipcMain.handle(CHANNELS.SAVE_SETTINGS, async (event, fileName, data) => {
        const filePath = buildSettingsFilePath(fileName);
        saveFileAtPath(filePath, data);

        return true;
    });

    ipcMain.handle(CHANNELS.REGISTER_NEW_SHORTCUT, async () => {
        registerLauncherShortcut();
        return true;
    });
}

const unregisterChannelListeners = function () {
    // TODO: Find a better way to unregister all listeners
    ipcMain.removeHandler(CHANNELS.LOAD_SETTINGS);
    ipcMain.removeHandler(CHANNELS.SAVE_SETTINGS);
    ipcMain.removeHandler(CHANNELS.REGISTER_NEW_SHORTCUT);
}

const registerShortcutListeners = function () {
    registerLauncherShortcut();
}

const unregisterShortcutListeners = function () {
    globalShortcut.unregisterAll();
}

const unregisterAll = function () {
    unregisterChannelListeners();
    unregisterShortcutListeners();
}

const registerLauncherShortcut = function() {
    const userDataPath = app.getPath('userData');
    const filePath = path.join(userDataPath, 'settingsConfig.json');

    // Create an empty file if it doesn't already exist
    fs.writeFileSync(filePath, '', {flag: 'a'});

    const data = fs.readFileSync(filePath);

    const settingsConfig = data.length > 0 ? JSON.parse(data.toString()) : null;
    let shortcut;
    if (settingsConfig) {
        shortcut = settingsConfig.shortcut + '';
    } else {
        shortcut = "Ctrl + Alt + X";
    }
    //TODO: Figure out a way to unregister only the old shortcut, not all
    globalShortcut.unregisterAll();
    globalShortcut.register(shortcut, startApp);
}

module.exports.registerChannelListeners = registerChannelListeners
module.exports.unregisterChannelListeners = unregisterChannelListeners
module.exports.registerShortcutListeners = registerShortcutListeners
module.exports.unregisterShortcutListeners = unregisterShortcutListeners
module.exports.unregisterAll = unregisterAll
module.exports.registerLauncherShortcut = registerLauncherShortcut
