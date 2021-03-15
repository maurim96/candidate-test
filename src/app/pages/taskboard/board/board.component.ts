import {Component, OnDestroy, OnInit} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {BoardItem} from '../board-item/board-item';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  list = 'board';

  list1: BoardItem[] = [];
  list2: BoardItem[] = [];
  list3: BoardItem[] = [];

  constructor(
    private dragulaService: DragulaService
  ) {}


  ngOnInit(): void {
    this.dragulaService.createGroup(this.list, {
      revertOnSpill: true,
      accepts: (el, target, source, sibling) => {
        // logic here
        return true;
      }
    });

    ['ListItem 1.1', 'ListItem 1.2', 'ListItem 1.3'].map(t => this.list1.push({ title: t, theme: 'theme-1' }));
    ['ListItem 2.1', 'ListItem 2.2', 'ListItem 2.3'].map(t => this.list2.push({ title: t, theme: 'theme-2' }));
    ['ListItem 3.1', 'ListItem 3.2', 'ListItem 3.3'].map(t => this.list3.push({ title: t, theme: 'theme-3' }));
  }

  ngOnDestroy() {
    this.dragulaService.destroy(this.list);
  }

}
