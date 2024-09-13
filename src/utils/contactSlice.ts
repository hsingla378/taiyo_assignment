import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [
      {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        active: true,
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        active: true,
      },
      {
        id: 3,
        firstName: "James",
        lastName: "Bond",
        active: false,
      },
      {
        id: 4,
        firstName: "Bruce",
        lastName: "Wayne",
        active: true,
      },
      {
        id: 5,
        firstName: "Clark",
        lastName: "Kent",
        active: true,
      },
      {
        id: 6,
        firstName: "Diana",
        lastName: "Prince",
        active: false,
      },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state?.contacts?.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact?.id !== action.payload
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
