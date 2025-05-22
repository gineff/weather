import { Icon } from '@/shared/ui/icon';
import { Link } from '@/shared/ui/link';
import { useState } from 'react';

export const ProfileButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center rounded-2xl focus:outline-none h-8 w-8 cursor-pointer hover:bg-gray-300"
      >
        <Icon type="user" className="w-6 h-6" />
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 border border-gray-200">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Профиль
          </Link>
          <Link
            to="/logout"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Выйти
          </Link>
        </div>
      )}

      {isMenuOpen && (
        <div className="fixed inset-0 z-10" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </div>
  );
};
