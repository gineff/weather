import type { Dispatch } from 'react';
import type { LoginPayload, Credentials, RegisterData } from './types';
//import type { RootAction } from '@/app/store/types'; - тип RootAction декларирован глобально

export const login = (payload: LoginPayload) => ({
  type: 'auth/LOGIN' as const,
  payload,
});

export const logout = () => ({
  type: 'auth/LOGOUT' as const,
});

export const authLoading = () => ({
  type: 'auth/LOADING' as const,
});

export const authError = (error: string) => ({
  type: 'auth/ERROR' as const,
  payload: error,
});

// Union тип для всех действий
export type AuthAction =
  | ReturnType<typeof login>
  | ReturnType<typeof logout>
  | ReturnType<typeof authLoading>
  | ReturnType<typeof authError>;

// Асинхронное действие
export const loginUser = (credentials: Credentials) => async (dispatch: Dispatch<RootAction>) => {
  dispatch(authLoading());

  try {
    const response = await fetch('https://reqres.in/api/login', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch(login(data as LoginPayload));
      localStorage.setItem('token', data.token);
    } else {
      dispatch(authError(data.message || 'Login failed'));
    }
  } catch (error) {
    dispatch(authError(error instanceof Error ? error.message : 'Unknown error'));
  }
};

export const registerUser =
  (registerData: RegisterData) => async (dispatch: Dispatch<RootAction>) => {
    dispatch(authLoading());

    try {
      const response = await fetch('https://reqres.in/api/register', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1',
        },
        method: 'POST',
        body: JSON.stringify(registerData),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(login(data as LoginPayload));
      } else {
        dispatch(authError(data.message || 'Login failed'));
      }
    } catch (error) {
      dispatch(authError(error instanceof Error ? error.message : 'Unknown error'));
    }
  };
