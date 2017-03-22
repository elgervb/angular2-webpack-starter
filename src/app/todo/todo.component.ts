import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from './todo.model';
import { TodoFetchAction } from './todo.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'todo',
  templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {
  todos: Observable<{}>;

  constructor(private store: Store<Array<Todo>>) { }

  ngOnInit() {
    this.store.dispatch(new TodoFetchAction());
    this.todos = this.store.select('todo');
  }
}
