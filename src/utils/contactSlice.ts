import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, ContactState } from "./types";

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    clearContacts: (state) => {
      state.contacts = [];
    },
  },
});

export const { addContact, deleteContact, clearContacts } =
  contactSlice.actions;

export default contactSlice.reducer;
