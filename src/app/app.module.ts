import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import { QuillModule } from "ngx-quill";
import { FormsModule } from "@angular/forms";
import { TabViewModule } from "primeng/tabview";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { SettingsComponent } from './components/settings/settings.component';

import { ScratchyCoreService } from "./services/scratchy-core.service";
import { ElectronCoreService } from "./services/electron-core.service";
import { ThemeService } from "./services/theme.service";
import { SettingsService } from "./services/settings-service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        WorkspaceComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        TabViewModule,
        QuillModule.forRoot({
            customOptions: [
                {
                    import: "formats/font",
                    whitelist: [
                        "mirza",
                        "roboto",
                        "aref",
                        "serif",
                        "sansserif",
                        "monospace"
                    ]
                }
            ]
        }),
        FormsModule,
    ],
    providers: [ScratchyCoreService, SettingsService, ElectronCoreService, ThemeService],
    bootstrap: [AppComponent]
})
export class AppModule {}
