import { createSlice } from '@reduxjs/toolkit';
import {
  operationFetchContacts,
  operationAddContact,
  operationDeleteContact,
} from './operations';

const INITIAL_STATE = {
  contacts: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(operationFetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(operationFetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.contacts = action.payload;
      })
      .addCase(operationFetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })

      .addCase(operationAddContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(operationAddContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.contacts = [action.payload, ...state.contacts.contacts];
      })
      .addCase(operationAddContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })

      .addCase(operationDeleteContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(operationDeleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.contacts = state.contacts.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(operationDeleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
