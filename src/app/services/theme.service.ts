import {Injectable} from "@angular/core";
import { dark, indigo, light, Theme } from "../utils/themes/theme";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private active: Theme = light;
    private availableThemes: Theme[] = [light, dark, indigo];

    getAvailableThemes(): Theme[] {
        return this.availableThemes;
    }

    getActiveTheme(): Theme {
        return this.active;
    }

    setActiveTheme(theme: Theme): void {
        this.active = theme;

        Object.keys(this.active.properties).forEach(property => {
            document.documentElement.style.setProperty(
                property,
                this.active.properties[property]
            );
        });
    }
}
