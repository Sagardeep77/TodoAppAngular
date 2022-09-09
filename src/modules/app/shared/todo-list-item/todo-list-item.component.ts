import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})


export class TodoListItemComponent implements OnInit {
  @Input() item : string; 
  
  constructor() { }

  ngOnInit() {

  }

  

}
