import { initialState as authInitialState } from '@/entities/auth/model/reducer';
import { initialState as weatherInitialState } from '@/entities/auth/model/reducer';

export const initialState: RootState = {
  auth: authInitialState,
  weather: weatherInitialState,
};
