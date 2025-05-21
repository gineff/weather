import { useSelector } from '@/app/store';
import { Navigate } from '@/shared/ui/navigate'; // или кастомный Redirect

export const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return isAuth ? children : <Navigate to="/login" />;
};
