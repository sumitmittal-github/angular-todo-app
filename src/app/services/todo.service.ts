import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoItems: Array<Todo> = [
    {
      id : 0,
      title : 'Groceris',
      completed : false,
      userId : 101
    },
    {
      id : 1,
      title : 'Car wash',
      completed : false,
      userId : 101
    }
  ]





  constructor() { }
}