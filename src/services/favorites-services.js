import { apiFetch } from './api-fetch';

export const createFavorite = (data) => {
  return apiFetch('/favorites', { body: data });
}

export const removeFavorite = (id) => {
  return apiFetch(`/favorites/${id}`, { method: "DELETE" });
}