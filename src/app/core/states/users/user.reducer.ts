import { User } from '../../states/users/user.model';
import * as UserActions from '../index';

export interface UserState {
  users: User[];
  user: User;
  loading: boolean;
  error: boolean;
}

export const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: false
};

export function reducer(
  state = initialState,
  action: UserActions.AllUserActions
): UserState {

  switch (action.type) {
    case UserActions.ADD_USER: {
      return { ...state, loading: true };
    }

    case UserActions.ADD_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: [...state.users, { ...action.payload }]
      };
    }

    case UserActions.ADD_USER_ERROR: {
      return { ...state, loading: false };
    }

    case UserActions.GET_USERS: {
      return { ...state, loading: true };
    }

    case UserActions.GET_USER_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    case UserActions.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    }

    case UserActions.GET_USER: {
      return { ...state, loading: true };
    }

    case UserActions.GET_USER_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    case UserActions.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    }

    case UserActions.DELETE_USER: {
      return {
        ...state,
        loading: true,
        users: state.users.filter(h => h !== action.payload)
      };
    }

    case UserActions.DELETE_USER_SUCCESS: {
      const result = { ...state, loading: false };
      return result;
    }

    case UserActions.DELETE_USER_ERROR: {
      return {
        ...state,
        users: [...state.users, action.payload.requestData],
        loading: false
      };
    }

    case UserActions.UPDATE_USER: {
      return {
        ...state,
        loading: isLoading(state.users, action)
      }
    }

    case UserActions.UPDATE_USER_SUCCESS: {
      return modifyUserState(state, action.payload);
    }

    case UserActions.UPDATE_USER_ERROR: {
      return {
        ...state,
        loading: false
      };
    }

    case UserActions.SET_USER_LOADING: {
      return {
        ...state,
        loading: action.payload == null ? true : action.payload
      };
    }
  }
  return state;
}

function isLoading(users: User[], action: any) {
  for (let user of users) {
    if (user.id === action.payload.id) {
      return true;
    }
  }
  return false;
}

function modifyUserState(userState: UserState, userChanges: Partial<User>): UserState {

  return {
    ...userState,
    loading: false,
    users: userState.users.map(h => {
      if (h.id === userChanges.id) {
        return { ...h, ...userChanges };
      } else {
        return h;
      }
    })
  };

}
