import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo"

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})
export class AllTodosComponent implements OnInit {
  todos : Todo[];

  constructor() { 
    this.todos = [
      {
        id : 1,
        productName : "Orange",
        productDesc : "not having season",
        productPrice : 200,
        productQty : 5,
        edit : false,
      },
      {
        id : 2,
        productName : "Apple",
        productDesc : "having season",
        productPrice : 180,
        productQty : 15,
        edit : false,

      },      {
        id : 3,
        productName : "Mango",
        productDesc : "not having season",
        productPrice : 120,
        productQty : 50,
        edit : false,

      },      {
        id : 4,
        productName : "Banana",
        productDesc : "having season",
        productPrice : 60,
        productQty : 20,
        edit : false,

      }
    ]
  }

  clickedEdit = (id : number) => {
    this.todos.forEach((elem, index) => {
      if(elem.id == id){
        this.todos[index].edit = true
      }else{
        this.todos[index].edit = false
      }
    })
    console.log("get", id)
  }

  ngOnInit(): void {
  }

}
