import { useContext } from 'react';
import { NavigationContext } from '@/shared/lib/navigation/context';
import { NotFound } from '@/pages/not-found';

interface RouteProps {
  path: string;
  component: React.ReactNode;
}

export const Route = ({ path, component }: RouteProps) => {
  const { currentPath } = useContext(NavigationContext);

  return currentPath === path ? component : <NotFound />;
};
