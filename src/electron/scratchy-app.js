const channelListener = require('./register-channel-listeners');
const createWindow = require('./electron-create-window');

module.exports.initialiseApp = function () {
    channelListener.registerChannelListeners();
    channelListener.registerLauncherShortcut()
    return createWindow();
}

module.exports.registerChannelListeners = function () {
    channelListener.registerChannelListeners();
}

module.exports.unregisterChannelListeners = function () {
    channelListener.unregisterChannelListeners()
}

module.exports.registerShortcutListeners = function () {
    channelListener.registerShortcutListeners();
}

module.exports.unregisterShortcutListeners = function () {
    channelListener.unregisterShortcutListeners();
}

module.exports.unregisterAll = function () {
    channelListener.unregisterAll();
}
