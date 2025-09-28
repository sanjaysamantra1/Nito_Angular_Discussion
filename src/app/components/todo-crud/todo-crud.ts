import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { deleteTodo, toggleTodo } from '../../state_mgmt/actions/todo.actions';

@Component({
  selector: 'smartAssist-todo-crud',
  imports: [CommonModule],
  templateUrl: './todo-crud.html',
  styleUrl: './todo-crud.css'
})
export class TodoCrud {
  todoArr$: Observable<Todo[]>;
  store = inject(Store); // inject Store

  constructor() {
    this.todoArr$ = this.store.select((state: any) => state.todoArr);
  }
  deleteMyTodo(todoId: number) {
    this.store.dispatch(deleteTodo({ id: todoId }))
  }
  toggleMyTodo(todoId: number) {
    const actionObj = toggleTodo({ id: todoId });
    this.store.dispatch(actionObj);
  }
}
