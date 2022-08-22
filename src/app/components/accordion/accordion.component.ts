import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/models/formation';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  /* We use this property to set a different CSS class on the training
  panel if we have just viewed his details*/
  @Input() hasJustViewed?: boolean;
  // Sets the panel title, in our case the name of the training
  @Input() title?: string;
  //@Input() content?:string;
  // Controls hiding and showing panel body and footer
  @Input() isHidden?: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
