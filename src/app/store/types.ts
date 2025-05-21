import type { AuthState, AuthAction } from '@/entities/auth/model/types';

export type RootState = {
  auth: AuthState;
};

export type RootAction = AuthAction; // | OtherAction | AnotherAction

export type ReducersMapObject<S, A> = {
  [K in keyof S]: (state: S[K], action: A) => S[K];
};
