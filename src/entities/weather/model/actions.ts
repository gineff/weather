import type { WeatherData } from './types';

export const weatherLoading = () => ({
  type: 'weather/LOADING' as const,
});

export const weatherSuccess = (data: WeatherData) => ({
  type: 'weather/SUCCESS' as const,
  payload: data,
});

export const weatherError = (error: string) => ({
  type: 'weather/ERROR' as const,
  payload: error,
});

export type WeatherAction =
  | ReturnType<typeof weatherLoading>
  | ReturnType<typeof weatherSuccess>
  | ReturnType<typeof weatherError>;
