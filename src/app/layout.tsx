import { useDispatch } from '@/shared/lib/store/use-dispatch';
import { Header } from '@/widgets/header/ui/header';
import { useEffect, type FC, type PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // dispatch({ type: 'auth/INIT' });
      dispatch({ type: 'auth/LOGIN', payload: { token } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-sky-200">
      <Header />
      <main className="container flex flex-row min-h-screen justify-center mx-auto px-4 py-8 pt-20">
        {children}
      </main>
    </div>
  );
};
