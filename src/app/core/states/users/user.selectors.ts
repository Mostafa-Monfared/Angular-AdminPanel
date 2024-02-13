import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';

import { EntityState } from '../state-index-reducer';
import { UserState } from '../users/user.reducer';

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getUserState = createSelector(
  getEntityState,
  (state: EntityState) => state.users
);

const getAllUsers = createSelector(
  getUserState,
  (state: UserState) => state.users
);

const getUser = createSelector(
  getUserState,
  (state: UserState) => state.user
);

const getUsersLoading = createSelector(
  getUserState,
  (state: UserState) => state.loading
);

@Injectable()
export class UserSelectors {

  constructor(private store: Store<EntityState>) {}

  users$ = this.store.pipe(select(getAllUsers));
  user$ = this.store.pipe(select(getUser));
  userState$ = this.store.pipe(select(getUserState));
  loading$ = this.store.pipe(select(getUsersLoading));

}
