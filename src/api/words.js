import { api } from '.';

export const getWords = () =>
    api.get(`/api/v1/words`);

export const addWord = (payload) =>
    api.post(`/api/v1/words`,payload);

export const modifyWord = (id,payload) =>
    api.put(`/api/v1/words/${id}`,payload);

export const getWord = ({wordId}) =>
    api.get(`/api/v1/words/${wordId}`);

export const removeWord = (wordId) =>
    api.delete(`/api/v1/words/${wordId}`);