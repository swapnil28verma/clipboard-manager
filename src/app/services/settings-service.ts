import { Injectable } from "@angular/core";
import { ElectronService } from "ngx-electron";

@Injectable({
    providedIn: "root"
})
export class SettingsService {

    constructor(private electronService: ElectronService) {}

    public loadSettings() {}

    public saveSettings() {}

}
