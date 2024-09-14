import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  active: boolean;
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
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
