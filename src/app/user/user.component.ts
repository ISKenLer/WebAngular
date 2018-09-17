import { Component, OnInit } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
})
export class UserComponent implements OnInit {
  name = "";
  isHighlight = true;
  
  constructor() { }

  ngOnInit() {
  }

}
