import { useState } from 'react';
import { Input } from './input';
import { SubmitButton } from './submit-button';
import { FormError } from './form-error';
import { registerUser } from '../model/thunks';
import { selectAuthLoading, selectAuthError } from '../model/selectors';
import { useSelector } from '@/shared/lib/store/use-selector';
import { useThunkDispatch } from '@/shared/lib/store/use-thunk-dispatch';

export const RegisterForm = () => {
  const dispatch = useThunkDispatch();
  const loading = useSelector(selectAuthLoading);
  const serverError = useSelector(selectAuthError);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const validate = () => {
    if (!username.trim()) {
      return 'Username is required';
    }
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
      await dispatch(registerUser({ username, email, password }));
      setEmail('');
      setUsername('');
      setPassword('');
    } catch {
      setFormError('Register failed');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-5"
    >
      <h2 className="text-2xl font-semibold text-center">Register</h2>

      <FormError error={formError || serverError} />

      <Input
        name="username"
        label="Username"
        type="text"
        value={username}
        onChange={setUsername}
        disabled={loading}
      />

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
