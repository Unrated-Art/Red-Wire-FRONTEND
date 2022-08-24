import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> 3ef384d66bb37f5193a211ccbf7cbf09559a1b82
=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> 674e03a9a74ca9e1c5c8ce9fdbd7b793f896cd53

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 674e03a9a74ca9e1c5c8ce9fdbd7b793f896cd53
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(public route:ActivatedRoute) {}

  ngOnInit(): void {}
  ngOnChanges() : void {
    this.route.params.subscribe((params)=>{
      alert(params['url']);
    });
<<<<<<< HEAD
=======
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
>>>>>>> 3ef384d66bb37f5193a211ccbf7cbf09559a1b82
=======
>>>>>>> 674e03a9a74ca9e1c5c8ce9fdbd7b793f896cd53
  }

}
