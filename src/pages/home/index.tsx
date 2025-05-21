import { selectIsAuthenticated } from '@/entities/auth';
import { useSelector } from '@/shared/lib/store/use-selector';

export const Home = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
