import { apiFetch } from "./api-fetch";
import { tokenKey } from "../config";

export const login = async (credentials) => {
  const user = await apiFetch("/login", { body: credentials });
  const { token, ...userProps } = user;
  sessionStorage.setItem(tokenKey, token);
  return userProps;
}

export const logout = async () => {
  const response = await apiFetch('/logout', { method: 'DELETE' });
  if (response.ok) {
    sessionStorage.removeItem(tokenKey);
  }
  return response;
}