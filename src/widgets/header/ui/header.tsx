import { useRef, useEffect, useState } from 'react';
import MenuItemList from './menu-item-list';
import { menuItems } from '../config';
import { Icon } from '@/shared/ui/icon';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
        <div className="text-xl font-bold text-gray-800">MySite</div>

        <nav className="hidden md:flex space-x-6">
          <MenuItemList items={menuItems} isMobile={true} />
        </nav>

        <button
          className="md:hidden text-gray-600 focus:outline-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon type="menu" />
        </button>
      </div>

      {/* Выпадающее меню (только на маленьких экранах) */}
      {isMenuOpen && <MenuItemList items={menuItems} isMobile={true} />}
    </header>
  );
};
