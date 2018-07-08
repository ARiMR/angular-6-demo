import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { Todo } from '../../demos/model/todo';

@Injectable()
export class TodosApiInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null)
      .pipe(
        mergeMap(() => {

          if (request.url.endsWith('/api/v1/todos') && request.method === 'GET') {
            console.log('Intercepted request', request);
            const showDone = request.params.get('showDone') === '1';
            const todos = this.getTodosFromLocalStorage().filter(todo => !todo.done || showDone);
            return of(new HttpResponse<any>({ status: 200, body: todos }));
          }

          if (request.url.endsWith('/api/v1/todos') && request.method === 'POST') {
            console.log('Intercepted request', request);
            const todos = this.getTodosFromLocalStorage();
            const nextId = Math.max(0, ...todos.map(todo => todo.id)) + 1;
            const newTodo: Todo = request.body;
            newTodo.id = nextId;
            todos.unshift(newTodo);
            this.saveTodosToLocalStorage(todos);
            return of(new HttpResponse<any>({ status: 200, body: newTodo }));
          }

          if (request.url.endsWith('/api/v1/todos/toggle') && request.method === 'POST') {
            console.log('Intercepted request', request);
            const todoToToggle: Todo = request.body;
            const todos = this.getTodosFromLocalStorage();
            todos.filter(todo => todo.id === todoToToggle.id).forEach(
              todo => todo.done = !todo.done
            );
            todoToToggle.done = !todoToToggle.done;
            this.saveTodosToLocalStorage(todos);
            return of(new HttpResponse<any>({ status: 200, body: todoToToggle }));
          }

          if (request.url.endsWith('/api/v1/todos') && request.method === 'DELETE') {
            console.log('Intercepted request', request);
            const idToDelete: number = +request.params.get('todoId');
            const todos = this.getTodosFromLocalStorage()
              .filter(todo => todo.id !== idToDelete);
            this.saveTodosToLocalStorage(todos);
            return of(new HttpResponse<any>({ status: 200, body: null }));
          }

          return next.handle(request);
        }),
        delay(500)
      );
  }

  getTodosFromLocalStorage(): Todo[] {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  saveTodosToLocalStorage(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
