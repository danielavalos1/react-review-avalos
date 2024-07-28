import { tokenKey } from "../config";
import { apiFetch } from "./api-fetch";

export const createUser = async (userData) => {
  const user = await apiFetch('/signup', { body: userData });
  const { token, ...userProps } = user;
  sessionStorage.setItem(tokenKey, token);
  return userProps;
}

export const getUser = async () => {
  const user = await apiFetch('/profile');
  const { _token, ...userProps } = user;
  //sessionStorage.setItem(tokenKey, _token);
  return userProps;
}

export const updateUser = async (userData) => {
  const user = await apiFetch('/profile', { body: userData, method: 'PATCH' });
  const { _token, ...userProps } = user;
  //sessionStorage.setItem(tokenKey, _token);
  return userProps;
}