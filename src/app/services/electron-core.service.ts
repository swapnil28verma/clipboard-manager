import { Injectable } from "@angular/core";
import { ipcRenderer } from "electron";

@Injectable({
    providedIn: "root"
})
export class ElectronCoreService {
    private ipcRenderer: typeof ipcRenderer | undefined;

    constructor() {
        // Only available if running in electron
        if (ElectronCoreService.isElectron()) {
            this.ipcRenderer = (window).require('electron').ipcRenderer;
        }
    }

    private static isElectron(): boolean {
        return !!((window) && (window).process && (window).process.type);
    }
}
