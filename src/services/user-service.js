import { tokenKey } from "../config";
import { apiFetch } from "./api-fetch";

export const createUser = async (userData) => {
  const user = await apiFetch('/signup', { body: userData });
  const { token, ...userProps } = user;
  sessionStorage.setItem(tokenKey, token);
  return userProps;
}