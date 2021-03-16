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
      title: 'Fork this Repository',
      linkTo: 'url',
      link: 'https://github.com/SafeguardPrvcy/candidate-test',
      content: 'Visit github and fork this repository to get started.',
    },
    {
      index: 2,
      title: 'Fix the Issues on this Page',
      linkTo: null,
      content: 'There are several problems with this page, find and fix the issues.',
    },
    {
      index: 3,
      title: 'Improve this Basic Design',
      linkTo: null,
      content: 'The design of this website is very plain, update the styles to make this site your own.',
    },
    {
      index: 4,
      title: 'Add Temperature to Header',
      linkTo: 'routerLink',
      link: '\'/weather\'',
      content: 'Use the openweathermap.org api to show the latest weather information for New York, New York.',
    },
    {
      index: 4,
      title: 'Complete the Taskboard Logic',
      linkTo: 'routerLink',
      link: '/taskboard',
      content: 'Navigate to the taskboard page and complete the logic as described.',
    },
    {
      index: 5,
      title: 'Write a Notes Component',
      linkTo: 'routerLink',
      link: '/notes',
      content: 'We need to be able to capture notes about this site. Write a new component that will allow us to capture and view notes.',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
