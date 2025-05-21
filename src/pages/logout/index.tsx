import { logout } from '@/entities/auth/model/actions';
import { ROUTES } from '@/shared/config';
import { useRouter } from '@/shared/lib/navigation/use-router';
import { useDispatch } from '@/shared/lib/store/use-dispatch';

export const LogoutPage = () => {
  const { navigate } = useRouter();
  const dispatch = useDispatch();

  localStorage.removeItem('token');
  dispatch(logout());
  navigate(ROUTES.HOME);

  return null;
};
