import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {UserContentData} from "../../model/user-content-data";
import {StyleUtils} from "../../utils/style-utils";

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WorkspaceComponent implements OnInit {

    @Input() data: UserContentData = new UserContentData();

    StyleUtils = StyleUtils;

    public tagOptions = [
        '#ff0000', '#0016ff', '#8dff00', '#ffd800', '#ffffff',
    ];

    constructor() {
    }

    ngOnInit(): void {
    }
}
