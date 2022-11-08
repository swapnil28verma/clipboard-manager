import { Component, OnInit } from '@angular/core';
import { SettingsConfig } from "../../model/settings-config";
import { SettingsService } from "../../services/settings-service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    settingsConfig: SettingsConfig = new SettingsConfig();
    shortcut = '';

    constructor(private settingsSerivce: SettingsService) {}

    ngOnInit(): void {
    }

    onShortcutChanged(event: KeyboardEvent) {
        if (!event.repeat) {
            this.shortcut = this.settingsSerivce.getShortcutString(event.key, this.shortcut);
        }
        event.preventDefault();
    }

    onShortcutFocusOut() {
        this.settingsConfig.shortcut = this.shortcut;
    }
}
