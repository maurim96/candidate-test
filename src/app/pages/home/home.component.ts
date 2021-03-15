import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list = [
    {
      index: 1,
      title: 'Fix the Issues on this Page',
      linkToPage: null,
      content: 'There are several problems with this page, find and fix the bugs.',
    },
    {
      index: 2,
      title: 'Improve this Basic Design',
      linkToPage: null,
      content: 'The design of this website is very plain, update the styles to make this site your own.',
    },
    {
      index: 3,
      title: 'Complete the Taskboard Logic',
      linkToPage: '\'/taskboard\'',
      content: 'Navigate to the taskboard page and complete the logic as described in this ticket.',
    },
    {
      index: 3,
      title: 'Write a Notes Component',
      linkToPage: '/notes',
      content: 'We need to be able to capture notes about this site. Write a new component that will allow us to capture and view notes.',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
