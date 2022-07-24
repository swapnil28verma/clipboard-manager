import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ScratchyCoreService} from "../../services/scratchy-core.service";
import {UserContentData} from "../../model/user-content-data";
import {first} from "rxjs";
import {StyleUtils} from "../../utils/style-utils";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  StyleUtils = StyleUtils;
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
