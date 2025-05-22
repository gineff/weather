import { useState } from 'react';
import { Input } from './input';
import { SubmitButton } from './submit-button';
import { FormError } from './form-error';
import { loginUser } from '../model/thunks';
import { selectAuthLoading, selectAuthError } from '../model/selectors';
import { useSelector } from '@/shared/lib/store/use-selector';
import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';
import { useRouter } from '@/shared/lib/navigation/use-router';
import { ROUTES } from '@/shared/config';

export const LoginForm = () => {
  const dispatch = useThunkDispatch();
  const loading = useSelector(selectAuthLoading);
  const serverError = useSelector(selectAuthError);
  const { navigate } = useRouter();
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [formError, setFormError] = useState<string | null>(null);

  const validate = () => {
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return 'Invalid email';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const error = validate();
    if (error) {
      setFormError(error);
      return;
    }

    try {
      await dispatch(loginUser({ email, password }));
      setEmail('');
      setPassword('');
      navigate(ROUTES.WEATHER);
    } catch {
      setFormError('Login failed');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-5"
    >
      <h2 className="text-2xl font-semibold text-center">Login</h2>

      <FormError error={formError || serverError} />

      <Input
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        disabled={loading}
      />

      <Input
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        disabled={loading}
      />

      <SubmitButton loading={loading}>Login</SubmitButton>
    </form>
  );
};
