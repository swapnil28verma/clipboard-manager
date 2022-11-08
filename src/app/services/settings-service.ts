import { Injectable } from "@angular/core";
import { KeyboardUtils } from "../utils/keyboard-utils";
import { StringUtils } from "../utils/string-utils";
import { SettingsConfig } from "../model/settings-config";
import { from, Observable } from "rxjs";
import { ElectronCoreService } from "./electron-core.service";
import { ElectronChannelEnum } from "../model/electron-channel.enum";

@Injectable({
    providedIn: "root"
})
export class SettingsService {

    constructor(private electronCoreService: ElectronCoreService) {}

    public getShortcutString(key: string, currentShortcut: string): string {
        let shortcutString = '';
        if (KeyboardUtils.isBackSpaceKey(key) || KeyboardUtils.isDeleteKey(key)) {
            return '';
        }
        shortcutString = KeyboardUtils.getKeyCode(key)
        if (StringUtils.isNotBlank(currentShortcut)) {
            shortcutString = currentShortcut.concat(' + ', KeyboardUtils.getKeyCode(key));
        }
        return shortcutString;
    }

    public loadSettings(): Observable<SettingsConfig> {
        return from(this.electronCoreService.loadFile(ElectronChannelEnum.LOAD_SETTINGS, 'settingsConfig.json'));
    }

    public saveSettings(settingsConfig: SettingsConfig): Observable<void> {
        return from(this.electronCoreService.saveFile(ElectronChannelEnum.SAVE_SETTINGS, 'settingsConfig.json', settingsConfig));
    }
}
