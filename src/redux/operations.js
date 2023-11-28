import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from 'services/api';

export const operationFetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const operationAddContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const contact = await addContact(newContact);
      return contact;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const operationDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (newContact, thunkAPI) => {
    try {
      const contact = await deleteContact(newContact);
      return contact;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
