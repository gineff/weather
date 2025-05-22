import { AboutPage } from '@/pages/about';
import { Home } from '@/pages/home';
import { LoginPage } from '@/pages/login';
import { LogoutPage } from '@/pages/logout';
import { NotFound } from '@/pages/not-found';
import { RegisterPage } from '@/pages/register';
import { WeatherPage } from '@/pages/weather';
import { ROUTES } from '@/shared/config';
import { ProtectedRoute } from './protected-route';

export const routes = [
  { path: ROUTES.HOME, component: <Home /> },
  { path: ROUTES.ABOUT, component: <AboutPage /> },
  { path: ROUTES.LOGIN, component: <LoginPage /> },
  { path: ROUTES.LOGOUT, component: <LogoutPage /> },
  { path: ROUTES.REGISTER, component: <RegisterPage /> },
  { path: ROUTES.NOT_FOUND, component: <NotFound /> },
  {
    path: ROUTES.WEATHER,
    component: (
      <ProtectedRoute>
        <WeatherPage />
      </ProtectedRoute>
    ),
  },
];
