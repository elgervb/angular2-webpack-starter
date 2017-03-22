import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Http } from '@angular/http';

import { todoActionTypes } from './todo.actiontypes';

@Injectable()
export class TodoEffects {
  @Effect() fetchTodos = this.actions$
    .ofType(todoActionTypes.fetch)
    .switchMap(
      action => {debugger; return this.http.get('/assets/mock-data/todos.json')
        .map(res => ({
            type: `${todoActionTypes.fetch}Success`,
            payload: res.json()
        })); }
    );

  constructor(private actions$: Actions, private http: Http) {};
}
