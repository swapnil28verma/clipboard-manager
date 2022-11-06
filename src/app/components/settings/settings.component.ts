import { Component, OnInit } from '@angular/core';
import { SettingsConfig } from "../../model/settings-config";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    settingsConfig: SettingsConfig = new SettingsConfig();
    shortcut = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    onShortcutChanged(event: KeyboardEvent) {
        console.log(event);
    }

    onShortcutFocusIn() {
        this.shortcut = '';
    }

    onShortcutFocusOut() {
        this.settingsConfig.shortcut = this.shortcut;
    }
}
