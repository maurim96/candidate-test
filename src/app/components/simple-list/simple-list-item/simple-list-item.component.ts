import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-list-item',
  templateUrl: './simple-list-item.component.html',
  styleUrls: ['./simple-list-item.component.scss']
})
export class SimpleListItemComponent implements OnInit {
  @Input() title: string;
  @Input() linkTo?: string;
  @Input() link?: string;
  @Input() idToDelete?: string;
  @Output() deleteEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  executeDelete() {
    this.deleteEmitter.emit(this.idToDelete);
  }
}
