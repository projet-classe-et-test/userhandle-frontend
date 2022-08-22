import { api } from './';

export const getUsers = () =>
    api.get(`/api/v1/users`);

export const addUser = (payload) =>
    api.post(`/api/v1/users`,payload);

export const modifyUser = (id,payload) =>
    api.put(`/api/v1/users/${id}`,payload);

export const getUser = ({userId}) =>
    api.get(`/api/v1/users/${userId}`);

export const removeUser = (userId) =>
    api.delete(`/api/v1/users/${userId}`);

export const markFavorite = (userId, payload) =>
    api.put(`/api/v1/users/fav/${userId}`,payload);

export const markUnFavorite = (userId, payload) =>
    api.put(`/api/v1/users/unfav/${userId}`,payload);

export const getFavoriteList = (userId) =>
    api.get(`/api/v1/users/favs/${userId}`);