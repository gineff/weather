import type { FC } from 'react';

export const AboutPage: FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full p-6 sm:p-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">О проекте</h1>

      <p className="mb-4">
        Это тестовое задание на позицию <strong>Стажер Frontend-разработчик</strong> в AI / Vibe
        Coding. Приложение позволяет авторизованному пользователю просматривать прогноз погоды в
        Москве.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Функциональность</h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          Авторизация через{' '}
          <a href="https://reqres.in" target="_blank" className="text-blue-600 underline">
            ReqRes API
          </a>
        </li>
        <li>
          Получение погоды из{' '}
          <a href="https://openweathermap.org" target="_blank" className="text-blue-600 underline">
            OpenWeatherMap
          </a>
        </li>
        <li>
          Защищённый маршрут <code>/weather</code>
        </li>
        <li>Собственный state-менеджер и роутер на базе React Hooks</li>
        <li>Архитектура по FSD-подходу</li>
        <li>Адаптивный интерфейс и SVG-облака в hero-блоке</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Технологии</h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>React + Vite</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
        <li>Feature-Sliced Design (FSD)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Страницы</h2>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          <code>/</code> — главная с hero-блоком
        </li>
        <li>
          <code>/login</code> — форма входа
        </li>
        <li>
          <code>/weather</code> — отображение прогноза
        </li>
        <li>
          <code>/about</code> — описание проекта (текущая страница)
        </li>
      </ul>

      <p className="text-sm text-gray-500 mt-8">
        Сделано с вниманием к деталям и интересом к вайб-кодингу 😎
      </p>
    </div>
  );
};
