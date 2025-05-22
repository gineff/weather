import type { WeatherState, WeatherAction } from './types';

export const initialState: WeatherState = {
  loading: false,
  error: null,
  data: null,
};

export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case 'weather/LOADING':
      return { ...state, loading: true, error: null };
    case 'weather/SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null };
    case 'weather/ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
