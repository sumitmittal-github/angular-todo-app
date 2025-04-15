import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // inject httpClient in service to fetch data from http API
  http = inject(HttpClient)

  // created a method which will return Array of Todo from http API
  getTodoListFromAPI() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
  
}