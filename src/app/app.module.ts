import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { QuillModule } from "ngx-quill";
import { ScratchyCoreService } from "./services/scratchy-core.service";
import { FormsModule } from "@angular/forms";
import { TabViewModule } from "primeng/tabview";
import { TabViewComponent } from "./components/utils/tab-view/tab-view.component";
import { TabPanelComponent } from './components/utils/tab-view/tab-panel/tab-panel.component';
import { ElectronCoreService } from "./services/electron-core.service";
import { ThemeService } from "./services/theme.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        WorkspaceComponent,
        TabViewComponent,
        TabPanelComponent
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
    providers: [ScratchyCoreService, ElectronCoreService, ThemeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
