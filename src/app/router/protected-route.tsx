import type { FC, PropsWithChildren } from 'react';
import { selectIsAuthenticated, selectIsInitialized } from '@/entities/auth';
import { useRouter } from '@/shared/lib/navigation/use-router';
import { useSelector } from '@/shared/lib/store/use-selector';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { navigate } = useRouter();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isInitialized = useSelector(selectIsInitialized);

  if (!isInitialized) {
    return null;
  }

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return children;
};
