import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit {
    @Input() tabHeader: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
