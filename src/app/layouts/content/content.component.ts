import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
>>>>>>> 3ef384d66bb37f5193a211ccbf7cbf09559a1b82

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
<<<<<<< HEAD
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(public route:ActivatedRoute) {}

  ngOnInit(): void {}
  ngOnChanges() : void {
    this.route.params.subscribe((params)=>{
      alert(params['url']);
    });
=======
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
>>>>>>> 3ef384d66bb37f5193a211ccbf7cbf09559a1b82
  }

}
