import type { AuthState, AuthAction } from './types';

export const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'auth/LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        loading: false,
        error: null,
      };
      
    case 'auth/LOGOUT':
      return initialState;
      
    case 'auth/LOADING':
      return {
        ...state,
        loading: true,
        error: null,
      };
      
    case 'auth/ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    default:
      return state;
  }
};
