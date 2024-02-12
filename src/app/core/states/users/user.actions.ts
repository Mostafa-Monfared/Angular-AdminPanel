import { Action } from '@ngrx/store';
import { DataServiceError } from "../../services/data-error.service";
import { DataAction, DataErrorAction } from "../data.actions";
import { User } from "./user.model";

export const ADD_USER = '[USER] ADD_USER';
export const ADD_USER_ERROR = '[USER] ADD_USER_ERROR';
export const ADD_USER_SUCCESS = '[USER] ADD_USER_SUCCESS';

export const GET_USER = '[USER] GET_USER';
export const GET_USER_SUCCESS = '[USER] GET_USER_SUCCESS';
export const GET_USER_ERROR = '[USER] GET_USER_ERROR';

export const UPDATE_USER = '[USER] UPDATE_USER';
export const UPDATE_USER_SUCCESS = '[USER] UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = '[USER] UPDATE_USER_ERROR';

export const GET_USERS = '[USER] GET_USERES';
export const GET_USERS_SUCCESS = '[USER] GET_USERES_SUCCESS';
export const GET_USERS_ERROR = '[USER] GET_USERES_ERROR';

export const DELETE_USER = '[USER] DELETE_USER';
export const DELETE_USER_SUCCESS = '[USER] DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = '[USER] DELETE_USER_ERROR';

export const SET_USER_LOADING = '[USER] SET_USER_LOADING';

export abstract class UserAction implements DataAction<User> {
    readonly type: string;
    constructor(public readonly payload: User) {}
  }
  
  export abstract class UserErrorAction implements DataErrorAction<User> {
    readonly type: string;
    constructor(public readonly payload: DataServiceError<User>) {}
  }
  
  export class GetUsers implements Action {
    readonly type = GET_USERS;
  }
  
  export class GetUsersSuccess implements Action {
    readonly type = GET_USERS_SUCCESS;
    constructor(public readonly payload: User[]) {}
  }
  
  export class GetUsersError implements Action {
    readonly type = GET_USERS_ERROR;
    constructor(public readonly payload: any) {}
  }
  
  export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public readonly payload: number) {}
  }
  
  export class GetUserSuccess implements Action {
    readonly type = GET_USER_SUCCESS;
    constructor(public readonly payload: User) {}
  }
  
  export class GetUserError extends UserErrorAction {
    readonly type = GET_USER_ERROR;
  }
  
  export class AddUser extends UserAction {
    readonly type = ADD_USER;
  }
  
  export class AddUserSuccess extends UserAction {
    readonly type = ADD_USER_SUCCESS;
  }
  
  export class AddUserError extends UserErrorAction {
    readonly type = ADD_USER_ERROR;
  }
  
  export class UpdateUser extends UserAction {
    readonly type = UPDATE_USER;
  }
  
  export class UpdateUserSuccess extends UserAction {
    readonly type = UPDATE_USER_SUCCESS;
  }
  
  export class UpdateUserError extends UserErrorAction {
    readonly type = UPDATE_USER_ERROR;
  }
  
  export class DeleteUser extends UserAction {
    readonly type = DELETE_USER;
  }
  
  export class DeleteUserSuccess extends UserAction {
    readonly type = DELETE_USER_SUCCESS;
  }
  
  export class DeleteUserError extends UserErrorAction {
    readonly type = DELETE_USER_ERROR;
  }
  
  export class SetUserLoading {
    readonly type = SET_USER_LOADING;
    constructor(public payload = true) {}
  }
  export type AllUserActions =
  | GetUser
  | GetUserSuccess
  | GetUserError
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserError
  | GetUsers
  | GetUsersSuccess
  | GetUsersError
  | AddUser
  | AddUserSuccess
  | AddUserError
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserError
  | SetUserLoading;
  
