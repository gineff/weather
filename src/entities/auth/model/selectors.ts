//import type { RootState } from "@/app/store/types" - глобально декларирован;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthUser = (state: RootState) => state.auth.user;
export const selectAuthToken = (state: RootState) => state.auth.token;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;
