import { Component, OnInit } from '@angular/core';
import { SettingsConfig } from "../../model/settings-config";
import { SettingsService } from "../../services/settings-service";
import { StringUtils } from "../../utils/string-utils";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    settingsConfig: SettingsConfig = new SettingsConfig();
    shortcut = this.settingsConfig.shortcut;

    private pressedKeyStack: string[] = [];
    private keybindingInProgress: boolean = false;

    constructor(private settingsService: SettingsService) {}

    ngOnInit(): void {
    }

    onShortcutKeyDown(event: KeyboardEvent) {
        if (!this.keybindingInProgress) {
            this.shortcut = '';
            this.keybindingInProgress = true;
        }
        if (!event.repeat) {
            this.shortcut = this.settingsService.getShortcutString(event.key, this.shortcut);
            this.pressedKeyStack.push(event.key);
        }
        event.preventDefault();
    }

    onShortcutKeyUp(event: KeyboardEvent) {
        this.pressedKeyStack.splice(this.pressedKeyStack.indexOf(event.key), 1);
        if (this.pressedKeyStack.length === 0) {
            this.keybindingInProgress = false;
        }
    }

    onShortcutFocusOut() {
        if (StringUtils.isNotBlank(this.shortcut)) {
            this.settingsConfig.shortcut = this.shortcut;
        } else {
            this.shortcut = this.settingsConfig.shortcut;
        }
        this.keybindingInProgress = false;
    }
}
