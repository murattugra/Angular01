import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  // yada  template:`<h2>Child</h2> yazarakta ustteki islem yapilmis olur
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  constructor() { }

  @Input() count: number = 0;


  ngOnInit(): void {
  }

}
