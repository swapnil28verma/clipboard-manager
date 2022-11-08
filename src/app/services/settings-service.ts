import { Injectable } from "@angular/core";
import { KeyboardUtils } from "../utils/keyboard-utils";
import { StringUtils } from "../utils/string-utils";

@Injectable({
    providedIn: "root"
})
export class SettingsService {

    constructor() {}

    public getShortcutString(key: string, currentShortcut: string): string {

        let shortcutString = '';
        console.log(key);
        if (KeyboardUtils.isBackSpaceKey(key) || KeyboardUtils.isDeleteKey(key)) {
            return '';
        }
        shortcutString = KeyboardUtils.getKeyCode(key)
        if (StringUtils.isNotBlank(currentShortcut)) {
            shortcutString = currentShortcut.concat('+', KeyboardUtils.getKeyCode(key));
        }
        return shortcutString;
    }
}
