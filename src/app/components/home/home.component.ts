import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {ScratchyCoreService} from "../../services/scratchy-core.service";
import {UserContentData} from "../../model/user-content-data";
import {first} from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    userContentList: UserContentData[] = [];
    selectedTab: number = 0;

    constructor(private coreService: ScratchyCoreService) {}

    ngOnInit(): void {
        this.getUserData();
    }

    public getUserData() {
        this.coreService.getUserData().pipe(first()).subscribe(userContentList => {
            this.userContentList = [];
            this.userContentList.push(...userContentList);
        });
    }

    onSelectedTabChange(selectedTabIndex: number) {
        if (selectedTabIndex === this.userContentList.length) {
            this.userContentList.push(new UserContentData(uuidv4(), 'untitled' + this.userContentList.length, '', ''));
            this.selectedTab = this.userContentList.length - 1;
        }
    }

    onTabClose(closeEvent: any) {
        const closeTabIndex = closeEvent.index;
        this.userContentList.splice(closeTabIndex, 1);
        if (closeTabIndex === this.selectedTab && closeTabIndex > 0) {
            setTimeout(() => {
                this.selectedTab--;
            }, 0);
        }
    }
}
