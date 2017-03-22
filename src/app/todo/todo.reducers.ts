import { todoActionTypes } from './todo.actiontypes';
import { Todo } from './todo.model';

export const todoReducer = (state: Array<Todo>, {type, payload}) => {
  switch (type) {
    case todoActionTypes.fetch:
      debugger;
      return payload;
    default:
      return state;
  }
};
