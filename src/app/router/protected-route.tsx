import type { FC, PropsWithChildren } from 'react';
import { selectIsAuthenticated } from '@/entities/auth';
import { useRouter } from '@/shared/lib/navigation/use-router';
import { useSelector } from '@/shared/lib/store/use-selector';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { navigate } = useRouter();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (!isAuthenticated) navigate('/login');
  return children;
};
