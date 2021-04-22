import { HomeListItem } from "../models/home-list-item";

export const HOME_LIST: HomeListItem[] = [
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
    content: 'There are a few problems on the Homepage, find and fix the issues.',
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
    index: 5,
    title: 'Complete the Taskboard Logic',
    linkTo: 'routerLink',
    link: '/taskboard',
    content: 'Navigate to the taskboard page and complete the logic as described.',
  },
  {
    index: 6,
    title: 'Create a Notes Component',
    linkTo: 'routerLink',
    link: '/notes',
    content: 'We need to be able to capture notes about this site. Write a new component that will allow us to capture and view notes.',
  },
  {
    index: 7,
    title: 'Commit Your Code After Each Task',
    linkTo: null,
    content: 'After each task is complete, commit the code to your repo using the task\'s title as the commit message.',
  },
];
