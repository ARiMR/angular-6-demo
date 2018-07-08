import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo';

@Component({
  selector: 'ng6-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public loading = true;
  public showDone = true;

  public editedTodoTitle = '';

  public todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.loading = true;
    this.todoService.findAll(this.showDone)
      .subscribe(
        todos => {
          this.todos = todos;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
        });
  }

  onTodoEditKeypress(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.editedTodoTitle.length) {
      this.todoService.addTodo({
        id: null,
        createdAt: new Date(),
        done: false,
        title: this.editedTodoTitle
      }).subscribe(_ => {
        this.loadTodos();
      });
      this.editedTodoTitle = '';
    }
  }

  toggleTodo(done: boolean, todo: Todo) {
    console.log(done === todo.done ? 'Model === event in ngModelChange' : 'Are you running Angular version less than 6 ?');
    this.todoService.toggleTodo(todo)
      .subscribe(_ => {
        this.loadTodos();
      });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo)
      .subscribe(_ => {
        this.loadTodos();
      });
  }
}
