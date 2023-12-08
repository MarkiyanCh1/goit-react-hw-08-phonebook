import { createSlice } from '@reduxjs/toolkit';
import {
  operationFetchContacts,
  operationAddContact,
  operationDeleteContact,
} from './operations';

const INITIAL_STATE = {
  contacts: [],
  isLoading: false,
  error: null,
};

const isStatusPending = state => {
  state.isLoading = true;
  state.error = null;
};

const isStatusRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      .addCase(operationFetchContacts.pending, isStatusPending)
      .addCase(operationFetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(operationFetchContacts.rejected, isStatusRejected)

      .addCase(operationAddContact.pending, isStatusPending)
      .addCase(operationAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [action.payload, ...state.contacts];
      })
      .addCase(operationAddContact.rejected, isStatusRejected)

      .addCase(operationDeleteContact.pending, isStatusPending)
      .addCase(operationDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(operationDeleteContact.rejected, isStatusRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
