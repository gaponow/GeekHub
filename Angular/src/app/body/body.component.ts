import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css', '../app.component.reset.css'],
  encapsulation: ViewEncapsulation.None
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
