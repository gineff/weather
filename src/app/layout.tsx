import { useDispatch } from '@/shared/lib/store/use-dispatch';
import { Header } from '@/widgets/header/ui/header';
import { useEffect, type FC, type PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      dispatch({ type: 'auth/LOGIN', payload: { token } });
    }
  },[])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-16">
        {children}
      </main>
    </div>
  );
};
