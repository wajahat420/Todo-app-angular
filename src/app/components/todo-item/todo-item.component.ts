import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() values: Todo;
  @Input() todo:Todo;
  @Output() editClicked:EventEmitter<number> = new EventEmitter();

  constructor() {
    this.values = {
      id : 0,
      productName :"",
      productDesc :"",
      productPrice: 0,
      productQty : 0,
      edit : true
    }
   }

   onKey = (event : any, field) => {
     this.values[field] = event.target.value
      console.log(event.target.value)
   }

   edit = (id : number) => {
     this.editClicked.emit(id)
    console.log("id =",id)
   }

  ngOnInit(): void {
  }

}
