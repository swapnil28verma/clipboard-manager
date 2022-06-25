import { Component } from '@angular/core';
import {ElectronService} from "ngx-electron";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = "Clipboard-app";
  constructor(private electronService: ElectronService) {
    this.electronService.clipboard.writeText("Hello from within the application");
  }

}
