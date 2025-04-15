import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todoService = inject(TodoService)
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodoListFromAPI()
      .subscribe(todoList => this.todoItems.set(todoList))
  }

}