import type { LoginPayload } from './types';
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
