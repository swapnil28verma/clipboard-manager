import {Component, OnInit} from '@angular/core';
import {ThemeService} from "./services/theme.service";
import {indigo} from "./utils/themes/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title = "Clipboard-app";
    constructor(private themeService: ThemeService) {}

    ngOnInit(): void {
        this.themeService.setActiveTheme(indigo);
    }
}
