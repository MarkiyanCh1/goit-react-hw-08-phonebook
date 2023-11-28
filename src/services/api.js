import axios from 'axios';

const apiBaseUrl = axios.create({
  baseURL: 'https://65635fedee04015769a71d54.mockapi.io/',
});

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
    const { data } = await apiBaseUrl.post('/contacts/', newContact);
    return data;
  } catch (error) {
    console.error(error);
  }
};
