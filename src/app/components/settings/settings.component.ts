import { Component, OnInit } from '@angular/core';
import { SettingsConfig } from "../../model/settings-config";
import { SettingsService } from "../../services/settings-service";
import { StringUtils } from "../../utils/string-utils";
import { Router } from "@angular/router";
import { first } from "rxjs";
import { KeyboardUtils } from "../../utils/keyboard-utils";
import { ElectronCoreService } from "../../services/electron-core.service";
import { ElectronChannelEnum } from "../../model/electron-channel.enum";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    settingsConfig: SettingsConfig = new SettingsConfig();
    shortcut: string = '';

    private pressedKeyStack: string[] = [];
    private keybindingInProgress: boolean = false;

    private readonly previousRoute: string = '';

    constructor(private router: Router,
                private settingsService: SettingsService,
                private electronCoreService: ElectronCoreService) {
        const finalUrl = this.router.getCurrentNavigation()?.previousNavigation?.finalUrl;
        if (finalUrl) {
            this.previousRoute = finalUrl.toString();
        }
    }

    ngOnInit(): void {
        this.settingsService.loadSettings().pipe(first()).subscribe((settings: SettingsConfig) => {
            if (settings) {
                this.settingsConfig = settings;
            }
            this.shortcut = this.settingsConfig.shortcut;
        });
    }

    onShortcutKeyDown(event: KeyboardEvent) {
        if (!this.keybindingInProgress) {
            this.shortcut = '';
            this.keybindingInProgress = true;
        }
        if (!event.repeat) {
            this.shortcut = this.getShortcutString(event.key, this.shortcut);
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
        if (StringUtils.isBlank(this.shortcut)) {
            this.shortcut = this.settingsConfig.shortcut;
        }
        this.keybindingInProgress = false;
    }

    onBackClick() {
        let isShortcutChanged = false;
        if (this.settingsConfig.shortcut !== this.shortcut) {
            this.settingsConfig.shortcut = this.shortcut;
            isShortcutChanged = true;
        }
        this.settingsService.saveSettings(this.settingsConfig).pipe(first()).subscribe(async () => {
            // Shortcut was changed, unregister old shortcut, and register new shortcut
            if (isShortcutChanged) {
                this.electronCoreService.triggerMainProcessChannelHandler(ElectronChannelEnum.REGISTER_NEW_SHORTCUT);
            }
            this.router.navigateByUrl(this.previousRoute);
        });
    }

    public getShortcutString(key: string, currentShortcut: string): string {
        let shortcutString = '';
        if (KeyboardUtils.isBackSpaceKey(key) || KeyboardUtils.isDeleteKey(key)) {
            return '';
        }
        shortcutString = KeyboardUtils.getKeyCode(key)
        if (StringUtils.isNotBlank(currentShortcut)) {
            shortcutString = currentShortcut.concat(KeyboardUtils.SHORTCUT_SEPERATOR, KeyboardUtils.getKeyCode(key));
        }
        return shortcutString;
    }
}
