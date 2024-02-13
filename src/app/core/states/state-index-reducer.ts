import { ActionReducerMap } from '@ngrx/store';

import * as actions from './index';
import * as usersReducers from './users/user.reducer';

export type Action = actions.UserAction;

export interface EntityState {
  users: usersReducers.UserState;
  user: usersReducers.UserState;
}

export const reducers: ActionReducerMap<EntityState> = {
  users: usersReducers.reducer,
  user: usersReducers.reducer,
};
