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

  todoList: BoardItem[] = [];
  inProgressList: BoardItem[] = [];
  doneList: BoardItem[] = [];
  availableMoves: { [key: string]: string[] };

  constructor(
    private dragulaService: DragulaService
  ) {}


  ngOnInit(): void {
    this.availableMoves = {
      'todoList': [ 'inProgressList' ],
      'inProgressList': [ 'todoList', 'doneList' ],
      'doneList': [ 'inProgressList' ],
    };
    this.dragulaService.createGroup(this.list, {
      revertOnSpill: true,
      accepts: (el, target, source, sibling) => {
        return this.availableMoves[source.id].includes(target.id);
      }
    });

    this.setData();
  }

  ngOnDestroy() {
    this.dragulaService.destroy(this.list);
  }

  setData() {
    ['Task 1', 'Task 2', 'Task 3'].map(t => this.todoList.push({ title: t, theme: 'todo-theme' }));
    ['Task 4', 'Task 5', 'Task 6'].map(t => this.inProgressList.push({ title: t, theme: 'in-progress-theme' }));
    ['Task 7', 'Task 8', 'Task 9'].map(t => this.doneList.push({ title: t, theme: 'done-theme' }));
  }

}
