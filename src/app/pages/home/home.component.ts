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
      title: 'Fix the Issues on the Homepage',
      linkTo: null,
      content: 'There are several problems with this page, find and fix the issues.',
    },
    {
      index: 3,
      title: 'Improve the Design',
      linkTo: null,
      content: 'The design of this website is very plain, update the styles and/or design to make this site your own.',
    },
    {
      index: 4,
      title: 'Add Local Temperature to the Header',
      linkTo: 'routerLink',
      link: '/weather',
      content: 'Use the openweathermap.org api to show the user\'s latest temperature information in the header.',
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
      title: 'Create a Notes Component',
      linkTo: 'routerLink',
      link: '/notes',
      content: 'We need to be able to capture notes about this site. Write a new component that will allow us to capture and view notes.',
    },
    {
      index: 6,
      title: 'Commit Your Code After Each Task',
      linkTo: null,
      content: 'After each task is complete, commit the code to your repo using the task\'s title as the commit message.',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
