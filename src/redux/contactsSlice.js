import { createSlice } from "@reduxjs/toolkit";
import initiaContactList from "../data.json";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items:
      JSON.parse(window.localStorage.getItem("phonebook")) || initiaContactList,
  },
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
