import { selectIsAuthenticated } from '@/entities/auth';
import { useSelector } from '@/shared/lib/store/use-selector';
import { Link } from '@/shared/ui/link';

export const Home = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* SVG облака */}
      <div className="center">
        <div id="cloud"></div>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">Погода рядом с тобой</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-xl">
        Узнай актуальную погоду в любом городе мира. Просто перейди на страницу прогноза и введи
        нужный город.
      </p>
      {isAuthenticated ? (
        <Link
          to="/weather"
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-2xl transition"
        >
          Посмотреть погоду
        </Link>
      ) : (
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-2xl transition"
        >
          Войти
        </Link>
      )}
      <div className="absolute top-0 left-0 w-full h-48 pointer-events-none cloud-layer z-0" />
    </section>
  );
};
