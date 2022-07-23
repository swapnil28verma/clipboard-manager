import {Component, Input, OnInit} from '@angular/core';
import {UserContentData} from "../../model/user-content-data";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  @Input() data: UserContentData = new UserContentData();

  constructor() { }

  ngOnInit(): void {
  }
}
