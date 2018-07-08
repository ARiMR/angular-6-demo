import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  public findAll(showDone: boolean): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('/api/v1/todos', {
      params: {
        showDone: showDone ? '1' : '0'
      }
    });
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>('/api/v1/todos', todo);
  }

  public toggleTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>('/api/v1/todos/toggle', todo);
  }

  public deleteTodo(todo: Todo): Observable<void> {
    return this.httpClient.delete<void>('/api/v1/todos', {
      params: {
        'todoId': `${todo.id}`
      }
    });
  }

}
