import type { Dispatch } from 'react';
import { authLoading, login, authError } from './actions';
import type { Credentials, LoginPayload, RegisterData } from './types';

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
