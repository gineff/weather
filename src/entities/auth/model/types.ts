export interface AuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface LoginPayload {
  user: User;
  token: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export type { AuthAction } from './actions';
