import { useReducer, type ReactNode } from 'react';
import { initialState } from './initial-state';
import { authReducer } from '@/entities/auth/model/reducer';
import { StoreContext } from '@/shared/lib/store/context';
import type { AuthState } from '@/entities/auth/model/types';
import type { ReducersMapObject, RootAction } from './types';
import { weatherReducer } from '@/entities/weather/model/reducer';
import type { WeatherState } from '@/entities/weather/model/types';

const combineReducers =
  <S, A>(reducers: ReducersMapObject<S, A>) =>
  (state: S, action: A): S => {
    const newState = {} as S;
    for (const key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(
    combineReducers<{ auth: AuthState; weather: WeatherState }, RootAction>({
      //@ts-expect-error Нужно разбираться
      auth: authReducer,
      //@ts-expect-error Нужно разбираться
      weather: weatherReducer,
    }),
    initialState,
  );

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};
