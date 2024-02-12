import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as UserActions from '../index';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import { UserDataService } from '../../services/user-data.service';


const toAction = UserActions.toAction();
type UserAction = UserActions.UserAction;
type GetUserAction = UserActions.GetUser;

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userDataService: UserDataService
      ) {}
  
  getUsers$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType(UserActions.GET_USER),
      switchMap(() =>
        toAction(
          this.userDataService.getUsers(),
          UserActions.GetUsersSuccess,
          UserActions.GetUsersError
        )
      )
    ));

    
    getUser$: Observable<Action> = createEffect(() => this.actions$
      .pipe(
        ofType(UserActions.GET_USER),
        switchMap((action: GetUserAction) =>
          toAction(
            this.userDataService.getUser(action.payload),
            UserActions.GetUserSuccess,
            UserActions.GetUserError
          )
        )
      ));

  
  addUser$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType(UserActions.ADD_USER),
      concatMap((action: UserAction) =>
        toAction(
          this.userDataService.addUser(action.payload),
          UserActions.AddUserSuccess,
          UserActions.AddUserError
        )
      )
    ));

  
  deleteUser$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType(UserActions.DELETE_USER),
      concatMap((action: UserAction) =>
        toAction(
          this.userDataService.deleteUser(action.payload),
          UserActions.DeleteUserSuccess,
          UserActions.DeleteUserError
        )
      )
    ));

  

    updateUser$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType<UserActions.UpdateUser>(UserActions.UPDATE_USER),
      concatMap((action: UserAction) =>
        toAction(
          this.userDataService.updateUser(action.payload),
          UserActions.UpdateUserSuccess,
          UserActions.UpdateUserError
        )
      )
    ));



}
