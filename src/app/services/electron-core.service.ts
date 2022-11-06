import { Injectable } from "@angular/core";
import { ipcRenderer } from "electron";

@Injectable({
    providedIn: "root"
})
export class ElectronCoreService {
    private ipcRenderer: typeof ipcRenderer | undefined;

    constructor() {
        // Only available if running in electron
        // Ideally, this would always be true
        if (ElectronCoreService.isElectron()) {
            this.ipcRenderer = (window).require('electron').ipcRenderer;
        }
    }

    private static isElectron(): boolean {
        return !!((window) && (window).process && (window).process.type);
    }

    public loadFile(channelName: string, fileName: string): Promise<any> | undefined {
        return this.ipcRenderer?.invoke(channelName, fileName);
    }

    public saveFile(channelName: string, fileName: string, fileData: any): Promise<any> | undefined {
        return this.ipcRenderer?.invoke(channelName, fileName, fileData)
    }
}
