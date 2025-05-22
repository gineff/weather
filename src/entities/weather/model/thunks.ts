import type { Dispatch } from 'react';
import type { RootAction } from '@/app/store/types';
import { weatherLoading, weatherSuccess, weatherError } from './actions';

export const fetchWeather = (city: string) => async (dispatch: Dispatch<RootAction>) => {
  dispatch(weatherLoading());

  try {
    //в задании сказано, что нужно использовать token полученный при авторизации, но он не подходит
    const appid = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${appid}&lang=ru&units=metric`,
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
