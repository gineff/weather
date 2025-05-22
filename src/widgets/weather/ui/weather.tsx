import { useEffect } from 'react';
import {
  selectWeatherData,
  selectWeatherError,
  selectWeatherLoading,
} from '@/entities/weather/model/selectors';
import { fetchWeather } from '@/entities/weather/model/thunks';
import { useSelector } from '@/shared/lib/store/use-selector';
import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';

export const WeatherWidget = () => {
  const dispatch = useThunkDispatch();
  const data = useSelector(selectWeatherData);
  const loading = useSelector(selectWeatherLoading);
  const error = useSelector(selectWeatherError);

  // При монтировании запрашиваем погоду для Москвы
  useEffect(() => {
    dispatch(fetchWeather('Moscow'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Загрузка погоды...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!data) return null;

  const weather = data.weather[0];

  return (
    <div className="p-6 rounded-2xl shadow bg-white w-full max-w-md h-fit">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-bold">{data.name}</div>
          <div className="text-sm text-gray-500">{weather.description}</div>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
          className="w-20 h-20"
        />
      </div>
      <div className="mt-4 text-3xl font-semibold">{Math.round(data.main.temp)}°C</div>
      <div className="text-sm text-gray-600">
        Ощущается как {Math.round(data.main.feels_like)}°C
      </div>
      <div className="mt-2 text-sm text-gray-700">
        Ветер: {data.wind.speed} м/с, Влажность: {data.main.humidity}%
      </div>
    </div>
  );
};
