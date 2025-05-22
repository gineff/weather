import type { AuthState, AuthAction } from '@/entities/auth/model/types';
import type { WeatherAction, WeatherState } from '@/entities/weather/model/types';

export type RootState = {
  auth: AuthState;
  weather: WeatherState 
};

export type RootAction = AuthAction | WeatherAction; // | OtherAction | AnotherAction

export type ReducersMapObject<S, A> = {
  [K in keyof S]: (state: S[K], action: A) => S[K];
};
