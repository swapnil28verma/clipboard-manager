import { Component, OnInit } from '@angular/core';
import {ScratchyCoreService} from "../../services/scratchy-core.service";
import {UserContentData} from "../../model/user-content-data";
import {first} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userContentList: UserContentData[] = [];

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

}
