// src/components/MenuItemList.tsx
import type { FC } from 'react';
import type { MenuItem } from './types';
import { Link } from '@/shared/ui/link';
import { Icon } from '@/shared/ui/icon';

export interface MenuItemListProps {
  items: MenuItem[];
  isMobile: boolean;
}

const MenuItemList: FC<MenuItemListProps> = ({ items, isMobile }) => {
  return (
    <div className={isMobile ? 'space-y-3 pt-2 pb-4 px-4' : ''}>
      {items.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.href}
            className={`${
              isMobile
                ? 'block text-gray-600 hover:text-blue-500'
                : 'text-gray-600 hover:text-blue-500'
            } ${item.icon ? 'flex items-center gap-2' : ''}`}
          >
            {item.icon && <Icon type={item.icon} />}
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default MenuItemList;
