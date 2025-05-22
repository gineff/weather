# 🌤️ Weather App — Тестовое задание (Frontend Intern @ AI / Vibe Coding)

Простое веб-приложение, которое позволяет авторизованному пользователю просматривать текущий прогноз погоды в Москве. Выполнено в рамках тестового задания на позицию стажера фронтенд-разработчика.

## 🔗 Демо

👉 [Посмотреть развернутое приложение](https://your-deployed-url.com)

---

## 📌 Возможности

- 🔐 Авторизация через [ReqRes API](https://reqres.in/)
- 🌤️ Прогноз погоды от [OpenWeatherMap](https://openweathermap.org/)
- 🚫 Защищённый маршрут `/weather`
- 🧭 Кастомный роутинг на React Hooks
- ⚛️ Минималистичный state-менеджер (без Redux/MobX)
- 🧱 FSD-архитектура: разделение на `entities`, `features`, `pages`, `shared`
- 📱 Адаптивный интерфейс
- 🎨 анимация облаков

---

## 🛠️ Стек технологий

| Инструмент        | Назначение                          |
|-------------------|-------------------------------------|
| **React + Vite**  | Основной фреймворк и сборщик        |
| **TypeScript**    | Типизация                           |
| **TailwindCSS**   | Стилизация UI                       |
| **FSD**           | Архитектурный подход                |
| **OpenWeatherMap**| API прогноза погоды                 |
| **ReqRes.in**     | Тестовый API для авторизации        |

---

## 📂 Структура проекта (FSD)

```bash
src/
├── app/               # Инициализация приложения
├── entities/          # auth, weather — бизнес-сущности
├── features/          # функции, построенные на сущностях
├── pages/             # страницы: login, weather, home
├── shared/            # UI-компоненты, типы, утилиты
└── widgets/           # составные блоки интерфейса

## Запуск проекта локально

git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
cp .env.example .env
npm run dev
