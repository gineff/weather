import type { Dispatch } from 'react';
import type { RootAction } from '@/app/store/types';
import { weatherLoading, weatherSuccess, weatherError } from './actions';

export const fetchWeather = (city: string) => async (dispatch: Dispatch<RootAction>) => {
  dispatch(weatherLoading());

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=b7a9e9bc508890a38c4a1b8249cb4a6f&lang=ru&units=metric`,
    );

    const data = await response.json();

    if (response.ok) {
      dispatch(weatherSuccess(data));
    } else {
      dispatch(weatherError(data.message || 'Ошибка при получении погоды'));
    }
  } catch (error) {
    dispatch(weatherError(error instanceof Error ? error.message : 'Unknown error'));
  }
};
