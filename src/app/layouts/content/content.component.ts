import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, OnChanges {
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.route.params.subscribe((params) => {
      alert(params['url']);
    });
  }
}
