import axios from 'axios';

const apiBaseUrl = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  apiBaseUrl.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const userRegiser = async userData => {
  const { data } = await apiBaseUrl.post('/users/signup', userData);
  setToken(data.token);
  return data;
};

export const userLogin = async userData => {
  const { data } = await apiBaseUrl.post('/users/login', userData);
  setToken(data.token);
  return data;
};

export const userLogout = async () => {
  const { data } = await apiBaseUrl.post('/users/logout');
  setToken('');
  return data;
};

export const refreshUser = async () => {
  const { data } = await apiBaseUrl.get('/users/current');
  return data;
};

export const fetchContacts = async () => {
  try {
    const { data } = await apiBaseUrl.get('/contacts/');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteContact = async id => {
  try {
    const { data } = await apiBaseUrl.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addContact = async newContact => {
  try {
    const { data } = await apiBaseUrl.post('/contacts', newContact);
    return data;
  } catch (error) {
    console.error(error);
  }
};
