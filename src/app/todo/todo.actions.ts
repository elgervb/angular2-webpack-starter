
import { Action } from '@ngrx/store';
import { todoActionTypes } from './todo.actiontypes';
import { Todo } from './todo.model';

export class TodoFetchAction implements Action {
  type = todoActionTypes.fetch;

  constructor() {}
}

export class TodoAddAction implements Action {
  type = todoActionTypes.add;

  constructor(public payload: Todo) {}
}

export class TodoDeleteAction implements Action {
  type = todoActionTypes.delete;

  constructor(public payload: Todo) {}
}
