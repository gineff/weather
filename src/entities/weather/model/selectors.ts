export const selectWeatherData = (state: RootState) => state.weather.data;
export const selectWeatherLoading = (state: RootState) => state.weather.loading;
export const selectWeatherError = (state: RootState) => state.weather.error;
