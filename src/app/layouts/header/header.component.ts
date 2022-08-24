import { Component, OnInit } from '@angular/core';

interface NavType {
  path: string;
  name: string;
  child?: Array<NavType>;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 674e03a9a74ca9e1c5c8ce9fdbd7b793f896cd53
  navs: Array<NavType> = [
    {
      path: 'formation',
      name: 'Formation',
      child: [
        { path: 'formation/list', name: 'Liste Formation' },
        { path: 'formation/add', name: 'Ajouter Formation' },
        { path: 'formation/edit/:id', name: 'Modifier Formation' },
      ],
    },
  ];
<<<<<<< HEAD
=======
  // navs: Array<NavType> = [
  //   {
  //     path: 'formation',
  //     name: 'Formation',
  //     child: [
  //       { path: 'formation/list', name: 'Liste Formation' },
  //       { path: 'formation/add', name: 'Ajouter Formation' }
  //     ]
  //   }
  // ];
>>>>>>> 3ef384d66bb37f5193a211ccbf7cbf09559a1b82
=======

>>>>>>> 674e03a9a74ca9e1c5c8ce9fdbd7b793f896cd53
}
