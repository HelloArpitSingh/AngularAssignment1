import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-success',
  template: `<p>success works from inside warning created using cli!</p>`,
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
