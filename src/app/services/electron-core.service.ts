import { Injectable } from "@angular/core";
import { ElectronService } from "ngx-electron";

@Injectable({
    providedIn: "root"
})
export class ElectronCoreService {

    constructor(private electronService: ElectronService) {}

    public loadFile(channelName: string, fileName: string): Promise<any> {
        return this.electronService.ipcRenderer?.invoke(channelName, fileName);
    }

    public saveFile(channelName: string, fileName: string, fileData: any): Promise<any> {
        return this.electronService.ipcRenderer?.invoke(channelName, fileName, fileData)
    }

    public triggerMainProcessChannelHandler(channelName: string): Promise<void> {
        return this.electronService.ipcRenderer?.invoke(channelName);
    }
}
