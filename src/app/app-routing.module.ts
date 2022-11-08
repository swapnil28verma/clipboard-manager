import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from "./components/settings/settings.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '*', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
