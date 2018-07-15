import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as fromReducer from './form.actions';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions<Action>,
  ) {}

  /*@Effect({ dispatch: false })
  persistTodos(): Observable<Action> {
    return this.actions$
      .ofType(fromReducer.FormActionTypes.
      .pipe(
        tap((action: ActionTodosPersist) =>
          this.localStorageService.setItem(TODOS_KEY, action.payload.todos)
        )
      );
  }*/
}
