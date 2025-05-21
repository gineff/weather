// src/components/MenuItemList.tsx
import type { FC } from 'react';
import type { MenuItem } from './types';
import { Link } from '@/shared/ui/link';
import { Icon } from '@/shared/ui/icon';
import { ROUTES } from '@/shared/config';
import { selectIsAuthenticated } from '@/entities/auth';
import { useSelector } from '@/shared/lib/store/use-selector';

export interface MenuItemListProps {
  items: MenuItem[];
  isMobile?: boolean;
  onClick?: () => void;
}

export const MenuItemList: FC<MenuItemListProps> = ({ items, isMobile = false, onClick }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      {items.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.href}
            onClick={onClick}
            className={`${
              isMobile
                ? 'block text-gray-600 hover:text-blue-500'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            <span className={`${item.icon ? 'flex items-center gap-2' : ''}`}>
              {item.icon && <Icon type={item.icon} className="flex w-4 h-4" />}
              {item.label}
            </span>
          </Link>
        );
      })}
      {isAuthenticated && isMobile && (
        <>
          <Link
            to={ROUTES.PROFILE}
            className="block text-gray-600 hover:text-blue-500"
            onClick={onClick}
          >
            <span className={'flex items-center gap-2'}>
              <Icon type="user" className="flex w-4 h-6" />
              Профиль
            </span>
          </Link>
          <Link
            to={ROUTES.LOGOUT}
            className="block text-gray-600 hover:text-blue-500"
            onClick={onClick}
          >
            <span className={'flex items-center gap-2'}>
              <Icon type="power" className="flex w-4 h-6" />
              Выйти
            </span>
          </Link>
        </>
      )}
      {!isAuthenticated && isMobile && (
        <Link
          to={ROUTES.LOGIN}
          className="block text-gray-600 hover:text-blue-500"
          onClick={onClick}
        >
          <span className={'flex items-center gap-2'}>
            <Icon type="user" className="flex w-4 h-6" />
            Войти
          </span>
        </Link>
      )}
    </>
  );
};
