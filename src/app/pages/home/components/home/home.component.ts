import { Component, OnInit } from '@angular/core';

import { HOME_LIST } from '../../constants';
import { HomeListItem } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeListItems: HomeListItem[];

  ngOnInit() {
    this.homeListItems = HOME_LIST;
  }

  getFormattedTitle(item: HomeListItem): string {
    return `${item.index}: ${item.title}`;
  }
}
