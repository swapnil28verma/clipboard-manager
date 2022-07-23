import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import { WorkspaceComponent } from './workspace/workspace.component';
import { QuillModule } from "ngx-quill";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
