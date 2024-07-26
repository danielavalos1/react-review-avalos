import { apiFetch } from './api-fetch';

export const createFavorite = (data) => {
  return apiFetch('/favorites', { body: data });
}