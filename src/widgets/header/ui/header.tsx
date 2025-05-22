import { useRef, useEffect, useState } from 'react';
import { MenuItemList } from './menu-item-list';
import { selectIsAuthenticated } from '@/entities/auth';
import { Icon } from '@/shared/ui/icon';
import { useSelector } from '@/shared/lib/store/use-selector';
import { menuItems } from '../config';
import { Link } from '@/shared/ui/link';
import { ProfileButton } from '@/widgets/header/ui/profile-button';
import { useRouter } from '@/shared/lib/navigation/use-router';
import { ROUTES } from '@/shared/config';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { currentPath } = useRouter();
  const isAuthPage = currentPath === ROUTES.LOGIN;
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute w-full bg-white shadow-md" ref={menuRef}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">Wzz</Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <MenuItemList items={menuItems} />
          {!isAuthPage && (isAuthenticated ? (
            <ProfileButton />
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Войти
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-600 focus:outline-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon type="menu" />
        </button>
      </div>

      {/* Выпадающее меню (только на маленьких экранах) */}
      {isMenuOpen && (
        <div className="block md:hidden space-y-3 pt-2 pb-4 px-4">
          <MenuItemList items={menuItems} isMobile onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        </div>
      )}
    </header>
  );
};
