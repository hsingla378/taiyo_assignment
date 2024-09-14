import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, ContactState } from "./types";

// Initial state with an empty contacts array
const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // Add a new contact
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },

    // Update an existing contact
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },

    // Delete a contact
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },

    // Clear all contacts
    clearContacts: (state) => {
      state.contacts = [];
    },
  },
});

export const { addContact, updateContact, deleteContact, clearContacts } =
  contactSlice.actions;

export default contactSlice.reducer;
