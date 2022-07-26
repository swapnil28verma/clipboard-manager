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

  constructor() { }

  ngOnInit(): void {
  }
}
